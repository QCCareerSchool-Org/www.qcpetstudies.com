import Link from 'next/link';
import type { FC, ReactNode } from 'react';

import styles from './banner.module.scss';

interface Props {
  message: string;
  buttonHref?: string;
  buttonContent?: ReactNode | string;
}

export const Banner: FC<Props> = ({ message, buttonHref, buttonContent }) => (
  <div className={styles.wrapper}>
    <div className={`container ${styles.container}`}>
      <div className={`${styles.message} text-center`}>{message}</div>
      { buttonHref && buttonContent && (
        <Link href={buttonHref} className={`btn btn-primary ${styles.button}`}>{buttonContent}</Link>
      )}
    </div>
  </div>
);
