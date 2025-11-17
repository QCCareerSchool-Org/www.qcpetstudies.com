import type { FC } from 'react';

import { BlackFriday2025 } from '@/components/promos/blackFriday2025';

type Props = {
  date: number;
  countryCode: string;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const CurrentPromotion: FC<Props> = ({ date, countryCode }) => {
  if (date >= Date.UTC(2025, 10, 17, 15) && date < Date.UTC(2025, 10, 29, 8)) { // 2025-11-17T10:00 (15:00 UTC) to 2025-11-29T03:00 (08:00 UTC)
    return <BlackFriday2025 />;
  }
};
