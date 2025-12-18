import type { FC } from 'react';

import { NewYears2025 } from '@/components/promos/newYears2025';

interface Props {
  date: number;
  countryCode: string;
  sectionParagraph?: string;
}

export const CurrentPromotion: FC<Props> = ({ date, countryCode, sectionParagraph }) => {
  if (date >= Date.UTC(2025, 11, 26, 8) && date < Date.UTC(2026, 0, 3, 8)) {
    return <NewYears2025 countryCode={countryCode} sectionParagraph={sectionParagraph} />;
  }
};
