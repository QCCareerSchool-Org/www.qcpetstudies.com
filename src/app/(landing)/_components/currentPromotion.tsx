import type { FC } from 'react';

import { BoxingDay2025 } from '@/components/promos/boxingDay2025';

interface Props {
  date: number;
  countryCode: string;
  sectionParagraph?: string;
}

export const CurrentPromotion: FC<Props> = ({ date, countryCode, sectionParagraph }) => {
  if (date >= Date.UTC(2025, 11, 16, 8) && date < Date.UTC(2026, 0, 3, 8)) { // 2025-11-17T10:00 (15:00 UTC) to 2025-11-29T03:00 (08:00 UTC)
    return <BoxingDay2025 countryCode={countryCode} sectionParagraph={sectionParagraph} />;
  }
};
