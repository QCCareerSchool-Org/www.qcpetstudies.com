import * as HttpStatus from '@qccareerschool/http-status';

import type { Enrollment } from '../models/enrollment';

export const addToActiveCampaign = async (enrollment: Enrollment): Promise<void> => {
  const payload = {
    firstName: enrollment.firstName,
    lastName: enrollment.lastName,
    emailAddress: enrollment.emailAddress,
    phoneNumber: enrollment.telephoneNumber,
    country: enrollment.countryName,
    state: enrollment.provinceName,
    listId: 39,
    customFields: {
      SALE_AMOUNT: enrollment.cost,
      SALE_CURRENCY: enrollment.currencyCode,
    },
  };
  const url = 'https://api.qccareerschool.com/activeCampaign/subscribe';
  const response = await fetch(url, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });
  if (!response.ok) {
    throw new HttpStatus.HttpResponse(response.status, response.statusText);
  }
  await response.json();
};
