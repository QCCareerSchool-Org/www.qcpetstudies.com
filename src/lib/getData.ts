import { randomInt } from 'crypto';
import { cookies, headers, type UnsafeUnwrappedCookies, type UnsafeUnwrappedHeaders } from 'next/headers';

type Data = {
  testGroup: number;
  countryCode: string;
  provinceCode: string | null;
};

export const getData = (): Data => {
  const headerList = (headers() as unknown as UnsafeUnwrappedHeaders);
  const countryCode = headerList.get('x-vercel-ip-country') ?? 'US';
  const provinceCode = headerList.get('x-vercel-ip-country-region');

  const cookieStore = (cookies() as unknown as UnsafeUnwrappedCookies);
  const testGroupCookie = parseInt(cookieStore.get('testGroup')?.value ?? '', 10);

  const testGroup = isNaN(testGroupCookie) ? randomInt(1, 12) : testGroupCookie;

  return { testGroup, countryCode, provinceCode };
};
