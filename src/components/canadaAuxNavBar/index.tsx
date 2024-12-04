import type { StaticImageData } from 'next/image';
import Image from 'next/image';
import Link from 'next/link';
import type { FC } from 'react';

import { AuxNavBar } from './auxNavBar';
import styles from './index.module.scss';
import MapleLeaf from '@/images/maple-leaf.svg';

export const CanadaAuxNavBar: FC = () => (
  <AuxNavBar background="#061F3A" color="white" className={styles.bar}>
    <div className="d-flex">
      <div className="me-4 d-flex align-items-center"><Image src={MapleLeaf as StaticImageData} width={600} height={650} alt="maple leaf" style={{ width: 'auto', height: smallerText ? 14 : 18, position: 'relative', top: smallerText ? 0 : 1 }} /><strong className="text-uppercase ms-1">Canadian Students Save!</strong></div>
      <div className="me-2 d-none d-lg-block">You could save more than 50% on your course fees.</div>
      <div><Link className="text-white" style={{ textDecoration: 'underline' }} href="/canadian-tax-credits">Learn More</Link></div>
    </div>
  </AuxNavBar>
);
