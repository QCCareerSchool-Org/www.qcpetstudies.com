import type { Result } from 'generic-result-type';
import { failure, success } from 'generic-result-type';
import qs from 'qs';

import type { CourseCode } from '@/domain/courseCode';
import type { CurrencyCode } from '@/domain/currencyCode';
import type { Price } from '@/domain/price';
import { isPrice } from '@/domain/price';
import type { School } from '@/domain/school';

export const fetchPrice = async (
  courses: CourseCode[],
  countryCode: string,
  provinceCode: string | null,
  options?: PriceQueryOptions,
  signal?: AbortSignal,
  firewallBypassSecret?: string,
): Promise<Result<Price>> => {
  try {
    const priceQuery: PriceQuery = { countryCode, provinceCode: provinceCode ?? undefined, courses, options };
    const url = `${process.env.PRICES_ENDPOINT}?${qs.stringify(priceQuery)}`;

    const headers: Record<string, string> = { 'X-API-Version': '2' };
    if (firewallBypassSecret) {
      headers['X-Firewall-Bypass-Secret'] = firewallBypassSecret;
    }

    const response = await fetch(url, { headers, signal });
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
