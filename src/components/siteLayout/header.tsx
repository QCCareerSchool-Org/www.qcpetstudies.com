import type { FC } from 'react';

import styles from './header.module.scss';
import { SecondaryNav } from './secondaryNav';
import { CountDownTimer } from '@/components/countDownTimer';
import { MainNav } from '@/components/siteLayout/mainNav';
import { gbpCountry } from '@/lib/currencies';

interface Props {
  date: number;
  countryCode: string;
}

const bannerStartDate = Date.UTC(2025, 11, 1, 5); // 2025-12-01T00:00 (05:00 UTC)
const bannerCountdownStartDate = Date.UTC(2025, 11, 5, 8); // 2025-12-05T03:00 (08:00 UTC)
const bannerEndDate = Date.UTC(2025, 11, 6, 8); // 2025-12-06T03:00 (8:00 UTC)

export const Header: FC<Props> = ({ date, countryCode }) => {
  const discount = gbpCountry(countryCode) ? '£400' : '$400';

  return (
    <div className={`${styles.wrapper} shadow-lg`}>
      {/* {countryCode === 'CA' && <CanadaHeader />} */}
      <CountDownTimer
        date={date}
        startDate={bannerStartDate}
        countdownStartDate={bannerCountdownStartDate}
        endDate={bannerEndDate}
        message={(
          <span style={{ textTransform: 'uppercase' }}>
            <span className="d-none d-lg-inline">Don't Miss Out—</span>Cyber Monday Savings Have Arrived! Get {discount} Off Any Course!<br className="d-lg-none" /><button className="btn btn-danger my-2 btn-sm ms-3 text-uppercase">Claim Offer</button>
          </span>
        )}
        lastChanceMessage={(
          <span style={{ textTransform: 'uppercase' }}>
            <span className="d-none d-lg-inline">Don't Miss Out—</span>Cyber Monday Savings Have Arrived! Get {discount} Off Any Course!<br /><button className="btn btn-danger my-2 btn-sm ms-3 text-uppercase">Claim Offer</button>
          </span>
        )}
      />
      <MainNav countryCode={countryCode} />
      <SecondaryNav />
    </div>
  );
};
