import type { FC } from 'react';

import styles from './index.module.scss';
import MapleLeafIcon from './maple-leaf.svg';

export const CanadaHeader: FC = () => (
  <div className={styles.wrapper}>
    <div className="container">
      <div className="d-flex align-items-center justify-content-center">
        <MapleLeafIcon height="22" className="me-2" /> Proudly Canadian!
      </div>
    </div>
  </div>
);
