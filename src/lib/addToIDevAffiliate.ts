import * as HttpStatus from '@qccareerschool/http-status';

import type { RawEnrollment } from '../models/enrollment';

export const addToIDevAffiliate = async (enrollment: RawEnrollment, ipAddress: string | null): Promise<void> => {
  const cost = (enrollment.cost / (enrollment.currencyExchangeRate ?? 1)).toFixed(2);
  const name = enrollment.firstName + ' ' + enrollment.lastName;
  const url = `https://affiliates.qccareerschool.com/sale.php?profile=72198&idev_saleamt=${encodeURIComponent(cost)}&idev_ordernum=${encodeURIComponent(enrollment.id)}&idev_option_1=${encodeURIComponent(name)}&idev_option_2=${encodeURIComponent(enrollment.emailAddress)}`;
  const headers: Record<string, string> = {};
  if (ipAddress) {
    headers['X-Forwarded-For'] = ipAddress;
  }
  const response = await fetch(url, {
    mode: 'no-cors',
    headers,
    cache: 'no-cache',
  });
  if (!response.ok) {
    throw new HttpStatus.HttpResponse(response.status, response.statusText);
  }
  await response.text();
};
