import Link from 'next/link';
import type { FC, ReactNode } from 'react';

import styles from './banner.module.scss';

interface Props {
  message: string;
  button?: {
    href: string;
    content: ReactNode;
  };
}

export const Banner: FC<Props> = ({ message, button }) => (
  <div className={styles.wrapper}>
    <div className={`container ${styles.container}`}>
      <div className={styles.message}><strong>{message}</strong></div>
      {button && (
        <Link href={button.href} className={`btn btn-primary mx-3 ${styles.button}`}>{button.content}</Link>
      )}
    </div>
  </div>
);
