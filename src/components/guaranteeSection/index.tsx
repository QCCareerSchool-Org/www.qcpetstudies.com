import Image from 'next/image';
import type { FC } from 'react';

import styles from './index.module.scss';
import ShieldIcon from '@/components/icons/shield.svg';

interface Props {
  className?: string;
  double?: boolean;
  id?: string;
}

export const GuaranteeSection: FC<Props> = ({ className, id = 'guarantee' }) => (
  <>
    <div id={id} className="sectionAnchor" />
    <section className={className}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-8 col-xxl-7 text-center">
            <Image src={ShieldIcon} height="32" className="mb-3" alt="" />
            <h2 className={`${styles.moneyBackHeader} mb-3`}>21-Day Money-Back Guarantee</h2>
            <h3 className={`h2 ${styles.riskFreeHeader} mb-3`}><strong>Try Any Course 100% Risk Free</strong></h3>
            <p className="mb-0">After enrolling, you have 21 days to review your course materials. If the course isn't right for you, simply contact us for a full refund!</p>
          </div>
        </div>
      </div>
    </section>
  </>
);
