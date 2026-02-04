import type { FC } from 'react';

import styles from './header.module.scss';
import { SecondaryNav } from './secondaryNav';
import { CountDownTimer } from '../countDownTimer';
import { MainNav } from '@/components/siteLayout/mainNav';
import { gbpCountry } from '@/lib/currencies';
import { feb04 } from '@/lib/promotionPeriods';

interface Props {
  date: number;
  countryCode: string;
}

export const Header: FC<Props> = ({ date, countryCode }) => {
  const discount = gbpCountry(countryCode) ? '£300' : '$300';

  return (
    <div className={`${styles.wrapper} shadow-lg`}>
      <CountDownTimer
        date={date}
        startDate={feb04.start}
        countdownStartDate={feb04.lastChance}
        endDate={feb04.end}
        message={(
          <span className="lead text-uppercase">
            <span className="d-none d-lg-inline">Don't Miss Out—</span> Get {discount} Off Your Tuition!<br className="d-lg-none" /><button className="btn btn-danger my-2 btn-sm ms-3 text-uppercase">Claim Offer</button>
          </span>
        )}
      />
      <MainNav countryCode={countryCode} />
      <SecondaryNav />
    </div>
  );
};
