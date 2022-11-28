import * as HttpStatus from '@qccareerschool/http-status';

import type { Enrollment } from '../models/enrollment';

export const getEnrollment = async (enrollmentId: number, code: string): Promise<Enrollment> => {
  const url = `https://api.qccareerschool.com/enrollments/${enrollmentId}?code=${code}`;
  const response = await fetch(url, {
    headers: { 'X-API-Version': '2' },
  });
  if (!response.ok) {
    throw new HttpStatus.HttpResponse(response.status, response.statusText);
  }
  const enrollment = await response.json() as Enrollment;
  return {
    ...enrollment,
    paymentDate: new Date(enrollment.paymentDate),
    transactionTime: new Date(enrollment.transactionTime),
  };
};
