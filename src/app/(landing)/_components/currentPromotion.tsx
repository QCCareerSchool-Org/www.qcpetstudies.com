import type { FC } from 'react';

import { FourHundredGroomingTraining } from '@/components/promos/FourHundredGroomingTraining';
import { NewYears2025 } from '@/components/promos/newYears2025';
import type { CourseCode } from '@/domain/courseCode';

const NEW_YEARS_START = Date.UTC(2025, 11, 26, 8);
const NEW_YEARS_END = Date.UTC(2026, 0, 3, 8);
const FOUR_HUNDRED_START = Date.UTC(2026, 0, 7, 8);
const FOUR_HUNDRED_END = Date.UTC(2026, 0, 17, 8);

interface Props {
  date: number;
  countryCode: string;
  courseCode?: CourseCode;
}

export const CurrentPromotion: FC<Props> = ({ date, countryCode, courseCode }) => {
  if (!courseCode) {
    throw Error('Course code required for this promotion');
  }
  if (date >= NEW_YEARS_START && date < NEW_YEARS_END) {
    return <NewYears2025 date={date} countryCode={countryCode} courseCode={courseCode} />;
  } else if (date >= FOUR_HUNDRED_START && date < FOUR_HUNDRED_END) {
    return <FourHundredGroomingTraining date={date} countryCode={countryCode} courseCode={courseCode} />;
  }
};
