import Link from 'next/link';
import type { FC } from 'react';

import styles from './index.module.scss';
import { AuxNavBar } from '@/components/auxNavBar';
import MapleLeaf from '@/images/maple-leaf.svg';

export const CanadaAuxNavBar: FC = () => (
  <AuxNavBar background="#061F3A" color="white" className={styles.bar}>
    <div className="d-flex">
      <div className="me-4 d-flex align-items-center"><MapleLeaf width={600} height={650} alt="maple leaf" style={{ width: 'auto', height: 14, position: 'relative', top: 0 }} /><strong className="text-uppercase ms-1">Canadian Students Save!</strong></div>
      <div className="me-2 d-none d-lg-block">You could save more than 50% on your course fees.</div>
      <div><Link className="text-white" style={{ textDecoration: 'underline' }} href="/canadian-tax-credits">Learn More</Link></div>
    </div>
  </AuxNavBar>
);
