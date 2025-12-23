import { randomInt } from 'crypto';
import { cookies, headers } from 'next/headers';

import { getParam } from './getParam';
import type { Range } from './range';

type TestGroup = Range<0, 11>;

interface BaseData {
  testGroup: TestGroup;
  countryCode: string;
  provinceCode: string | null;
}

interface DataWithDate extends BaseData {
  date: number;
}

export function getServerData(): Promise<BaseData>;

export function getServerData(
  searchParams: Promise<Record<string, string | string[] | undefined>>,
): Promise<DataWithDate>;

export async function getServerData(
  searchParams?: Promise<Record<string, string | string[] | undefined>>,
): Promise<BaseData | DataWithDate> {
  const headerList = await headers();
  const countryCode = headerList.get('x-vercel-ip-country') ?? 'US';
  const provinceCode = headerList.get('x-vercel-ip-country-region');
  let date = Date.now();

  const cookieStore = await cookies();
  const testGroupCookie = parseInt(cookieStore.get('testGroup')?.value ?? '', 10);

  const testGroup = isTestGroup(testGroupCookie) ? testGroupCookie : randomInt(1, 12) as TestGroup;

  if (searchParams) {
    const parameters = await searchParams;
    const dateOverrideParameter = getParam(parameters.date);
    if (dateOverrideParameter) {
      date = Date.parse(dateOverrideParameter);
    }
  }

  return { testGroup, countryCode, provinceCode, date };
};

const isTestGroup = (o: number): o is TestGroup => {
  return !isNaN(o) && o >= 0 && o <= 11 && o === Math.floor(o);
};
