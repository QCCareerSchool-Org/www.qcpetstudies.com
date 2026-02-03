import type { Result } from 'generic-result-type';
import { failure, success } from 'generic-result-type';

const url = 'https://api64.ipify.org/?format=json';

export const fetchIpAddress = async (): Promise<Result<string>> => {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      return failure(Error(response.statusText));
    }

    const json = await response.json() as unknown;
    if (!isApiResponse(json)) {
      return failure(Error('Unexpected response'));
    }

    return success(json.ip);

  } catch (err: unknown) {
    return err instanceof Error ? failure(err) : failure(Error(String(err)));
  }
};

interface ApiResponse {
  ip: string;
}

const isApiResponse = (obj: unknown): obj is ApiResponse => {
  return typeof obj === 'object' && obj !== null &&
    'ip' in obj && typeof obj.ip === 'string';
};
