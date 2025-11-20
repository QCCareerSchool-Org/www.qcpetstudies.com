import type { Award } from './submission';
import { isRawAward } from './submission';

export const fetchOldAward = async (submissionId: number): Promise<Award> => {
  const url = `https://studentcenter.qccareerschool.com/api/sc/v1/oldAwards/${submissionId}`;
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
    created: body.created ? new Date(body.created) : null,
  };
};
