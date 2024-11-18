import qs from 'qs';

import { getData } from './getData';
import { Price } from '@/models/price';

type PriceOptions = {
  promoCode?: string;
  school?: string;
};

export const lookupPrices = async (courses: string[], options?: PriceOptions): Promise<Price> => {

  const { countryCode, provinceCode } = getData();

  const o = options ? { ...options, school: 'QC Pet Studies' } : { school: 'QC Pet Studies' };
  const url = process.env.PRICES_ENDPOINT + '?' + qs.stringify({ courses, countryCode, provinceCode: provinceCode ?? undefined, options: o });

  const response = await fetch(url, {
    headers: { 'X-API-Version': '2' },
  });
  if (!response.ok) {
    throw Error('Unable to fetch prices');
  }
  return response.json() as Promise<Price>;
};
