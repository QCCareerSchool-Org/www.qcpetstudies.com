export type Submission = {
  submissionId: string;
  grade: string;
  name: string;
};

export const isSubmission = (obj: unknown): obj is Submission => {
  return typeof obj === 'object' && obj !== null &&
    'submissionId' in obj && typeof obj.submissionId === 'string' &&
    'grade' in obj && typeof obj.grade === 'string' &&
    'name' in obj && typeof obj.name === 'string';
};
