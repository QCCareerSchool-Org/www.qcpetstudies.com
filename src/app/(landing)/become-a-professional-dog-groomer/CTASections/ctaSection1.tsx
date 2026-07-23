import type { FC } from 'react';

import styles from './cta.module.scss';

export const CTASection1: FC = () => (
  <section className={styles.ctaBand}>
    <div className="container text-center">
      <div className="row justify-content-center">
        <div className="col-12 col-lg-10">
          <h2 className="text-white mb-3">Ready to Launch Your Career?</h2>
          <div className="d-flex justify-content-center gap-3 flex-wrap mb-4">
            <a href="#request-info" className="btn btn-primary btn-lg">Preview the Course</a>
          </div>
        </div>
      </div>
    </div>
  </section>
);
