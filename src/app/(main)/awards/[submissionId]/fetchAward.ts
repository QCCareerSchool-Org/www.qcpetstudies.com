import type { Award } from './submission';
import { isRawAward } from './submission';

export const fetchAward = async (submissionId: string): Promise<Award> => {
  const url = `https://studentcenter.qccareerschool.com/api/sc/v1/awards/${encodeURIComponent(submissionId)}`;
  const response = await fetch(url);
  if (!response.ok) {
    throw Error(response.statusText);
  }
  const body: unknown = await response.json();
  if (!isRawAward(body)) {
    throw Error('Unexpected response');
  }
  return {
    ...body,
    created: new Date(body.created),
  };
};
