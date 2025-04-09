import type { Submission } from './submission';
import { isSubmission } from './submission';

export const fetchData = async (submissionId: string): Promise<Submission> => {
  console.log('fetching');
  return { submissionId: 'skdjfh', grade: 'A', name: 'John Doe' };

  const url = `https://studentcenter.qccareerschool.com/api/submissions?submissionId=${encodeURIComponent(submissionId)}`;
  const response = await fetch(url);
  if (!response.ok) {
    throw Error(response.statusText);
  }
  const body: unknown = await response.json();
  if (!isSubmission(body)) {
    throw Error('Unexpected response');
  }
  return body;
};
