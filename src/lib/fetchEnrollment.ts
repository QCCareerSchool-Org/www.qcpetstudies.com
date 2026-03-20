import type { Result } from 'generic-result-type';
import { failure, success } from 'generic-result-type';

import type { Enrollment } from '@/domain/enrollment';
import { isRawEnrollment } from '@/domain/enrollment';

export const fetchEnrollment = async (id: number, code: string, signal?: AbortSignal): Promise<Result<Enrollment>> => {
  try {
    const url = `${process.env.ENROLLMENT_ENDPOINT}/${id}?code=${encodeURIComponent(code)}`;

    const response = await fetch(url, { signal });
    if (!response.ok) {
      throw Error(response.statusText);
    }

    const responseBody: unknown = await response.json();
    if (!isRawEnrollment(responseBody)) {
      throw Error('Unexpected response');
    }

    return success({
      ...responseBody,
      transactionTime: responseBody.transactionTime === null ? null : new Date(responseBody.transactionTime),
      paymentDate: new Date(responseBody.paymentDate),
    });
  } catch (err) {
    if (!signal?.aborted) {
      console.error(err);
    }
    return failure(err instanceof Error ? err : Error(String(err)));
  }
};
