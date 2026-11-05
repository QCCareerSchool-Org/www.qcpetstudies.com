import 'server-only';

import { Big } from 'big.js';

import { hash, normalizeCity, normalizeEmailAddress, normalizeName, normalizeState, normalizeTelephoneNumber, normalizeZipCode } from './hash';
import type { Enrollment } from '@/domain/enrollment';
import type { Lead } from '@/domain/lead';

const adAccountId = process.env.PINTEREST_AD_ACCOUNT_ID;
const accessToken = process.env.PINTEREST_CONVERSION_TOKEN;

export const pinterestPostPurchase = async (
  enrollment: Enrollment,
  eventSourceUrl: string,
  clientIPAddress: string | null,
  clientUserAgent: string | null,
  epik?: string,
): Promise<unknown> => {
  const eventTime = enrollment.transactionTime ?? new Date();

  const userData: UserData = {
    em: [ hash(normalizeEmailAddress(enrollment.emailAddress)) ],
    ph: [ hash(normalizeTelephoneNumber(enrollment.telephoneNumber)) ], // NOTE: we don't have the telephone country code
    fn: [ hash(normalizeName(enrollment.firstName)) ],
    ln: [ hash(normalizeName(enrollment.lastName)) ],
    ge: [ hash(enrollment.title === 'Mr.' ? 'm' : 'f') ],
    ct: [ hash(normalizeCity(enrollment.city)) ],
    country: [ hash(enrollment.countryCode.toLowerCase()) ],
    client_ip_address: clientIPAddress ?? undefined, // eslint-disable-line camelcase
    client_user_agent: clientUserAgent ?? undefined, // eslint-disable-line camelcase
    click_id: epik, // eslint-disable-line camelcase
  };
  if (enrollment.provinceCode) {
    userData.st = [ hash(normalizeState(enrollment.provinceCode)) ];
  }
  if (enrollment.postalCode) {
    userData.zp = [ hash(normalizeZipCode(enrollment.postalCode, enrollment.countryCode)) ];
  }

  /* eslint-disable camelcase */
  const event: ConversionEvent = {
    event_name: 'checkout',
    action_source: 'web',
    event_time: Math.floor(eventTime.getTime() / 1000),
    event_id: enrollment.id.toString(),
    event_source_url: eventSourceUrl,
    user_data: userData,
    custom_data: {
      currency: enrollment.currencyCode,
      value: Big(enrollment.cost).toFixed(2),
      order_id: enrollment.id.toString(),
      num_items: enrollment.courses.length,
      content_ids: enrollment.courses.map(c => c.code),
      contents: enrollment.courses.map(c => ({
        id: c.code,
        item_name: c.name,
        item_price: Big(c.baseCost).toFixed(2), // Pinterest wants the price before any discount
        quantity: 1,
      })),
    },
  };
  /* eslint-enable camelcase */

  return postEvents([ event ]);
};

export const pinterestPostLead = async (
  lead: Lead,
  eventSourceUrl: string | null,
  clientIPAddress: string | null,
  clientUserAgent: string | null,
  epik?: string,
): Promise<unknown> => {
  const userData: UserData = {
    em: [ hash(normalizeEmailAddress(lead.emailAddress)) ],
    client_ip_address: clientIPAddress ?? undefined, // eslint-disable-line camelcase
    client_user_agent: clientUserAgent ?? undefined, // eslint-disable-line camelcase
    click_id: epik, // eslint-disable-line camelcase
  };
  if (lead.telephoneNumber) {
    userData.ph = [ hash(normalizeTelephoneNumber(lead.telephoneNumber)) ];
  }
  if (lead.firstName) {
    userData.fn = [ hash(normalizeName(lead.firstName)) ];
  }
  if (lead.lastName) {
    userData.ln = [ hash(normalizeName(lead.lastName)) ];
  }
  if (lead.city) {
    userData.ct = [ hash(normalizeCity(lead.city)) ];
  }
  if (lead.provinceCode) {
    userData.st = [ hash(normalizeState(lead.provinceCode)) ];
  }
  if (lead.countryCode) {
    userData.country = [ hash(lead.countryCode.toLowerCase()) ];
  }

  /* eslint-disable camelcase */
  const event: ConversionEvent = {
    event_name: 'lead',
    action_source: 'web',
    event_time: Math.floor(lead.created / 1000),
    event_id: lead.leadId,
    event_source_url: eventSourceUrl ?? undefined,
    user_data: userData,
  };
  /* eslint-enable camelcase */

  return postEvents([ event ]);
};

const postEvents = async (data: ConversionEvent[]): Promise<unknown> => {
  if (!adAccountId || !accessToken) {
    throw Error('Pinterest ad account id or conversion token not found');
  }

  const url = `https://api.pinterest.com/v5/ad_accounts/${encodeURIComponent(adAccountId)}/events`;

  const response = await fetch(url, {
    method: 'post',
    body: JSON.stringify({ data }),
    headers: { 'content-type': 'application/json', 'authorization': `Bearer ${accessToken}` },
    cache: 'no-cache',
  });

  if (!response.ok) {
    throw Error(JSON.stringify(await response.json()));
  }

  return response.json();
};

type ActionSource = 'app_android' | 'app_ios' | 'web' | 'offline';

/** see https://github.com/pinterest/api-description/blob/main/v5/openapi.yaml (ConversionEventsUserDataProperties) */
interface UserData {
  /** email addresses, lowercase (hashing required) */
  em?: string[];
  /** telephone numbers, digits only (hashing required) */
  ph?: string[];
  /** first names, lowercase (hashing required) */
  fn?: string[];
  /** last names, lowercase (hashing required) */
  ln?: string[];
  /** genders, "f", "m", or "n" (hashing required) */
  ge?: string[];
  /** dates of birth (hashing required) */
  db?: string[];
  /** cities, lowercase without spaces or punctuation (hashing required) */
  ct?: string[];
  /** two-letter state codes, lowercase (hashing required) */
  st?: string[];
  /** zip codes (hashing required) */
  zp?: string[];
  /** two-letter iso 3166 country codes, lowercase (hashing required) */
  country?: string[];
  /** advertiser user ids (hashing required) */
  external_id?: string[];
  /** client IP address (do not hash) */
  client_ip_address?: string;
  /** client user agent (do not hash) */
  client_user_agent?: string;
  /** value of the _epik cookie or epik query parameter (do not hash) */
  click_id?: string;
}

interface ContentItem {
  id: string;
  item_name?: string;
  /** price before any discount, as a string */
  item_price?: string;
  quantity?: number;
}

interface CustomData {
  currency?: 'CAD' | 'USD' | 'GBP' | 'AUD' | 'NZD';
  /** total value, as a string */
  value?: string;
  order_id?: string;
  num_items?: number;
  content_ids?: string[];
  contents?: ContentItem[];
}

interface ConversionEvent {
  event_name: 'checkout' | 'lead';
  action_source: ActionSource;
  /** unix timestamp in seconds */
  event_time: number;
  /** must match the event_id sent by the tag for deduplication */
  event_id: string;
  event_source_url?: string;
  user_data: UserData;
  custom_data?: CustomData;
}
