import { PriceResult } from '../models/price';
import { createQueryString } from './querystring';

export const lookupPrices = async (courses: string[], countryCode: string, provinceCode: string | null): Promise<PriceResult> => {
  const url = 'https://api.qccareerschool.com/prices?' +
    (provinceCode ? createQueryString({ courses, countryCode, provinceCode }) : createQueryString({ courses, countryCode }));
  const response = await fetch(url, {
    headers: { 'X-API-Version': '2' },
  });
  if (!response.ok) {
    throw Error('Unable to fetch prices');
  }
  return response.json() as Promise<PriceResult>;
};
