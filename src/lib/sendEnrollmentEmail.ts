import * as HttpStatus from '@qccareerschool/http-status';

export const sendEnrollmentEmail = async (enrollmentId: number, code: string): Promise<void> => {
  const url = `${process.env.ENROLLMENT_ENDPOINT}/${enrollmentId}/email`;
  const response = await fetch(url, {
    method: 'post',
    headers: {
      'X-API-Version': '2',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ code }),
    cache: 'no-cache',
  });
  if (!response.ok) {
    throw new HttpStatus.HttpResponse(response.status, response.statusText);
  }
  await response.json();
};
