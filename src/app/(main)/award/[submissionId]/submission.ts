import type { School } from '@/domain/school';
import { isSchool } from '@/domain/school';

export type RawAward = {
  submissionId: string;
  courseName: string;
  schoolName: School;
  grade: string;
  name: string;
  /** string date */
  created: string;
};

export type Award = {
  submissionId: string;
  courseName: string;
  schoolName: School;
  grade: string;
  name: string;
  created: Date;
};

export const isRawAward = (obj: unknown): obj is RawAward => {
  return typeof obj === 'object' && obj !== null &&
    'submissionId' in obj && typeof obj.submissionId === 'string' &&
    'courseName' in obj && typeof obj.courseName === 'string' &&
    'schoolName' in obj && typeof obj.schoolName === 'string' && isSchool(obj.schoolName) &&
    'name' in obj && typeof obj.name === 'string' &&
    'grade' in obj && typeof obj.grade === 'string' &&
    'created' in obj && typeof obj.created === 'string';
};
