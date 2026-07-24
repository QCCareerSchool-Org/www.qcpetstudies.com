import type { FC } from 'react';

import { Breakdown } from './breakdown';
import styles from './tuition.module.scss';
import type { Price } from '@/domain/price';

interface Props {
  dgPrice: Price;
  dePrice: Price;
}

export const TuitionSection: FC<Props> = ({ dgPrice, dePrice }) => (
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
                <Breakdown price={dgPrice} />
              </div>
            </div>
            <div className="col-12 col-lg-6">
              <div className={styles.tuitionPlanCard}>
                <div className={styles.tuitionPlanHeader}>EXTERNSHIP TRACK</div>
                <Breakdown price={dePrice} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
