import type { FC } from 'react';

import type { CourseCode } from '@/domain/courseCode';

interface Props {
  date: number;
  countryCode: string;
  courseCode: CourseCode;
}

export const CurrentPromotion: FC<Props> = () => null;
