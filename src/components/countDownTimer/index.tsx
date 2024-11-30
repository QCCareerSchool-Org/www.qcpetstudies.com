'use client';

import type { FC } from 'react';
import { useEffect, useState } from 'react';

import { isGBPCountry } from '../../lib/address';
import { Banner } from './banner';
import { getParts } from './getParts';

type Props = {
  countryCode: string;
};

// const bannerStartDate = Date.UTC(2024, 10, 15, 21, 40); // November 15, 2024 at 16:40 (21:40 UTC)
// const countDownStartDate = Date.UTC(2024, 10, 29, 8); // November 29, 2024 at 3:00 (08:00 UTC)
// const endDate = Date.UTC(2024, 10, 30, 8); // November 30, 2024 at 03:00 (08:00 UTC)

// if (endDate < countDownStartDate) {
//   throw Error('end is before count down start');
// }

// if (countDownStartDate < bannerStartDate) {
//   throw Error('count down starts before banner starts');
// }

const cyberMondayStartDate = Date.UTC(2024, 11, 1, 8);

export const CountDownTimer: FC<Props> = ({ countryCode }) => {
  const [ currentDate, setCurrentDate ] = useState(0);

  const [ bannerStartDate, countDownStartDate, endDate ] = currentDate >= cyberMondayStartDate
    ? [ cyberMondayStartDate, Date.UTC(2024, 11, 6, 8), Date.UTC(2024, 11, 7, 8) ]
    : [ Date.UTC(2024, 10, 30, 8), Date.UTC(2024, 11, 1, 8), Date.UTC(2024, 11, 1, 8) ];

  // keep track of the current time each second
  useEffect(() => {
    setCurrentDate(new Date().getTime());

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

    const discount = isGBPCountry(countryCode) ? '£400' : '$400';

    const message = showTimer
      ? <RegularMessage cyberMonday={currentDate >= cyberMondayStartDate} discount={discount} />
      : <LastChanceMessage cyberMonday={currentDate >= cyberMondayStartDate} discount={discount} />;

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

const RegularMessage: FC<{ cyberMonday: boolean; discount: string }> = ({ cyberMonday, discount }) => (
  <span style={{ textTransform: 'uppercase' }}>
    <strong style={{ color: '#f00', paddingRight: '0.125rem' }}>{cyberMonday ? 'Cyber Monday' : 'Black Friday'} Last Chance:</strong> Save {discount}
  </span>
);

const LastChanceMessage: FC<{ cyberMonday: boolean; discount: string }> = ({ cyberMonday, discount }) => (
  <span style={{ textTransform: 'uppercase' }}>
    <strong style={{ color: '#f00', paddingRight: '0.125rem' }}>{cyberMonday ? 'Cyber Monday' : 'Black Friday'}:</strong> Enroll today to save {discount}
  </span>
);
