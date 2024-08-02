import * as brevo from '@getbrevo/brevo';
import type { NextRequest } from 'next/server';
import { z, ZodError } from 'zod';
import { zfd } from 'zod-form-data';
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
  listId: zfd.numeric(z.number().multipleOf(1)),
  gclid: zfd.text(z.string().optional()),
  msclkid: zfd.text(z.string().optional()),
  utmSource: zfd.text(z.string().optional()),
  utmMedium: zfd.text(z.string().optional()),
  utmCampaign: zfd.text(z.string().optional()),
  utmContent: zfd.text(z.string().optional()),
  utmTerm: zfd.text(z.string().optional()),
});

const brevoApiKey = process.env.BREVO_API_KEY ?? '';

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
    const createContactResult = await createBrevoContact(body.emailAddress, body.firstName, body.lastName, body.countryCode, body.emailOptIn ? [ body.listId ] : undefined);
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
      school: 'QC Event School',
      testGroup: 1,
      emailAddress: body.emailAddress,
      telephoneNumber: null,
      firstName: body.firstName ?? null,
      lastName: body.lastName ?? null,
      emailOptIn: body.emailOptIn ?? null,
      smsOptIn: null,
      countryCode: body.countryCode,
      provinceCode: body.provinceCode ?? null,
      gclid: body.gclid ?? null,
      msclkid: body.msclkid ?? null,
      marketing,
      courses: undefined,
    };
    try {
      const response = await addLead(payload);
      params.set('leadId', response.leadId);
      await fbPostLead(response.leadId, new Date(), body.emailAddress, body.firstName, body.lastName, body.countryCode, undefined, clientIpAddress ?? undefined, clientUserAgent ?? undefined, fbc, fbp);
    } catch (err) {
      console.error(err);
    }

    // trigger Brevo M1 email
    try {
      await sendBrevoEmail(body.emailAddress, body.firstName, body.lastName);
    } catch (err) {
      console.error(err);
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

const createBrevoContact = async (emailAddress: string, firstName?: string, lastName?: string, countryCode?: string, listIds?: number[]): Promise<boolean> => {
  const contactsApi = new brevo.ContactsApi();
  contactsApi.setApiKey(brevo.ContactsApiApiKeys.apiKey, brevoApiKey);

  const createContactResult = await contactsApi.createContact({
    email: emailAddress,
    listIds,
    updateEnabled: true,
    attributes: {
      FIRSTNAME: firstName,
      LASTNAME: lastName,
      COUNTRY_CODE: countryCode?.toLocaleUpperCase(),
    },
  });

  return createContactResult.response.complete;
};

const sendBrevoEmail = async (emailAddress: string, firstName?: string, lastName?: string): Promise<void> => {
  const transactionalEmailsApi = new brevo.TransactionalEmailsApi();
  transactionalEmailsApi.setApiKey(brevo.TransactionalEmailsApiApiKeys.apiKey, brevoApiKey);

  await transactionalEmailsApi.sendTransacEmail({
    to: firstName ? [ { email: emailAddress, name: firstName } ] : [ { email: emailAddress } ],
    templateId: 7,
    params: { name: firstName, surname: lastName },
    // headers: {
    //   'X-Mailin-custom': 'custom_header_1:custom_value_1|custom_header_2:custom_value_2',
    // },
  });
};
