'use client';

import type { FC, ReactNode } from 'react';
import { useEffect, useState } from 'react';

import { Banner } from './banner';
import { getParts } from './getParts';

interface Props {
  date: number;
  startDate: number;
  countdownStartDate: number;
  endDate: number;
  message: ReactNode;
  lastChanceMessage?: ReactNode;
  url?: string;
};

export const CountDownTimer: FC<Props> = props => {
  if (props.endDate < props.countdownStartDate) {
    throw Error('end is before count down start');
  }

  if (props.countdownStartDate < props.startDate) {
    throw Error('count down starts before banner starts');
  }

  const [ currentDate, setCurrentDate ] = useState(props.date);

  // keep track of the current time each second
  useEffect(() => {
    const id = setInterval(() => {
      setCurrentDate(d => d + 1000);
    }, 1000);

    return () => { clearInterval(id); };
  }, []);

  if (currentDate === 0) {
    return;
  }

  if (currentDate >= props.startDate && currentDate < props.endDate) {
    const [ days, hours, minutes, seconds ] = getParts(props.endDate - currentDate);

    const showTimer = currentDate >= props.countdownStartDate;

    return (
      <Banner
        url={props.url ?? 'https://enroll.qcpetstudies.com'}
        message={showTimer && typeof props.lastChanceMessage !== 'undefined' ? props.lastChanceMessage : props.message}
        showTimer={showTimer}
        days={days}
        hours={hours}
        minutes={minutes}
        seconds={seconds}
      />
    );
  }
};
