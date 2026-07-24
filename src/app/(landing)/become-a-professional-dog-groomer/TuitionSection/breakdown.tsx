import type { FC } from 'react';

import styles from './tuition.module.scss';
import type { Price } from '@/domain/price';
import { formatPrice } from '@/lib/formatPrice';

interface Props {
  price: Price;
}

export const Breakdown: FC<Props> = ({ price }) => (
  <>
    <div className={styles.tuitionPlanBody}>
      <div className={styles.tuitionSavingsRow}>
        <h3 className={styles.tuitionPlanLabel}>Pay In Full</h3>
        <span className={styles.tuitionBadge}>SAVE {price.currency.symbol}{formatPrice(price.plans.full.discount)}</span>
      </div>
      <p className={styles.tuitionSmallLabel}>One Time Payment of</p>
      <div className={styles.tuitionStrikePrice}>{price.currency.symbol}{formatPrice(price.cost)}</div>
      <div className={styles.tuitionPrice}>{price.currency.symbol}{formatPrice(price.plans.full.total)}</div>
    </div>
    <div className={styles.tuitionDivider} />
    <div className={styles.tuitionPlanBody}>
      <h3 className={styles.tuitionPlanLabel}>Installment Plan</h3>
      <p className={styles.tuitionInstallmentLead}>Start with a deposit of {price.currency.symbol}{formatPrice(price.plans.part.deposit)}</p>
      <p className={styles.tuitionInstallmentText}>+ {price.plans.part.installments} Monthly Payments of {price.currency.symbol}{formatPrice(price.plans.part.installmentSize)}</p>
      <div className={styles.tuitionPrice}>{price.currency.symbol}{formatPrice(price.plans.part.total)}</div>
    </div>
  </>
);
