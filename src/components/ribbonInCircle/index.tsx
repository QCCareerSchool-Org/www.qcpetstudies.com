import type { FC } from 'react';
import { IoMdRibbon } from 'react-icons/io';

import styles from './index.module.scss';

export const RibbonInCircle: FC = () => {
  return (
    <div className={styles.wrapper}><IoMdRibbon size={32} /></div>
  );
};
