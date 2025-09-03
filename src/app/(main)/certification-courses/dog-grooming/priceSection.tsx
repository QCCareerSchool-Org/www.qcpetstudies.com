'use client';

import type { FC, MouseEventHandler } from 'react';
import { useState } from 'react';

import { PriceBox } from './priceBox';
import type { CourseCode } from '@/domain/courseCode';
import type { Price } from '@/domain/price';

type Props = {
  dgPrice: Price;
  dePrice: Price;
  className?: string;
  onPopupLinkClick: MouseEventHandler;
};

export const PriceSection: FC<Props> = ({ dgPrice, dePrice, className, onPopupLinkClick }) => {
  const [ selection, setSelection ] = useState<CourseCode>('dg');

  const handleDGSelect = (): void => {
    setSelection('dg');
  };

  const handleDESelect = (): void => {
    setSelection('de');
  };

  const handlePopupLinkClick = onPopupLinkClick;

  if (dgPrice.currency.code !== dePrice.currency.code) {
    throw Error();
  }

  return (
    <section id="tuition" className={className}>
      <div className="container">
        <div className="text-center">
          <h2 className="mb-3">Tuition &amp; Payment Plans</h2>
          <p className="lead mb-0">Select a track and payment plan that best suits your budget.</p>
          <p className="lead mb-4">Prices are listed in {dgPrice.currency.name}.</p>
        </div>
        <div className="row justify-content-center">
          <div className="col-6 col-lg-5 col-xl-4">
            <PriceBox title="Dog Grooming Online Track" price={dgPrice} selected={selection === 'dg'} onSelected={handleDGSelect} cartUrl="https://enroll.qcpetstudies.com?c=dg" onPopupLinkClick={handlePopupLinkClick} />
          </div>
          <div className="col-6 col-lg-5 col-xl-4">
            <PriceBox title="Dog Grooming Extern Track" price={dePrice} selected={selection === 'de'} onSelected={handleDESelect} cartUrl="https://enroll.qcpetstudies.com?c=de" onPopupLinkClick={handlePopupLinkClick} />
          </div>
        </div>
      </div>

    </section>
  );
};
