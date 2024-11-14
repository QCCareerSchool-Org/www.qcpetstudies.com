import { type FC, type ReactElement, useEffect, useRef } from 'react';

import styles from './banner.module.scss';
import { CountDownElement } from './countDownElement';

type Props = {
  url: string;
  message: ReactElement;
  showTimer: boolean;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  setCountdownHeight: (height: number) => void;
};

export const Banner: FC<Props> = props => {
  const daysDisabled = props.days === 0;
  const hoursDisabled = props.hours === 0 && daysDisabled;
  const minutesDisabled = props.minutes === 0 && hoursDisabled;
  const secondsDisabled = props.seconds === 0 && minutesDisabled;
  const bannerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (bannerRef.current) {
      props.setCountdownHeight(bannerRef.current.offsetHeight);
    }
  }, [ props ]);

  return (
    <a href={props.url} style={{ color: 'inherit', textDecoration: 'none' }}>
      <div className={`${styles.banner} sticky-top`} ref={bannerRef}>
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
