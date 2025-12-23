import { type FC, useMemo } from 'react';

import styles from './header.module.scss';
import { SecondaryNav } from './secondaryNav';
import { CountDownTimer } from '../countDownTimer';
import { MainNav } from '@/components/siteLayout/mainNav';
import { gbpCountry } from '@/lib/currencies';
import { endOfYear2025, newYear2026 } from '@/lib/promotionPeriods';

interface Props {
  date: number;
  countryCode: string;
}

export const Header: FC<Props> = ({ date, countryCode }) => {

  const dates: [start: number, countDown: number, end: number] | undefined = useMemo(() => {
    if (endOfYear2025.contains(date)) {
      return [
        endOfYear2025.start,
        endOfYear2025.end - 86_400, // one day
        endOfYear2025.end,
      ];
    } else if (newYear2026.contains(date)) {
      return [
        newYear2026.start,
        newYear2026.end - 86_400, // one day,
        newYear2026.end,
      ];
    }
  }, [ date ]);

  const discount = endOfYear2025.contains(date)
    ? (gbpCountry(countryCode) ? '£300' : '$300')
    : newYear2026.contains(date)
      ? (gbpCountry(countryCode) ? '£400' : '$400')
      : undefined;

  return (
    <div className={`${styles.wrapper} shadow-lg`}>
      {dates && <CountDownTimer
        date={date}
        startDate={dates[0]}
        countdownStartDate={dates[1]}
        endDate={dates[2]}
        message={(
          <span style={{ textTransform: 'uppercase' }}>
            <span className="d-none d-lg-inline">Don't Miss Out—</span> Get {discount} Off<br className="d-lg-none" /><button className="btn btn-danger my-2 btn-sm ms-3 text-uppercase">Claim Offer</button>
          </span>
        )}
      />}
      <MainNav countryCode={countryCode} />
      <SecondaryNav />
    </div>
  );
};
