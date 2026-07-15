import Image from 'next/image';
import type { FC } from 'react';

import BBB from '../bbb.svg';
import styles from './cta.module.scss';
import Guarantee from '../guarantee.svg';

export const CTASection1: FC = () => (
  <section className={styles.ctaBand}>
    <div className="container text-center">
      <div className="row justify-content-center">
        <div className="col-12 col-lg-10">
          <h2 className="text-white mb-3">Ready to Launch Your Career?</h2>
          <div className="d-flex justify-content-center gap-3 flex-wrap mb-4">
            <a href="#request-info" className="btn btn-primary btn-lg">Start Now</a>
            <a href="#why-qc" className="btn btn-outline-light btn-lg">Learn More</a>
          </div>
          <div className="d-flex justify-content-center gap-4 flex-wrap">
            <div className="d-flex flex-column align-items-center gap-3">
              <Image src={BBB} alt="BBB Accredited" width={50} height={50} />
              <div className="fw-bold">BBB ACCREDITED</div>
            </div>
            <div className="d-flex flex-column align-items-center gap-3">
              <Image src={Guarantee} alt="14-Day Guarantee" width={50} height={50} />
              <div className="fw-bold">14-DAY GUARANTEE</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
