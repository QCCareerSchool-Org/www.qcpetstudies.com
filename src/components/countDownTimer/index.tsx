'use client';

import type { FC } from 'react';
import { useEffect, useState } from 'react';

import { Banner } from './banner';
import { getParts } from './getParts';
import { gbpCountry } from '@/lib/currencies';

type Props = {
  date: number;
  countryCode: string;
};

const bannerStartDate = Date.UTC(2025, 10, 17, 15); // 2025-11-17T10:00 (15:00 UTC)
const countDownStartDate = Date.UTC(2025, 10, 28, 8); // 2025-11-28T03:00 (08:00 UTC)
const endDate = Date.UTC(2025, 10, 29, 8); // 2025-11-29T03:00 (08:00 UTC)

if (endDate < countDownStartDate) {
  throw Error('end is before count down start');
}

if (countDownStartDate < bannerStartDate) {
  throw Error('count down starts before banner starts');
}

export const CountDownTimer: FC<Props> = ({ date, countryCode }) => {
  const [ currentDate, setCurrentDate ] = useState(date);

  // keep track of the current time each second
  useEffect(() => {
    const id = setInterval(() => {
      setCurrentDate(d => d + 1000);
    }, 1000);

    return () => clearInterval(id);
  }, []);

  if (currentDate === 0) {
    return;
  }

  if (currentDate >= bannerStartDate && currentDate < endDate) {
    const [ days, hours, minutes, seconds ] = getParts(endDate - currentDate);

    const showTimer = currentDate >= countDownStartDate;

    const discount = gbpCountry(countryCode) ? '£400' : '$400';

    const message = showTimer
      ? <RegularMessage discount={discount} />
      : <LastChanceMessage discount={discount} />;

    return (
      <Banner
        url="https://enroll.qcpetstudies.com"
        message={message}
        showTimer={showTimer}
        days={days}
        hours={hours}
        minutes={minutes}
        seconds={seconds}
      />
    );
  }
};

const RegularMessage: FC<{ discount: string }> = ({ discount }) => (
  <span style={{ textTransform: 'uppercase' }}>
    <span className="d-none d-lg-inline">Don't Miss Out—</span>Black Friday Savings Have Arrived! Get {discount} Off Any Course!<br className="d-lg-none" /><button className="btn btn-danger my-2 btn-sm ms-3 text-uppercase">Claim Offer</button>
  </span>
);

const LastChanceMessage: FC<{ discount: string }> = ({ discount }) => (
  <span style={{ textTransform: 'uppercase' }}>
    <span className="d-none d-lg-inline">Don't Miss Out—</span>Black Friday Savings Have Arrived! Get {discount} Off Any Course!<br /><button className="btn btn-danger my-2 btn-sm ms-3 text-uppercase">Claim Offer</button>
  </span>
);
