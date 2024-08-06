import * as HttpStatus from '@qccareerschool/http-status';

import type { RawEnrollment } from '../models/enrollment';

export const getEnrollment = async (enrollmentId: number, code: string): Promise<RawEnrollment> => {
  const url = `https://api.qccareerschool.com/enrollments/${enrollmentId}?code=${code}`;
  const response = await fetch(url, {
    headers: { 'X-API-Version': '2' },
  });
  if (!response.ok) {
    throw new HttpStatus.HttpResponse(response.status, response.statusText);
  }
  return response.json() as Promise<RawEnrollment>;
  // const enrollment = await response.json() as RawEnrollment;
  // return {
  //   ...enrollment,
  //   paymentDate: new Date(enrollment.paymentDate),
  //   transactionTime: enrollment.transactionTime === null ? null : new Date(enrollment.transactionTime),
  // };
};
