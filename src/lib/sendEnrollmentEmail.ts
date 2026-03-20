import type { Result } from 'generic-result-type';
import { failure, success } from 'generic-result-type';

const headers = {
  'X-API-Version': '2',
  'Content-Type': 'application/json',
};

export const sendEnrollmentEmail = async (
  enrollmentId: number,
  code: string,
  signal?: AbortSignal,
): Promise<Result> => {
  try {
    const url = `${process.env.ENROLLMENT_ENDPOINT}/${encodeURIComponent(enrollmentId)}/email`;
    console.log(url);
    const body = JSON.stringify({ code });

    const response = await fetch(url, { method: 'post', headers, body, signal });
    if (!response.ok) {
      throw Error(response.statusText);
    }

    await response.json();

    return success();
  } catch (err) {
    if (!signal?.aborted) {
      console.error(err);
    }
    return failure(err instanceof Error ? err : Error(String(err)));
  }
};
