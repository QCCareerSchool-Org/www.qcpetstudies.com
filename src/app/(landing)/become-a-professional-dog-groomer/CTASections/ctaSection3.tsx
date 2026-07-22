import type { FC } from 'react';

import styles from './cta.module.scss';
import { Check } from '@/components/check';

export const CTASection3: FC = () => (
  <section className={styles.ctaBand}>
    <div className="container text-center">
      <div className="row justify-content-center">
        <div className="col-12 col-lg-8">
          <h2 className="text-white mb-3">Ready to Start Your Dog Grooming Career?</h2>
          <div className={styles.ctaPerks}>
            <div className={styles.ctaPerk}>
              <Check color="#ff2d5c" />
              <span>Study from home at your own pace</span>
            </div>
            <div className={styles.ctaPerk}>
              <Check color="#ff2d5c" />
              <span>Receive personalized instructor feedback</span>
            </div>
            <div className={styles.ctaPerk}>
              <Check color="#ff2d5c" />
              <span>Build real grooming skills through practice</span>
            </div>
            <div className={styles.ctaPerk}>
              <Check color="#ff2d5c" />
              <span><strong>FREE</strong> professional grooming kit included</span>
            </div>
          </div>
          <div className="d-flex justify-content-center">
            <a href="#request-info" className="btn btn-primary btn-lg">REQUEST COURSE INFORMATION</a>
          </div>
        </div>
      </div>
    </div>
  </section>
);
