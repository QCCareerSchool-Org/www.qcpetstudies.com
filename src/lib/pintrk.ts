/* eslint-disable custom/no-window-outside-effects */
import { Big } from 'big.js';

import { normalizeCity, normalizeEmailAddress, normalizeName, normalizeState, normalizeTelephoneNumber, normalizeZipCode } from './hash';
import type { Enrollment } from '@/domain/enrollment';

export interface LoadParams {
  em?: string;
  fn?: string;
  ln?: string;
  ph?: string;
  ct?: string;
  st?: string;
  country?: string;
  zp?: string;
  ge?: string;
  db?: string;
  external_id?: string;
}

interface LineItem {
  product_id: string;
  product_name: string;
  product_price: number;
  product_quantity: number;
}

interface LeadParams {
  event_id?: string;
}

interface CheckoutParams {
  event_id: string;
  order_id: string;
  value: number;
  currency: string;
  order_quantity: number;
  line_items: LineItem[];
}

interface Pintrk {
  (action: 'load', tagId: string, params?: LoadParams): void;
  (action: 'set', params: LoadParams): void;
  (action: 'track', type: 'lead', params?: LeadParams): void;
  (action: 'track', type: 'checkout', params: CheckoutParams): void;
}

declare global {
  interface Window {
    pintrk?: Pintrk;
  }
}

export interface PintrkUserData {
  emailAddress?: string | null;
  telephoneNumber?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  city?: string | null;
  provinceCode?: string | null;
  countryCode?: string | null;
  postalCode?: string | null;
}

// the tag only trims and lowercases before hashing, so apply the full normalization here
export const pintrkNormalize = (data: PintrkUserData): LoadParams => {
  const params: LoadParams = {};
  if (data.emailAddress) {
    params.em = normalizeEmailAddress(data.emailAddress);
  }
  if (data.telephoneNumber) {
    params.ph = normalizeTelephoneNumber(data.telephoneNumber);
  }
  if (data.firstName) {
    params.fn = normalizeName(data.firstName);
  }
  if (data.lastName) {
    params.ln = normalizeName(data.lastName);
  }
  if (data.city) {
    params.ct = normalizeCity(data.city);
  }
  if (data.provinceCode) {
    params.st = normalizeState(data.provinceCode);
  }
  if (data.countryCode) {
    params.country = data.countryCode.toLowerCase();
  }
  if (data.postalCode) {
    params.zp = normalizeZipCode(data.postalCode, data.countryCode ?? '');
  }
  return params;
};

// the tag hashes these values and attaches them to subsequent events
const pintrkUserData = (data: PintrkUserData): void => {
  window.pintrk?.('set', pintrkNormalize(data));
};

export const pintrkLead = (eventId?: string, userData?: PintrkUserData): void => {
  if (userData) {
    pintrkUserData(userData);
  }
  if (typeof eventId !== 'undefined') {
    // log the conversion with a specfic event_id
    window.pintrk?.('track', 'lead', { event_id: eventId }); // eslint-disable-line camelcase
    return;
  }
  window.pintrk?.('track', 'lead');
};

export const pintrkSale = (enrollment: Enrollment): void => {
  pintrkUserData({
    emailAddress: enrollment.emailAddress,
    telephoneNumber: enrollment.telephoneNumber,
    firstName: enrollment.firstName,
    lastName: enrollment.lastName,
    city: enrollment.city,
    provinceCode: enrollment.provinceCode,
    countryCode: enrollment.countryCode,
  });
  /* eslint-disable camelcase */
  window.pintrk?.('track', 'checkout', {
    event_id: enrollment.id.toString(),
    order_id: enrollment.id.toString(),
    value: enrollment.cost,
    currency: enrollment.currencyCode,
    order_quantity: enrollment.courses.length,
    line_items: enrollment.courses.map(c => ({
      product_id: c.code,
      product_name: c.name,
      product_price: parseFloat(Big(c.baseCost).minus(c.planDiscount).minus(c.discount).toFixed(2)),
      product_quantity: 1,
    })),
  });
  /* eslint-enable camelcase */
};
