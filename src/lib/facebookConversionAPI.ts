'server only';

import { hash, normalizeCity, normalizeEmailAddress, normalizeName, normalizeState, normalizeTelephoneNumber, normalizeZipCode } from './hash';
import type { Enrollment } from '@/domain/enrollment';

const apiVersion = 'v24.0';
const datasetId = process.env.NEXT_PUBLIC_FACEBOOK_ID;
const accessToken = process.env.FACEBOOK_ACCESS_TOKEN;

export const fbPostPurchase = async (
  enrollment: Enrollment,
  eventSourceUrl: string | undefined,
  clientIPAddress: string | null,
  clientUserAgent: string | null,
  fbc?: string,
  fbp?: string,
): Promise<unknown> => {
  const url = `https://graph.facebook.com/${apiVersion}/${datasetId}/events?access_token=${accessToken}`;

  const eventTime = enrollment.transactionTime ?? new Date();

  const body: { data: PurchaseConversion[] } = {
    data: [
      {
        event_name: 'Purchase', // eslint-disable-line camelcase
        event_time: Math.floor(new Date(eventTime).getTime() / 1000), // eslint-disable-line camelcase
        action_source: 'website', // eslint-disable-line camelcase
        user_data: { // eslint-disable-line camelcase
          em: hash(normalizeEmailAddress(enrollment.emailAddress)),
          ph: hash(normalizeTelephoneNumber(enrollment.telephoneNumber)), // NOTE: we don't have the telephone country code
          fn: hash(normalizeName(enrollment.firstName)),
          ln: hash(normalizeName(enrollment.lastName)),
          ge: hash(enrollment.title === 'Mr.' ? 'm' : 'f'),
          ct: hash(normalizeCity(enrollment.city)),
          st: enrollment.provinceCode ? hash(normalizeState(enrollment.provinceCode)) : undefined,
          zp: enrollment.postalCode ? hash(normalizeZipCode(enrollment.postalCode, enrollment.countryCode)) : undefined,
          country: hash(enrollment.countryCode.toLowerCase()),
          client_ip_address: clientIPAddress ?? undefined, // eslint-disable-line camelcase
          client_user_agent: clientUserAgent ?? undefined, // eslint-disable-line camelcase
          fbc,
          fbp,
        },
        custom_data: { // eslint-disable-line camelcase
          currency: enrollment.currencyCode,
          value: enrollment.cost,
        },
        event_source_url: eventSourceUrl, // eslint-disable-line camelcase
        event_id: enrollment.id.toString(), // eslint-disable-line camelcase
      },
    ],
  };

  return postJSON(url, body);
};

export const fbPostLead = async (
  eventId: string,
  eventTime: Date,
  emailAddress: string,
  firstName: string | null,
  lastName: string | null,
  countryCode: string | null,
  eventSourceUrl: string | null,
  clientIPAddress: string | null,
  clientUserAgent: string | null,
  fbc?: string,
  fbp?: string,
): Promise<unknown> => {
  const url = `https://graph.facebook.com/${apiVersion}/${datasetId}/events?access_token=${accessToken}`;

  const body: { data: LeadConversion[] } = {
    data: [
      {
        event_name: 'Lead', // eslint-disable-line camelcase
        event_time: Math.floor(eventTime.getTime() / 1000), // eslint-disable-line camelcase
        action_source: 'website', // eslint-disable-line camelcase
        user_data: { // eslint-disable-line camelcase
          em: hash(normalizeEmailAddress(emailAddress)),
          client_ip_address: clientIPAddress ?? undefined, // eslint-disable-line camelcase
          client_user_agent: clientUserAgent ?? undefined, // eslint-disable-line camelcase
          fbc,
          fbp,
        },
        event_source_url: eventSourceUrl ?? undefined, // eslint-disable-line camelcase
        event_id: eventId, // eslint-disable-line camelcase
      },
    ],
  };

  if (firstName) {
    body.data[0].user_data.fn = hash(normalizeName(firstName));
  }

  if (lastName) {
    body.data[0].user_data.ln = hash(normalizeName(lastName));
  }

  if (countryCode) {
    body.data[0].user_data.country = hash(countryCode.toLowerCase());
  }

  return postJSON(url, body);
};

const postJSON = async (url: string, body: object): Promise<unknown> => {
  const response = await fetch(url, {
    method: 'post',
    body: JSON.stringify(body),
    headers: { 'content-type': 'application/json' },
    cache: 'no-cache',
  });

  if (!response.ok) {
    throw Error(JSON.stringify(await response.json()));
  }

  return response.json();
};

type ActionSource = 'email' | 'website' | 'app' | 'phone_call' | 'chat' | 'physical_store' | 'system_generated' | 'business_messaging' | 'other';

interface UserData {
  /** email address (hashing required) */
  em: string | string[];
  /** telephone number (hashing required) */
  ph?: string | string[];
  /** first name (hashing required) */
  fn?: string;
  /** last name (hashing required) */
  ln?: string;
  /** date of birth (hashing required) */
  db?: string;
  /** gender (hashing required) */
  ge?: string;
  /** city (hashing required) */
  ct?: string;
  /** state (hashing required) */
  st?: string;
  /** zip code (hashing required) */
  zp?: string;
  /** iso 3166-1 alpha-2 country code (hashing required) */
  country?: string;
  /** external id (hashing recommended) */
  external_id?: string;
  /** client IP address (do not hash) */
  client_ip_address?: string;
  /** client user agent (do not hash) */
  client_user_agent?: string;
  /** Facebook click id (do not hash) */
  fbc?: string;
  /** Facebook browser id (do not hash) */
  fbp?: string;
}

interface LeadConversion {
  event_name: 'Lead';
  event_time: number;
  action_source: ActionSource;
  user_data: UserData;
  event_source_url?: string;
  event_id: string;
}

interface CustomData {
  value: number;
  currency: 'CAD' | 'USD' | 'GBP' | 'AUD' | 'NZD';
}

interface PurchaseConversion {
  event_name: 'Purchase';
  event_time: number;
  action_source: ActionSource;
  user_data: UserData;
  custom_data: CustomData;
  event_source_url?: string;
  event_id: string;
}
