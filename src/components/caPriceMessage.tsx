'use client';

import Image from 'next/image';
import type { FC, MouseEventHandler } from 'react';

import MapleLeaf from '@/components/icons/maple-leaf.svg';
import { useTaxCreditPopup } from '@/hooks/useTaxCreditPopup';
import { gaEvent } from '@/lib/gtag';

export const CAPriceMessage: FC = () => {
  const [ , toggle ] = useTaxCreditPopup();

  const handleClick: MouseEventHandler = e => {
    e.preventDefault();
    toggle();
    gaEvent('canadian tax popup');
  };

  return (
    <div>
      <p className="lead mb-0"><strong><Image src={MapleLeaf} width={600} height={650} alt="Maple Leaf" style={{ width: 'auto', height: 20 }} /> Canadian Students Save!</strong></p>
      <p className="mb-0">You could save more than 50% on your course fees. <a onClick={handleClick} href="#" className="link-light" style={{ textDecoration: 'underline' }}>Learn more</a></p>
    </div>
  );
};
