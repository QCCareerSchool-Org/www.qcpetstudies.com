import Image from 'next/image';
import type { FC } from 'react';

import CertIcon from './certification.svg';
import styles from './index.module.scss';
import Background from './pet-certificate-bg.jpg';
import CertificationLogo from '../../IDGP-certification-gold.svg';
import { BackgroundImage } from '@/components/backgroundImage';
import { Overlay } from '@/components/overlay';
import { externship } from '@/lib/externship';

interface Props {
  countryCode: string;
  provinceCode: string | null;
}

export const CertificationSection: FC<Props> = ({ countryCode, provinceCode }) => {
  return (
    <section className="bg-dark text-white text-shadow">
      <BackgroundImage src={Background} />
      <Overlay backgroundColor="rgba(0,0,0,0.65)" />
      <div className="container">
        <div className="row justify-content-end">
          <div className="col-12 col-lg-9 col-xl-8">
            <h2 className="h2 mb-3"><strong>Your International Dog Grooming Professional Certification</strong></h2>
            <div className="d-flex gap-4 mb-4">
              <div>
                <p>Once you graduate from your online dog grooming course, you'll receive a certification and be able to use the designation of International Dog Grooming Professional (IDGP).</p>
                <p>This certification demonstrates that you have successfully completed professional training and that you possess all the skills and knowledge required to safely handle dogs and deliver top-notch, professional grooms.</p>
                <p>Throughout your training, you'll also earn up to six additional skills certificates as you complete each practicum unit. These credentials recognize your mastery of key grooming techniques and allow you to showcase your progress as you build your professional expertise.</p>
                {externship(countryCode, provinceCode) && <p>If you complete the <strong>Externship Track</strong>, you'll also receive an <strong>additional certificate of completion</strong> recognizing your additional hands-on training and real-world salon experience!</p>}
              </div>
              <Image src={CertificationLogo} alt="IDGP" />
            </div>
            <div className={styles.callout}>
              <div>
                <span className={styles.credentialCount}>6</span>
                Additional Skills<br />Credentials
                <hr />
              </div>
              <div className={styles.credentials}>
                <ul className={styles.gold}>
                  <li><Icon />Dog Grooming First Aid Certificate</li>
                  <li><Icon />Bathing &amp; Brushing Certificate</li>
                  <li><Icon />Natural Breed Grooming Certificate</li>
                  <li><Icon />Teddy Bear Bear Cut Certificate</li>
                  <li><Icon />Terrier Grooming Certificate</li>
                  <li><Icon />Non-Sporting Breed Certificate</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Icon: FC = () => (
  <Image
    src={CertIcon}
    alt=""
    height="20"
    style={{ position: 'relative', top: 3 }}
  />
);
