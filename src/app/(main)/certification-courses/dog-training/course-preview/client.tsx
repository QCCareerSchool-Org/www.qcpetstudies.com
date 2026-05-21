'use client';

import type { FC, MouseEventHandler } from 'react';

import { ComparisonModal } from '../comparisonModal';
import { PriceSection } from '../priceSection';
import type { Price } from '@/domain/price';
import { useToggle } from '@/hooks/useToggle';

interface Props {
  dtPrice: Price;
  dePrice: Price;
  countryCode: string;
}

export const Client: FC<Props> = ({ dtPrice, dePrice, countryCode }) => {
  const [ popup, toggle ] = useToggle();

  const handlePopupLinkClick: MouseEventHandler = e => {
    e.preventDefault();
    toggle();
  };

  const handleHide = toggle;

  return (
    <>
      <ComparisonModal dtPrice={dtPrice} dePrice={dePrice} show={popup} onHide={handleHide} />
      <PriceSection className="bg-light" dtPrice={dtPrice} dePrice={dePrice} onPopupLinkClick={handlePopupLinkClick} countryCode={countryCode} />
    </>
  );
};
