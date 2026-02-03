import { Big } from 'big.js';

import type { Enrollment } from '@/domain/enrollment';

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

// log the page view with a specific URL
export const gaPageview = (id: string, url: string): void => {
  window.gtag?.('config', id, {
    page_path: url, // eslint-disable-line camelcase
  });
};

// log an event
export const gaEvent = (action: string, params?: unknown): void => {
  window.gtag?.('event', action, params);
};

export interface GAUserData {
  email: string;
  phone_number?: string; // can't include phone_number because it must be in E.164 format and we don't explicitly ask for a telephone country code
  address?: {
    first_name?: string;
    last_name?: string;
    street?: string;
    city?: string;
    region?: string;
    /** Google says "5-digit format" (seems to only consider the United States) */
    postal_code?: string;
    country?: string;
  };
}

export const gaUserData = (emailAddress: string, telephoneNumber: string | null, firstName: string | null, lastName: string | null, city: string | null, provinceCode: string | null, countryCode: string | null) => {
  const userData: GAUserData = {
    email: emailAddress,
  };
  if (telephoneNumber) {
    // eslint-disable-next-line camelcase
    userData.phone_number = telephoneNumber;
  }
  if (firstName || lastName || city || provinceCode || countryCode) {
    userData.address = {};
    if (firstName) {
    // eslint-disable-next-line camelcase
      userData.address.first_name = firstName.toLowerCase();
    }
    if (lastName) {
    // eslint-disable-next-line camelcase
      userData.address.last_name = lastName.toLowerCase();
    }
    if (city) {
      userData.address.city = city.toLowerCase();
    }
    if (provinceCode) {
      userData.address.region = provinceCode.toLowerCase();
    }
    if (countryCode) {
      userData.address.country = countryCode.toLowerCase();
    }
  }

  window.gtag?.('set', 'user_data', userData);
};

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

  gaUserData(enrollment.emailAddress, null, enrollment.firstName, enrollment.lastName, enrollment.city, enrollment.provinceCode, enrollment.countryCode);

  // Google Analtytics e-commerce event
  gaEvent('purchase', {
    transaction_id: enrollment.id.toString(), // eslint-disable-line camelcase
    affiliation: enrollment.school,
    value: enrollment.cost,
    currency: enrollment.currencyCode,
    tax: 0,
    shipping: 0,
    items: enrollment.courses.map(c => {
      const price = Big(c.baseCost).minus(c.planDiscount).minus(c.discount).toFixed(2);
      return {
        id: c.code,
        name: c.name,
        price: parseFloat(price),
        quantity: 1,
      };
    }),
  });

  // Since installment payers only pay a fraction of what they owe, modify the transaction value that we send to Google Ads.
  // Values as of 2023-11-14 (enrollments from 30 to 24 months ago)
  const priceModifier = enrollment.paymentPlan === 'full'
    ? 1
    : enrollment.countryCode === 'US' ? 0.5722 : enrollment.countryCode === 'CA' ? 0.6614 : 0.5320;

  // Google Ads sale conversion
  gaEvent('conversion', {
    send_to: 'AW-1071836607/xFpdCJ3DpW8Qv9uL_wM', // eslint-disable-line camelcase
    value: parseFloat(Big(enrollment.cost).times(priceModifier).toFixed(2)),
    currency: enrollment.currencyCode,
    transaction_id: enrollment.id.toString(), // eslint-disable-line camelcase
  });
};
