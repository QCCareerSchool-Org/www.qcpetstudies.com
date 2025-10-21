import type { FC } from 'react';

import { Halloween2025 } from '@/components/promos/Halloween2025';

type Props = {
  date: number;
  countryCode: string;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const CurrentPromotion: FC<Props> = ({ date, countryCode }) => {
  if (date >= Date.UTC(2025, 9, 22, 4) && date < Date.UTC(2025, 10, 1, 7)) { // 2025-10-22T00:00 (04:00 UTC) to 2025-11-01T03:00 (07:00 UTC)
    return <Halloween2025 />;
  }
};
