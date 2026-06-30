import type { FC } from 'react';

import styles from './cta.module.scss';

export const CTASection2: FC = () => (
  <section className={styles.ctaBand}>
    <div className="container text-center">
      <div className="row justify-content-center">
        <div className="col-12 col-lg-10">
          <h2 className="text-white mb-3">Launch Your Grooming Career</h2>
          <p className="lead text-white-50 mb-4">Study from home and get certified online</p>
          <div className="d-flex justify-content-center gap-3 flex-wrap mb-4">
            <a href="#request-info" className="btn btn-primary btn-lg">Start Now</a>
            <a href="#why-qc" className="btn btn-outline-light btn-lg">Learn More</a>
          </div>
        </div>
      </div>
    </div>
  </section>
);
