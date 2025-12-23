import type { FC } from 'react';

import { FourHundredGroomingTraining } from '@/components/promos/FourHundredGroomingTraining';
import { NewYears2025 } from '@/components/promos/newYears2025';

const NEW_YEARS_START = Date.UTC(2025, 11, 26, 8);
const NEW_YEARS_END = Date.UTC(2026, 0, 3, 8);
const FOUR_HUNDRED_START = Date.UTC(2026, 0, 7, 8);
const FOUR_HUNDRED_END = Date.UTC(2026, 0, 17, 8);

interface Props {
  date: number;
  countryCode: string;
  sectionParagraph?: string;
}

export const CurrentPromotion: FC<Props> = ({ date, countryCode, sectionParagraph }) => {
  if (date >= NEW_YEARS_START && date < NEW_YEARS_END) {
    return <NewYears2025 countryCode={countryCode} sectionParagraph={sectionParagraph} />;
  } else if (date >= FOUR_HUNDRED_START && date < FOUR_HUNDRED_END) {
    return <FourHundredGroomingTraining countryCode={countryCode} sectionParagraph={sectionParagraph} />;
  }
};
