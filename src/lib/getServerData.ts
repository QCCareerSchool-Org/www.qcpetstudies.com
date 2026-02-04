import 'server-only';

import { cookies, headers } from 'next/headers';

import { getParam } from './getParam';
import type { UserValues } from '@/domain/userValues';
import { isUserValues } from '@/domain/userValues';

interface BaseData {
  countryCode: string;
  provinceCode: string | null;
  clientIp: string | null;
  userAgent: string | null;
  url: string | null;
  userValues: UserValues | null;
  fbc?: string;
  fbp?: string;
}

interface DataWithDate extends BaseData {
  date: number;
  leadId?: string;
}

export function getServerData(): Promise<BaseData>;

export function getServerData(
  searchParams: Promise<Record<string, string | string[] | undefined>>,
): Promise<DataWithDate>;

export async function getServerData(
  searchParams?: Promise<Record<string, string | string[] | undefined>>,
): Promise<BaseData | DataWithDate> {
  const [ headersList, cookieStore ] = await Promise.all([ headers(), cookies() ]);
  const countryCode = headersList.get('x-vercel-ip-country') ?? 'US';
  const provinceCode = headersList.get('x-vercel-ip-country-region');
  const clientIp = headersList.get('x-vercel-ip');
  const userAgent = headersList.get('user-agent');
  const url = headersList.get('next-url');
  let date = Date.now();

  const fbc = cookieStore.get('_fbc')?.value;
  const fbp = cookieStore.get('_fbp')?.value;
  const userCookie = cookieStore.get('user')?.value;
  const userValues = isUserValues(userCookie) ? userCookie : null;

  if (!searchParams) {
    return { countryCode, provinceCode, clientIp, userAgent, url, userValues, fbc, fbp };
  }

  const parameters = await searchParams;
  const leadId = getParam(parameters.leadId);

  // allow overriding the date when not in production
  if (process.env.VERCEL_ENV !== 'production') {
    const dateOverrideParameter = getParam(parameters.date);
    if (dateOverrideParameter) {
      date = Date.parse(dateOverrideParameter);
    }
  }

  return { countryCode, provinceCode, clientIp, userAgent, url, userValues, fbc, fbp, date, leadId };
};
