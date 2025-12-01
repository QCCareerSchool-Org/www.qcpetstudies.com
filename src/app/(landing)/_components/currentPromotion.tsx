import type { FC } from 'react';

import { CyberMonday2025 } from '@/components/promos/cyberMonday2025';

interface Props {
  date: number;
  countryCode: string;
}

export const CurrentPromotion: FC<Props> = ({ date }) => {
  if (date >= Date.UTC(2025, 10, 17, 15) && date < Date.UTC(2025, 10, 29, 8)) { // 2025-11-17T10:00 (15:00 UTC) to 2025-11-29T03:00 (08:00 UTC)
    return <CyberMonday2025 />;
  }
};
