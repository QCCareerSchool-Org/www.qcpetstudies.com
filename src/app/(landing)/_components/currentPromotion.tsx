import type { FC } from 'react';

import { Halloween2025 } from '@/components/promos/Halloween2025';

type Props = {
  date: number;
  countryCode: string;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const CurrentPromotion: FC<Props> = ({ date, countryCode }) => {
  if (date >= Date.UTC(2025, 9, 22, 16) && date < Date.UTC(2025, 9, 31, 8)) {
    return <Halloween2025 />;
  }
};
