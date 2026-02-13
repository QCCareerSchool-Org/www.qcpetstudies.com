import type { FC, PropsWithChildren } from 'react';

import { CountDownTimer } from '../countDownTimer';
import type { LastChancePeriodDTO } from '@/lib/period';

interface Props {
  date: number;
  promotionPeriod: LastChancePeriodDTO;
}

export const PromoBanner: FC<PropsWithChildren<Props>> = ({ date, promotionPeriod, children }) => (
  <CountDownTimer
    date={date}
    startDate={promotionPeriod.start}
    countdownStartDate={promotionPeriod.lastChance}
    endDate={promotionPeriod.end}
    message={(
      <span style={{ textTransform: 'uppercase' }}>
        {children}<button className="btn btn-danger my-2 btn-sm ms-3 text-uppercase">Claim Offer</button>
      </span>
    )}
  />
);
