import qs from 'qs';

import { PriceResult } from '../models/price';

type PriceOptions = {
  promoCode?: string;
  school?: string;
};

export const lookupPrices = async (courses: string[], countryCode: string, provinceCode: string | null, options?: PriceOptions): Promise<PriceResult> => {
  const url = 'https://api.qccareerschool.com/prices?' + qs.stringify({ courses, countryCode, provinceCode: provinceCode ?? undefined, options });

  const response = await fetch(url, {
    headers: { 'X-API-Version': '2' },
  });
  if (!response.ok) {
    throw Error('Unable to fetch prices');
  }
  return response.json() as Promise<PriceResult>;
};
