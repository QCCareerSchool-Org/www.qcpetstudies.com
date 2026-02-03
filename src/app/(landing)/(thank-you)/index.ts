import type { PageProps } from '@/app/serverComponent';
import type { Lead } from '@/domain/lead';
import type { UserValues } from '@/domain/userValues';
import { fbPostLead } from '@/lib/facebookConversionAPI';
import { getLead } from '@/lib/getLead';
import { getServerData } from '@/lib/getServerData';
import { createJwt } from '@/lib/jwt';

interface ThankyouPageData {
  emailAddress?: string;
  countryCode: string;
  lead?: Lead;
  jwt: string | null;
  recent: boolean;
  date: number;
}

export const getThankyouData = async (props: PageProps): Promise<ThankyouPageData> => {
  const data = await getServerData(props.searchParams);
  const date = data.date;
  const lead = data.leadId ? await getLead(data.leadId) : undefined;
  let jwt: string | null = null;

  let recent = false;

  if (lead?.success) {
    recent = lead.value.created > date - 604800000; // 7 days
    if (recent) {
      try {
        await fbPostLead(lead.value.leadId, new Date(lead.value.created), lead.value.emailAddress, lead.value.firstName, lead.value.lastName, lead.value.countryCode, data.url, lead.value.ip ?? data.serverIp, data.userAgent, data.fbc, data.fbp);
      } catch (err) {
        console.error(err);
      }
    }
    const userValues: UserValues = {
      ...data.userValues,
      emailAddress: lead.value.emailAddress,
    };
    if (lead.value.telephoneNumber) {
      userValues.telephoneNumber = lead.value.telephoneNumber;
    }
    if (lead.value.firstName) {
      userValues.firstName = lead.value.firstName;
    }
    if (lead.value.lastName) {
      userValues.lastName = lead.value.lastName;
    }
    if (lead.value.city) {
      userValues.city = lead.value.city;
    }
    if (lead.value.provinceCode) {
      userValues.provinceCode = lead.value.provinceCode;
    }
    if (lead.value.countryCode) {
      userValues.countryCode = lead.value.countryCode;
    }
    jwt = await createJwt(userValues);
  }

  const countryCode = lead?.success ? lead.value.countryCode ?? 'US' : 'US';
  const emailAddress = lead?.success ? lead.value.emailAddress : undefined;

  return { emailAddress, countryCode, lead: lead?.success ? lead.value : undefined, jwt, recent, date };
};
