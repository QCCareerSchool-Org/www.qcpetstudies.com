import type { FC } from 'react';

import BBBLogo from './bbb-icon.svg';
import styles from './bbbGuarantee.module.scss';
import GuaranteeIcon from './guarantee-icon.svg';
import Image from 'next/image';

export const BBBGuarantee: FC = () => (
  <div className="row text-center sm-gutters mb-4">
    <div className="col-4 offset-2 col-sm-3 offset-sm-3 col-md-2 offset-md-4 col-lg-6 offset-lg-0">
      <div>
        <a href="https://www.bbb.org/ca/on/ottawa/profile/correspondence-schools/qc-career-school-0117-4175/#sealclick" target="_blank" rel="noreferrer">
          <Image src={BBBLogo} width={75} height={48} alt="BBB Better Business Bureau A+" style={{ maxWidth: '100%', height: 'auto' }} />
        </a>
      </div>
      <small className={styles.logoText}>BBB Accredited</small>
    </div>
    <div className="col-4 col-sm-3 col-md-2 col-lg-6">
      <div>
        <Image src={GuaranteeIcon} width={46} height={48} alt="21-Day Guarantee" style={{ maxWidth: '100%', height: 'auto' }} />
      </div>
      <small className={styles.logoText}>21-Day Guarantee</small>
    </div>
  </div>
);
