import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import type { FC } from 'react';

import { useScreenWidth } from '../hooks/useScreenWidth';
import MapleLeaf from '../images/maple-leaf.svg';
import { AuxNavBar } from './AuxNavBar';

export const CanadaAuxNavBar: FC = () => {
  const screenWidth = useScreenWidth();

  const smallerText = screenWidth < 400;
  const lg = screenWidth >= 992;

  return (
    <AuxNavBar background="#061F3A" color="white" style={smallerText ? { fontSize: '0.8rem' } : undefined}>
      <div className="d-flex">
        <div className="me-4 d-flex align-items-center"><Image src={MapleLeaf as StaticImageData} width={600} height={650} alt="maple leaf" style={{ width: 'auto', height: smallerText ? 14 : 18, position: 'relative', top: smallerText ? 0 : 1 }} /><strong className="text-uppercase ms-1">Canadian Students Save!</strong></div>
        {lg && <div className="me-2">You could save more than 50% on your course fees.</div>}
        <div><Link className="text-white" style={{ textDecoration: 'underline' }} href="/canadian-tax-credits">Learn More</Link></div>
      </div>
    </AuxNavBar>
  );
};
