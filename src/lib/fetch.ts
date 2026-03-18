import 'server-only';

import type { Result } from 'generic-result-type';
import { failure, success } from 'generic-result-type';
import qs from 'qs';

import type { CourseCode } from '@/domain/courseCode';
import type { CurrencyCode } from '@/domain/currencyCode';
import type { Enrollment } from '@/domain/enrollment';
import { isRawEnrollment } from '@/domain/enrollment';
import type { Price } from '@/domain/price';
import { isPrice } from '@/domain/price';
import type { School } from '@/domain/school';

const pricesUrl = process.env.PRICES_ENDPOINT;

export const fetchPrice = async (courses: CourseCode[], countryCode: string, provinceCode: string | null, options?: PriceQueryOptions, signal?: AbortSignal): Promise<Result<Price>> => {
  try {
    const priceQuery: PriceQuery = { countryCode, provinceCode: provinceCode ?? undefined, courses, options };

    const url = `${pricesUrl}?${qs.stringify(priceQuery)}`;
    const response = await fetch(url, {
      headers: { 'X-API-Version': '2' },
      signal,
    });

    if (!response.ok) {
      throw Error(response.statusText);
    }

    const responseBody: unknown = await response.json();
    if (!isPrice(responseBody)) {
      throw Error('Unexpected response');
    }

    return success(responseBody);
  } catch (err) {
    if (!signal?.aborted) {
      console.error(err);
    }
    return failure(err instanceof Error ? err : Error(String(err)));
  }
};

export interface PriceQuery {
  courses: string[];
  countryCode: string;
  provinceCode?: string;
  options?: PriceQueryOptions;
}

interface PriceQueryOptions {
  noShipping?: boolean;
  discountAll?: boolean;
  discount?: Partial<Record<CurrencyCode, number>> & { default: number };
  discountSignature?: string;
  depositOverrides?: Record<string, number>;
  installmentsOverride?: number;
  studentDiscount?: boolean;
  school?: School;
  promoCode?: string;
  dateOverride?: Date;
}

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
