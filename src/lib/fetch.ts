import 'server-only';

import qs from 'qs';

import type { CurrencyCode } from '@/domain/currencyCode';
import type { Enrollment } from '@/domain/enrollment';
import { isRawEnrollment } from '@/domain/enrollment';
import type { Price } from '@/domain/price';
import { isPrice } from '@/domain/price';
import type { School } from '@/domain/school';

const pricesUrl = process.env.PRICES_ENDPOINT;

export const fetchPrice = async (priceQuery: PriceQuery, controller?: AbortController): Promise<Price | undefined> => {
  try {
    const url = pricesUrl + '?' + qs.stringify(priceQuery);
    const response = await fetch(url, {
      headers: { 'X-API-Version': '2' },
      signal: controller?.signal,
    });
    if (!response.ok) {
      throw Error(response.statusText);
    }
    const responseBody: unknown = await response.json();
    if (isPrice(responseBody)) {
      return responseBody;
    }
  } catch (err) {
    if (!controller?.signal.aborted) {
      console.error(err);
    }
  }
};

export interface PriceQuery {
  courses: string[];
  countryCode: string;
  provinceCode?: string;
  options?: PriceQueryOptions;
}

type PriceQueryOptions = {
  noShipping?: boolean;
  discountAll?: boolean;
  discount?: { [d in CurrencyCode]?: number } & { default: number };
  discountSignature?: string;
  depositOverrides?: { [code: string]: number };
  installmentsOverride?: number;
  studentDiscount?: boolean;
  school?: School;
  promoCode?: string;
  dateOverride?: Date;
};

export const getEnrollment = async (id: number, code: string): Promise<Enrollment> => {
  const url = `${process.env.ENROLLMENT_ENDPOINT}/${id}?code=${encodeURIComponent(code)}`;
  const response = await fetch(url);
  if (!response.ok) {
    throw Error(response.statusText);
  }
  const responseBody: unknown = await response.json();
  if (!isRawEnrollment(responseBody)) {
    throw Error('Invalid reponse');
  }
  return {
    ...responseBody,
    transactionTime: responseBody.transactionTime === null ? null : new Date(responseBody.transactionTime),
    paymentDate: new Date(responseBody.paymentDate),
  };
};
