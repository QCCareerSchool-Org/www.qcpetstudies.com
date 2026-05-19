'use client';

import Image from 'next/image';
import Link from 'next/link';
import type { FC, MouseEventHandler } from 'react';
import { useState } from 'react';

import { PriceBox } from './priceBox';
import { ChatLink } from '@/components/chatLink';
import type { CourseCode } from '@/domain/courseCode';
import type { Price } from '@/domain/price';
import MapleLeaf from '@/images/maple-leaf.svg';

interface Props {
  dtPrice: Price;
  dePrice: Price;
  className?: string;
  onPopupLinkClick?: MouseEventHandler;
  countryCode: string;
}

export const PriceSection: FC<Props> = ({ dtPrice, dePrice, className, onPopupLinkClick, countryCode }) => {
  const [ selection, setSelection ] = useState<CourseCode>('dg');

  const handleDGSelect = (): void => {
    setSelection('dg');
  };

  const handleDESelect = (): void => {
    setSelection('de');
  };

  const handlePopupLinkClick = onPopupLinkClick;

  if (dtPrice.currency.code !== dePrice.currency.code) {
    throw Error();
  }

  return (
    <section id="tuition" className={className}>
      <div className="container">
        <div className="text-center">
          <h2 className="mb-3">Tuition &amp; Payment Plans</h2>
          <p className="lead mb-0">Select a track and payment plan that best suits your budget.</p>
          <p className="lead mb-4">Prices are listed in {dtPrice.currency.name}.</p>
        </div>
        <div className="row justify-content-center g-4">
          <div className="col-12 col-sm-10 col-md-6 col-lg-5 col-xl-4">
            <PriceBox title="Dog Training Online Track" price={dtPrice} selected={selection === 'dg'} onSelected={handleDGSelect} cartUrl="https://enroll.qcpetstudies.com?c=dt" onPopupLinkClick={handlePopupLinkClick} />
          </div>
          <div className="col-12 col-sm-10 col-md-6 col-lg-5 col-xl-4">
            <PriceBox title="Dog Training Externship Track" price={dePrice} selected={selection === 'de'} onSelected={handleDESelect} cartUrl="https://enroll.qcpetstudies.com?c=de" onPopupLinkClick={handlePopupLinkClick} />
          </div>
        </div>
        {countryCode === 'CA' && (
          <p className="text-center mt-5"><Image src={MapleLeaf} alt="maple leaf" style={{ width: 26, height: 'auto', marginRight: '0.25rem' }} /> Canadian Students Save! You could save more than 50% on your course fees. <Link style={{ textDecoration: 'underline' }} href="/canadian-tax-credits">Learn More</Link></p>
        )}
        <div className="row justify-content-center mt-5">
          <div className="col-12 col-md-10 col-lg-8 text-center">
            <h3>Unsure which path is right for you?</h3>
            <p className="lead">Our friendly student advisors are happy to answer your questions and help you choose the plan that best fits your goals and budget.</p>
            <ChatLink><button className="btn btn-primary me-3">Chat with an Advisor</button></ChatLink>
            <Link href="https://www.qcpetstudies.com/contact-us" target="_blank"><button className="btn btn-outline-primary">Contact Us</button></Link>
          </div>
        </div>
      </div>
    </section>
  );
};
