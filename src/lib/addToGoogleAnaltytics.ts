import Big from 'big.js';

import type { Enrollment } from '../models/enrollment';
import { gaEvent } from './ga';

const precision = 2;

export const addToGoogleAnalytics = (enrollment: Enrollment): void => {
  gaEvent('purchase', {
    transaction_id: enrollment.id, // eslint-disable-line camelcase
    affiliation: enrollment.school,
    value: enrollment.cost,
    currency: enrollment.currencyCode,
    tax: 0,
    shipping: 0,
    items: enrollment.courses.map(c => ({
      id: c.code, // eslint-disable-line camelcase
      name: c.name, // eslint-disable-line camelcase
      price: parseFloat(Big(c.baseCost).minus(c.planDiscount).minus(c.discount).toFixed(precision)),
      quantity: 1,
    })),
  });
};
