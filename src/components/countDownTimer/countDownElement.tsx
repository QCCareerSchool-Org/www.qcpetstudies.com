import type { FC } from 'react';

import styles from './countDownElement.module.scss';

type Props = {
  name: string;
  number: number;
  disabled: boolean;
};

export const CountDownElement: FC<Props> = ({ name, number, disabled }) => (
  <div className="text-center d-flex flex-column justify-content-center align-items-center" style={{ width: 40 }}>
    <span className={`${styles.digits} ${disabled ? styles.disabled : undefined}`}>
      {number.toFixed(0).padStart(2, '0')}
    </span>
    <span className={styles.units}>
      {name}{number !== 1 && 's'}
    </span>
  </div>
);
