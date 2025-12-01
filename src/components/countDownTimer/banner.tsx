import type { FC, ReactNode } from 'react';

import styles from './banner.module.scss';
import { CountDownElement } from './countDownElement';

interface Props {
  url: string;
  message: ReactNode;
  showTimer: boolean;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export const Banner: FC<Props> = props => {
  const daysDisabled = props.days === 0;
  const hoursDisabled = props.hours === 0 && daysDisabled;
  const minutesDisabled = props.minutes === 0 && hoursDisabled;
  const secondsDisabled = props.seconds === 0 && minutesDisabled;

  return (
    <a href={props.url} style={{ color: 'inherit', textDecoration: 'none' }}>
      <div className={styles.banner}>
        <div className={styles.message}>{props.message}</div>
        {props.showTimer && (
          <div className="d-flex justify-content-center align-items-center gap-3 gap-sm-4">
            <CountDownElement number={props.days} name="day" disabled={daysDisabled} />
            <CountDownElement number={props.hours} name="hour" disabled={hoursDisabled} />
            <CountDownElement number={props.minutes} name="minute" disabled={minutesDisabled} />
            <CountDownElement number={props.seconds} name="second" disabled={secondsDisabled} />
          </div>
        )}
      </div>
    </a>
  );
};
