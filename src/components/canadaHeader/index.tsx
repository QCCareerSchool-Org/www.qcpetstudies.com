import Image from 'next/image';
import type { FC } from 'react';

import styles from './index.module.scss';
import { LearnMore } from './learnMore';
import MapleLeafIcon from '@/components/icons/maple-leaf.svg';

export const CanadaHeader: FC = () => (
  <div className={styles.wrapper}>
    <div className="container">
      <div className="d-flex align-items-center justify-content-center">
        <Image src={MapleLeafIcon} height="22" className="me-2" alt="" /> Proudly Canadian!<span className="ms-3 fw-normal">You could save more than 50% on your course fees <LearnMore /></span>
      </div>
    </div>
  </div>
);
