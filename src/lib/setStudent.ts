import * as HttpStatus from '@qccareerschool/http-status';

export const setStudent = async (enrollmentId: number, code: string): Promise<void> => {
  const payload = { enrollmentId, code };
  const url = 'https://api.qccareerschool.com/pardot/setStudent';
  const response = await fetch(url, {
    method: 'post',
    body: JSON.stringify(payload),
  });
  if (!response.ok) {
    throw new HttpStatus.HttpResponse(response.status, response.statusText);
  }
  await response.json();
};
