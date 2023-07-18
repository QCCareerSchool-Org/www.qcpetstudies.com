import Big from 'big.js';

import type { Enrollment } from '../models/enrollment';

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

// log the page view with a specific URL
export const gaPageview = (url: string): void => {
  window.gtag?.('config', process.env.GOOGLE_ANALYTICS_ID, {
    page_path: url, // eslint-disable-line camelcase
  });
};

// log an event
export const gaEvent = (action: string, params?: unknown): void => {
  window.gtag?.('event', action, params);
};

type GAUserData = {
  email: string;
  // phone_number: string; // can't include phone_number because it must be in E.164 format and we don't explicitly ask for a telephone country code
  address?: {
    first_name: string;
    last_name: string;
    street?: string;
    city?: string;
    region?: string;
    /** Google says "5-digit format" (seems to only consider the United States) */
    postal_code: string;
    country: string;
  };
};

export const gaUserData = (userData: GAUserData): void => {
  window.gtag?.('set', 'user-data', userData);
};

const precision = 2;

export const gaSale = (enrollment: Enrollment): void => {
  const postalCode = enrollment.postalCode === null
    ? '0'
    : enrollment.countryCode === 'US'
      ? enrollment.postalCode.substring(0, 5)
      : enrollment.postalCode;

  const userData: GAUserData = {
    email: enrollment.emailAddress,
    address: {
      first_name: enrollment.firstName, // eslint-disable-line camelcase
      last_name: enrollment.lastName, // eslint-disable-line camelcase
      street: enrollment.address1,
      city: enrollment.city,
      postal_code: postalCode, // eslint-disable-line camelcase
      country: enrollment.countryCode,
    },
  };

  if (enrollment.provinceCode && userData.address) {
    userData.address.region = enrollment.provinceCode;
  }

  gaUserData(userData);

  // Google Analtytics e-commerce event
  gaEvent('purchase', {
    transaction_id: enrollment.id, // eslint-disable-line camelcase
    affiliation: enrollment.school,
    value: enrollment.cost,
    currency: enrollment.currencyCode,
    tax: 0,
    shipping: 0,
    items: enrollment.courses.map(c => ({
      id: c.code,
      name: c.name,
      price: parseFloat(Big(c.baseCost).minus(c.planDiscount).minus(c.discount).toFixed(precision)),
      quantity: 1,
    })),
  });

  // Google Ads sale conversion
  gaEvent('conversion', {
    send_to: 'AW-1071836607/xFpdCJ3DpW8Qv9uL_wM', // eslint-disable-line camelcase
    value: enrollment.cost,
    currency: enrollment.currencyCode,
    transaction_id: enrollment.id, // eslint-disable-line camelcase
  });

};
