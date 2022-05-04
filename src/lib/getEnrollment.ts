import * as HttpStatus from '@qccareerschool/http-status';

import type { Enrollment } from '../models/enrollment';

export const getEnrollment = async (enrollmentId: number, code: string): Promise<Enrollment> => {
  const url = `https://api.qccareerschool.com/enrollments/${enrollmentId}?code=${code}`;
  const response = await fetch(url, {
    headers: { 'X-API-Version': '2' },
  });
  console.log('response.ok', response.ok);
  if (!response.ok) {
    throw new HttpStatus.HttpResponse(response.status, response.statusText);
  }
  return response.json() as Promise<Enrollment>;
};
