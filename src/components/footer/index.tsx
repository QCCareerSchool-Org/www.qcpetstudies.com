import Link from 'next/link';
import type { FC, ReactNode } from 'react';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

import BBBLogo from './bbb-icon.svg';
import ChatIcon from './chat-icon.svg';
import type { CTAType } from './cta';
import { CTA } from './cta';
import EmailIcon from './email-icon.svg';
import GuaranteeIcon from './guarantee-icon.svg';
import styles from './index.module.scss';
import InfoIcon from './info-icon.svg';
import PhoneIcon from './phone-icon.svg';
import SniffinArroundLogo from './sniffin-around-logo-white.svg';
import { Flag } from '@/components/flag';
import { LivechatLink } from '@/components/livechatLink';
import { Logo } from '@/components/logo';
import { getAddress } from '@/lib/address';
import { gbpCountry } from '@/lib/currencies';
import { getTelephoneNumber } from '@/lib/telephone';

type Props = {
  countryCode: string;
  /** overrides the entire CTA section */
  cta?: ReactNode;
  ctaType?: CTAType;
  className?: string;
};

export const Footer: FC<Props> = ({ countryCode, ctaType, cta }) => {
  const address = getAddress(countryCode);
  const phoneNumber = getTelephoneNumber(countryCode);
  const termsLink = gbpCountry(countryCode) ? '/terms-gb' : '/terms';

  return (
    <footer className={`${styles.footer} bg-navy`}>
      <div className="container">
        {typeof cta !== 'undefined' ? cta : <CTA type={ctaType} /> }
        <hr className="my-5" />
        <div className="row">
          <div className={`${styles.brandCol} col-12 col-lg-6 mb-5 mb-lg-0 text-center`}>
            <div className="mb-4">
              <Logo inverse height={28} />
            </div>
            <BBBGuarantee />
            <a href="https://studentcenter.qccareerschool.com">
              <button className={`${styles.logInButton} btn btn-outline-light`}>Student Log In</button>
            </a>
          </div>
          <div className={`${styles.certificationsCol} col-12 col-sm-4 col-lg-2 mb-4 mb-sm-0 text-center text-lg-start`}>
            <h2 className="h4 text-primary mb-sm-4">Certifications</h2>
            <ul className={styles.spacedList}>
              <li><Link href="/certification-courses/dog-grooming">Dog Grooming</Link></li>
              <li><Link href="/certification-courses/dog-training">Dog Training</Link></li>
              <li><Link href="/certification-courses/dog-daycare">Dog Daycare</Link></li>
            </ul>
          </div>
          <div className={`${styles.contactCol} col-12 col-sm-4 col-lg-2 mb-4 mb-sm-0 text-center text-lg-start`}>
            <h2 className="h4 text-primary mb-sm-4">Contact Us</h2>
            <ul className={styles.spacedList}>
              <li><Link href="/about/about-qc-pet-studies"><InfoIcon width={16} height={16} className={styles.icon} />About QC</Link></li>
              <li><a href="mailto:info@qcpetstudies.com"><EmailIcon width={16} height={16} className={styles.icon} />Email Us</a></li>
              <li><LivechatLink><ChatIcon width={16} height={16} className={styles.icon} />Chat</LivechatLink></li>
              <li><a href={`tel:${phoneNumber}`}><PhoneIcon width={16} height={16} className={styles.icon} />{phoneNumber}</a></li>
            </ul>
          </div>
          <div className={`${styles.stayInformedCol} col-12 col-sm-4 col-lg-2 text-center text-lg-start`}>
            <h2 className="h4 text-primary">Stay Informed</h2>
            <div className={styles.blogLogoWrapper}>
              <SniffinArroundLogo width={155} height={40} alt="Sniffin' Around Blog" style={{ maxWidth: '100%', height: 'auto' }} />
            </div>
            <ul>
              <li><Link href="/blog/category/grooming">Grooming</Link></li>
              <li><Link href="/blog/category/dog-training">Dog Training</Link></li>
              <li><Link href="/blog/category/student-features">Student Features</Link></li>
              <li><Link href="/blog/category/career-advice">Career Advice</Link></li>
            </ul>
          </div>
        </div>
        <hr className="my-4 mb-lg-3" />
        <div className="row">
          <div className="col-12 col-sm-9 text-center text-sm-start mb-2 mb-sm-0">
            <div className="small">
              &copy; {new Date().getFullYear()} QC Pet Studies
              <PipeSpacer />
              <Link href={termsLink}>Privacy Policy</Link>
              <span className="d-none d-sm-inline">
                <PipeSpacer />
                <Link href="/about/faq">FAQ</Link>
              </span>
            </div>
            <div className="small">{address.join(', ')}<span style={{ position: 'relative', top: -1, marginLeft: '0.5rem' }}><Flag countryCode={countryCode} height={12} /></span></div>
          </div>
          <div className="col-12 col-sm-3 text-center text-sm-end">
            <a href="https://www.facebook.com/qcpetstudies" target="_blank" rel="noreferrer"><FaFacebookF className="me-3" /></a>
            <a href="https://twitter.com/qcpetstudies" target="_blank" rel="noreferrer"><FaTwitter className="me-3" /></a>
            <a href="https://www.instagram.com/qcpetstudies" target="_blank" rel="noreferrer"><FaInstagram /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const PipeSpacer: FC = () => <>&nbsp;&nbsp;|&nbsp;&nbsp;</>;

const BBBGuarantee: FC = () => (
  <div className="row text-center sm-gutters mb-4">
    <div className="col-4 offset-2 col-sm-3 offset-sm-3 col-md-2 offset-md-4 col-lg-6 offset-lg-0">
      <div>
        <a href="https://www.bbb.org/ca/on/ottawa/profile/correspondence-schools/qc-career-school-0117-4175/#sealclick" target="_blank" rel="noreferrer">
          <BBBLogo width={75} height={48} alt="BBB Better Business Bureau A+" style={{ maxWidth: '100%', height: 'auto' }} />
        </a>
      </div>
      <small className={styles.logoText}>BBB Accredited</small>
    </div>
    <div className="col-4 col-sm-3 col-md-2 col-lg-6">
      <div>
        <GuaranteeIcon width={46} height={48} alt="21-Day Guarantee" style={{ maxWidth: '100%', height: 'auto' }} />
      </div>
      <small className={styles.logoText}>21-Day Guarantee</small>
    </div>
  </div>
);
