import type { FC } from 'react';

import { FourHundredGroomingTraining } from '@/components/promos/FourHundredGroomingTraining';
import { NewYears2025 } from '@/components/promos/newYears2025';
import type { CourseCode } from '@/domain/courseCode';
import { endOfYear2025, newYear2026 } from '@/lib/promotionPeriods';

interface Props {
  date: number;
  countryCode: string;
  courseCode: CourseCode;
}

export const CurrentPromotion: FC<Props> = ({ date, countryCode, courseCode }) => {
  if (endOfYear2025.contains(date)) {
    return <NewYears2025 date={date} countryCode={countryCode} courseCode={courseCode} />;
  } else if (newYear2026.contains(date)) {
    return <FourHundredGroomingTraining date={date} countryCode={countryCode} courseCode={courseCode} />;
  }
};
