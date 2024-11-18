import 'server-only';

import { randomInt } from 'crypto';
import { cookies, headers } from 'next/headers';

type Data = {
  testGroup: number;
  countryCode: string;
  provinceCode: string | null;
};

export const getData = (): Data => {
  const headerList = headers();
  const countryCode = headerList.get('x-vercel-ip-country') ?? 'US';
  const provinceCode = headerList.get('x-vercel-ip-country-region');

  const cookieStore = cookies();
  const testGroupCookie = parseInt(cookieStore.get('testGroup')?.value ?? '', 10);

  const testGroup = isNaN(testGroupCookie) ? randomInt(1, 12) : testGroupCookie;

  return { testGroup, countryCode, provinceCode };
};
