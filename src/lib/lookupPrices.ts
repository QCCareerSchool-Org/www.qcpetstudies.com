import qs from 'qs';

import { Price } from '../models/price';

type PriceOptions = {
  promoCode?: string;
  school?: string;
};

export const lookupPrices = async (courses: string[], countryCode: string, provinceCode: string | null, options?: PriceOptions): Promise<Price> => {
  const o = options ? { ...options, school: 'QC Pet Studies' } : { school: 'QC Pet Studies' };
  const url = 'https://api.qccareerschool.com/prices?' + qs.stringify({ courses, countryCode, provinceCode: provinceCode ?? undefined, options: o });

  const response = await fetch(url, {
    headers: { 'X-API-Version': '2' },
  });
  if (!response.ok) {
    throw Error('Unable to fetch prices');
  }
  return response.json() as Promise<Price>;
};
