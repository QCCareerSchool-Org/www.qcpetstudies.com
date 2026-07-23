import type { FC } from 'react';

import styles from './tuition.module.scss';
import type { Price } from '@/domain/price';
import { formatPrice } from '@/lib/formatPrice';

interface Props {
  price: Price | undefined;
}
export const TuitionSection: FC<Props> = ({ price }) => (
  <section id="tuition" className={styles.tuitionSection}>
    <div className="container">
      <div className="row justify-content-center mb-5">
        <div className="col-12 col-lg-8 text-center">
          <h2 className={`mb-3 ${styles.tuitionHeading}`}>Tuition &amp; Payment Plans</h2>
          <p className={styles.tuitionIntro}>Affordable tuition with flexible payment options makes it easier to start your training.</p>
        </div>
      </div>

      <div className="row align-items-start g-5">
        <div className="col-12 col-xl-3">
          <div className={styles.tuitionIncludes}>
            <h3 className={styles.tuitionIncludesHeading}>Your Tuition Includes</h3>
            <ul className={styles.tuitionIncludesList}>
              <li>Full dog grooming course</li>
              <li>Instructor feedback</li>
              <li>Hands-on assignments</li>
              <li>Business training</li>
              <li>Certification</li>
              <li><strong>FREE</strong> grooming kit</li>
            </ul>
            <a href="#request-info" className="btn btn-outline-light btn-lg">Get Full Course Details</a>
          </div>
        </div>

        <div className="col-12 col-xl-9">
          <div className="row g-4">
            <div className="col-12 col-lg-6">
              <div className={styles.tuitionPlanCard}>
                <div className={styles.tuitionPlanHeader}>GROOMING ONLINE</div>
                <div className={styles.tuitionPlanBody}>
                  <div className={styles.tuitionSavingsRow}>
                    <h3 className={styles.tuitionPlanLabel}>Pay In Full</h3>
                    <span className={styles.tuitionBadge}>SAVE {price ? `${price.currency.symbol}${formatPrice(price.plans.full.discount)}` : '$400'}</span>
                  </div>
                  <p className={styles.tuitionSmallLabel}>One Time Payment of</p>
                  <div className={styles.tuitionStrikePrice}>{price ? `${price.currency.symbol}${formatPrice(price.plans.full.total + price.plans.full.discount)}` : '$2498'}</div>
                  <div className={styles.tuitionPrice}>{price ? `${price.currency.symbol}${formatPrice(price.plans.full.total)}` : '$2098'}</div>
                </div>
                <div className={styles.tuitionDivider} />
                <div className={styles.tuitionPlanBody}>
                  <h3 className={styles.tuitionPlanLabel}>Installment Plan</h3>
                  <p className={styles.tuitionInstallmentLead}>Start with a deposit of {price ? `${price.currency.symbol}${formatPrice(price.plans.part.deposit)}` : '$99'}</p>
                  <p className={styles.tuitionInstallmentText}>+ {price ? price.plans.part.installments : 18} Monthly Payments of {price ? `${price.currency.symbol}${formatPrice(price.plans.part.installmentSize)}` : '$133.27'}</p>
                  <div className={styles.tuitionPrice}>{price ? `${price.currency.symbol}${formatPrice(price.plans.part.total)}` : '$2498'}</div>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-6">
              <div className={styles.tuitionPlanCard}>
                <div className={styles.tuitionPlanHeader}>EXTERNSHIP TRACK</div>
                <div className={styles.tuitionPlanBody}>
                  <div className={styles.tuitionSavingsRow}>
                    <h3 className={styles.tuitionPlanLabel}>Pay In Full</h3>
                    <span className={styles.tuitionBadge}>SAVE {price ? `${price.currency.symbol}${formatPrice(price.plans.full.discount)}` : '$200'}</span>
                  </div>
                  <p className={styles.tuitionSmallLabel}>One Time Payment of</p>
                  <div className={styles.tuitionStrikePrice}>{price ? `${price.currency.symbol}${formatPrice(price.plans.full.total + price.plans.full.discount)}` : '$3648'}</div>
                  <div className={styles.tuitionPrice}>{price ? `${price.currency.symbol}${formatPrice(price.plans.full.total)}` : '$3448'}</div>
                </div>
                <div className={styles.tuitionDivider} />
                <div className={styles.tuitionPlanBody}>
                  <h3 className={styles.tuitionPlanLabel}>Installment Plan</h3>
                  <p className={styles.tuitionInstallmentLead}>Start with a deposit of {price ? `${price.currency.symbol}${formatPrice(price.plans.part.deposit)}` : '$99'}</p>
                  <p className={styles.tuitionInstallmentText}>+ {price ? price.plans.part.installments : 18} Monthly Payments of {price ? `${price.currency.symbol}${formatPrice(price.plans.part.installmentSize)}` : '$197.16'}</p>
                  <div className={styles.tuitionPrice}>{price ? `${price.currency.symbol}${formatPrice(price.plans.part.total)}` : '$3648'}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
