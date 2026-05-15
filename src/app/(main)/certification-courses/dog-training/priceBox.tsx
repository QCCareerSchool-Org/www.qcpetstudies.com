'use client';

import type { FC, MouseEventHandler } from 'react';
import { useState } from 'react';

import styles from './priceBox.module.scss';
import { PriceSelectBox } from './priceSelectBox';
import type { Price } from '@/domain/price';
import { formatPrice } from '@/lib/formatPrice';

interface Props {
  title: string;
  price: Price;
  selected: boolean;
  onSelected: () => void;
  cartUrl: string;
  onPopupLinkClick?: MouseEventHandler<HTMLAnchorElement>;
}

type Plan = 'full' | 'part';

export const PriceBox: FC<Props> = ({ title, price, selected, onSelected, cartUrl, onPopupLinkClick }) => {
  const [ plan, setPlan ] = useState<Plan>('full');

  const handleFullCheck = (): void => {
    setPlan('full');
    onSelected();
  };

  const handlePartCheck = (): void => {
    setPlan('part');
    onSelected();
  };

  const handlePopupLinkClick = onPopupLinkClick;

  const href = `${cartUrl}&paymentPlan=${plan}`;

  return (
    <div className={styles.wrapper}>
      <h3 className="h4 fw-bold mb-4">{title}</h3>
      <PriceSelectBox checked={selected && plan === 'full'} onChecked={handleFullCheck}>
        <h4 className="fw-bold">Pay in Full</h4>
        <p className="mb-0"><strong>Save {price.currency.symbol}{formatPrice(price.plans.full.discount)}</strong> with you pay in full</p>
        <p className="mb-1">One-time payment of</p>
        <del>{price.currency.symbol}{formatPrice(price.cost)}</del> <strong style={{ fontSize: '1.2rem' }}>{price.currency.symbol}{formatPrice(price.plans.full.total)}</strong>
      </PriceSelectBox>

      <PriceSelectBox checked={selected && plan === 'part'} onChecked={handlePartCheck}>
        <h4 className="fw-bold">Installment Plan</h4>
        <p className="mb-0"><strong>Start with a deposit of {price.currency.symbol}{formatPrice(price.plans.part.deposit)}</strong></p>
        <p className="mb-1">+ {price.plans.part.installments} monthly payments of {price.currency.symbol}{formatPrice(price.plans.part.installmentSize)}</p>
        <strong>Total: {price.currency.symbol}{formatPrice(price.plans.part.total)}</strong>
      </PriceSelectBox>

      <div className="my-4">
        <a href={href}><button className={`btn w-100 btn-primary ${selected ? '' : 'disabled'}`}>Enroll Now</button></a>
      </div>

      {onPopupLinkClick && (
        <div className="text-center">
          <a href="#" onClick={handlePopupLinkClick}>View Course Features</a>
        </div>
      )}
    </div>
  );
};
