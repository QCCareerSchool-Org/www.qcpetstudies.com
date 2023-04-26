import Image from 'next/image';
import Link from 'next/link';
import type { FC } from 'react';

import { useScreenWidth } from '../hooks/useScreenWidth';
import MapleLeaf from '../images/maple-leaf-white.svg';
import { AuxNavBar } from './AuxNavBar';

export const CanadaAuxNavBar: FC = () => {
  const screenWidth = useScreenWidth();

  const smallerText = screenWidth < 400;
  const lg = screenWidth >= 992;

  return (
    <AuxNavBar background="red" color="white" style={smallerText ? { fontSize: '0.8rem' } : undefined}>
      <div className="d-flex">
        <div className="me-4 d-flex align-items-center"><Image src={MapleLeaf} width={600} height={650} alt="maple leaf" style={{ width: 'auto', height: smallerText ? 18 : 24 }} /><strong className="text-uppercase ms-1">Canadian Students Save!</strong></div>
        {lg && <div className="me-2">You could save more than 50% on your course fees.</div>}
        <div><Link className="text-white" style={{ textDecoration: 'underline' }} href="/canadian-tax-credits">Learn More</Link></div>
      </div>
    </AuxNavBar>
  );
};
