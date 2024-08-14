import type { NextRequest } from 'next/server';
import { z, ZodError } from 'zod';
import { zfd } from 'zod-form-data';
import { createBrevoContact, sendBrevoEmail } from '../../lib/brevoAPI';
import { fbPostLead } from '../../lib/facebookConversionAPI';
import { getClientIp } from '../../lib/getClientIp';
import type { LeadPayload } from '../../lib/leads';
import { addLead } from '../../lib/leads';

export const dynamic = 'force-dynamic'; // defaults to auto

const schema = zfd.formData({
  firstName: zfd.text(z.string().max(191).optional()),
  lastName: zfd.text(z.string().max(191).optional()),
  emailAddress: zfd.text(z.string().email()),
  emailOptIn: zfd.checkbox(),
  countryCode: zfd.text(z.string().length(2)),
  provinceCode: zfd.text(z.string().length(2).optional()),
  successLocation: zfd.text(z.string().regex(/^http(s?):\/\//ui)),
  emailTemplateId: zfd.numeric(z.number().optional()),
  listId: zfd.numeric(z.number().multipleOf(1)),
  gclid: zfd.text(z.string().optional()),
  msclkid: zfd.text(z.string().optional()),
  utmSource: zfd.text(z.string().optional()),
  utmMedium: zfd.text(z.string().optional()),
  utmCampaign: zfd.text(z.string().optional()),
  utmContent: zfd.text(z.string().optional()),
  utmTerm: zfd.text(z.string().optional()),
  courseCodes: zfd.repeatableOfType(z.string()).optional(),
});

export const POST = async (request: NextRequest): Promise<Response> => {
  const forwardedFor = request.headers.get('x-forwarded-for') ?? undefined;
  const realIp = request.headers.get('x-real-ip') ?? undefined;

  const clientIpAddress = getClientIp(forwardedFor, realIp);
  const clientUserAgent = request.headers.get('user-agent');
  const fbc = request.cookies.get('_fbc')?.value;
  const fbp = request.cookies.get('_fbp')?.value;

  try {
    const body = await schema.parseAsync(await request.formData());

    const params = new URLSearchParams({
      emailAddress: body.emailAddress,
      emailOptIn: body.emailOptIn ? '1' : '0',
    });
    if (body.firstName) {
      params.set('firstName', body.firstName);
    }
    if (body.lastName) {
      params.set('lastName', body.lastName);
    }

    // create Brevo contact
    const createContactResult = await createBrevoContact(body.emailAddress, body.firstName, body.lastName, body.countryCode, body.provinceCode ?? '', { STATUS_PET_LEAD: true }, body.emailOptIn ? [ body.listId ] : undefined);
    if (!createContactResult) {
      throw Error('Unable to create contact');
    }

    // add internal lead
    const marketing = body.utmSource || body.utmMedium || body.utmCampaign || body.utmContent || body.utmTerm // eslint-disable-line @typescript-eslint/prefer-nullish-coalescing
      ? {
        source: body.utmSource || null, // eslint-disable-line @typescript-eslint/prefer-nullish-coalescing
        medium: body.utmMedium || null, // eslint-disable-line @typescript-eslint/prefer-nullish-coalescing
        campaign: body.utmCampaign || null, // eslint-disable-line @typescript-eslint/prefer-nullish-coalescing
        content: body.utmContent || null, // eslint-disable-line @typescript-eslint/prefer-nullish-coalescing
        term: body.utmTerm || null, // eslint-disable-line @typescript-eslint/prefer-nullish-coalescing
      }
      : undefined;
    const payload: LeadPayload = {
      school: 'QC Pet Studies',
      emailAddress: body.emailAddress,
      firstName: body.firstName,
      lastName: body.lastName,
      gclid: body.gclid,
      msclkid: body.msclkid,
      marketing,
      courses: body.courseCodes,
    };
    if (body.emailOptIn) {
      payload.emailOptIn = true;
    }
    try {
      const response = await addLead(payload, { ipAddress: clientIpAddress, userAgent: clientUserAgent });
      params.set('leadId', response.leadId);
      await fbPostLead(response.leadId, new Date(), body.emailAddress, body.firstName, body.lastName, body.countryCode, undefined, clientIpAddress ?? undefined, clientUserAgent ?? undefined, fbc, fbp);
    } catch (err) {
      console.error(err);
    }

    // semd email
    if (typeof body.emailTemplateId !== 'undefined') {
      try {
        await sendBrevoEmail(body.emailTemplateId, body.emailAddress, body.firstName, body.lastName);
      } catch (err) {
        console.error(err);
      }
    }

    // redirect to success page
    return Response.redirect(body.successLocation + '?' + params.toString(), 303);

  } catch (err) {
    if (err instanceof ZodError) {
      return Response.json({ message: 'Invalid request', errors: err.errors }, { status: 400 });
    }

    console.error(err);

    if (err instanceof Error) {
      return Response.json({ message: err.message }, { status: 500 });
    }

    return Response.json({ message: 'Unknown error', err }, { status: 500 });
  }
};
