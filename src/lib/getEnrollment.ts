import * as HttpStatus from '@qccareerschool/http-status';

import type { RawEnrollment } from '@/models/enrollment';

export const getEnrollment = async (enrollmentId: number, code: string): Promise<RawEnrollment> => {
  const url = `${process.env.ENROLLMENT_ENDPOINT}/${enrollmentId}?code=${code}`;
  const response = await fetch(url, {
    headers: { 'X-API-Version': '2' },
    cache: 'no-cache',
  });
  if (!response.ok) {
    throw new HttpStatus.HttpResponse(response.status, response.statusText);
  }
  return response.json() as Promise<RawEnrollment>;
};
