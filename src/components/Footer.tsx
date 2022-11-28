import Image from 'next/legacy/image';
import Link from 'next/link';
import { FC } from 'react';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

import { useLocation } from '../hooks/useLocation';
import { useScreenWidth } from '../hooks/useScreenWidth';
import BBBLogo from '../images/a-plus-left-pad.svg';
import ChatIcon from '../images/footer-icons-chat.svg';
import EmailIcon from '../images/footer-icons-email.svg';
import InfoIcon from '../images/footer-icons-info.svg';
import PhoneIcon from '../images/footer-icons-phone.svg';
import GuaranteeIcon from '../images/guarantee-icon-fill.svg';
import Logo from '../images/logo-top-white.svg';
import SniffinArroundLogo from '../images/sniffin-around-logo-white.svg';
import { getAddress, isGBPCountry } from '../lib/address';
import { openLiveChat } from '../lib/livechat';
import { getTelephoneNumber } from '../lib/phone';

export type FooterCTAType = 'grooming' | 'training' | 'care';

type Props = {
  ctaType?: FooterCTAType;
  enrollPath?: string;
  className?: string;
};

export const Footer: FC<Props> = ({ ctaType, enrollPath = '/', className }) => {
  const location = useLocation();
  const screenWidth = useScreenWidth();

  const address = getAddress(location?.countryCode ?? 'US');

  const phoneNumber = getTelephoneNumber(location?.countryCode);
  const smOrGreater = screenWidth >= 576;
  const lgOrGreater = screenWidth >= 992;

  const enrollUrl = ctaType === 'grooming'
    ? `https://enroll.qcpetstudies.com${enrollPath}?c[]=dg`
    : ctaType === 'training'
      ? `https://enroll.qcpetstudies.com${enrollPath}?c[]=dt`
      : ctaType === 'care'
        ? `https://enroll.qcpetstudies.com${enrollPath}?c[]=dd`
        : `https://enroll.qcpetstudies.com${enrollPath}`;

  return (
    <footer style={{ borderTop: '1px solid rgb(255,255,255,0.1)' }} className={className}>
      <div className="container">

        <div className="row align-items-center">
          <div className="col-12 col-lg-9 col-xl-8 mb-4 mb-lg-0 text-center text-lg-start">
            <h2>Ready to Launch Your <strong>{ctaType === 'grooming' ? <><br />Grooming </> : ctaType === 'training' ? <><br />Training </> : ctaType === 'care' ? <>Dog Care </> : null}Career?</strong></h2>
            <p className="lead mb-0">Take the first step towards a new career in the booming {ctaType === 'grooming' ? 'dog grooming ' : ctaType === 'training' ? 'dog training ' : ctaType === 'care' ? ' dog care' : 'pet'} industry.</p>
          </div>
          <div className="col-12 col-lg-3 text-center text-lg-end text-xl-center">
            <a href={enrollUrl}><button className="btn btn-secondary btn-lg">Enroll Online</button></a>
          </div>
        </div>

        <hr className="my-5" />

        <div className="row" id="footerRow">
          <div id="footerColBrand" className="col-12 col-lg-6 mb-5 mb-lg-0 text-center">
            <div className="mb-4">
              <Image id="footerLogo" src={Logo} width={240} height={28} alt="QC Pet Studies" />
            </div>
            <BBBGuarantee />
            <a href="https://studentcenter.qccareerschool.com">
              <button id="footerLogInButton" className="btn btn-outline-light">Student Log In</button>
            </a>
          </div>
          <div id="footerColCertifications" className="col-12 col-sm-4 col-lg-2 mb-4 mb-sm-0 text-center text-lg-start">
            <h2 className="h4 text-primary mb-sm-4">Certifications</h2>
            <ul className="spacedList">
              <li><Link href="/certification-courses/dog-grooming">Dog Grooming</Link></li>
              <li><Link href="/certification-courses/dog-training">Dog Training</Link></li>
              <li><Link href="/certification-courses/dog-daycare">Dog Daycare</Link></li>
            </ul>
          </div>
          <div id="footerColContactUs" className="col-12 col-sm-4 col-lg-2 mb-4 mb-sm-0 text-center text-lg-start">
            <h2 className="h4 text-primary mb-sm-4">Contact Us</h2>
            <ul className="spacedList">
              <li>
                <Link href="/about/about-qc-pet-studies">
                  {lgOrGreater && <div className="footerIconWrapper"><Image src={InfoIcon} width={16} height={16} alt="About" /></div>}About QC
                </Link>
              </li>
              <li>
                <a href="mailto:info@qcpetstudies.com">
                  {lgOrGreater && <div className="footerIconWrapper"><Image src={EmailIcon} width={16} height={16} alt="Email" /></div>}Email Us
                </a>
              </li>
              <li>
                <a onClick={openLiveChat} title="Open Chat Window">
                  {lgOrGreater && <div className="footerIconWrapper"><Image src={ChatIcon} width={16} height={16} alt="Chat" /></div>}Chat
                </a>
              </li>
              <li>
                <a href={`tel:${phoneNumber}`}>
                  {lgOrGreater && <div className="footerIconWrapper"><Image src={PhoneIcon} width={16} height={16} alt="Phone" /></div>}{phoneNumber}
                </a>
              </li>
            </ul>
          </div>
          <div id="footerColStayInformed" className="col-12 col-sm-4 col-lg-2 text-center text-lg-start">
            <h2 className="h4 text-primary">Stay Informed</h2>
            <div id="blogLogoWrapper">
              <Image src={SniffinArroundLogo} width={155} height={40} alt="Sniffin' Around Blog" />
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
              <Link href={isGBPCountry(location?.countryCode ?? 'US') ? '/terms-gb' : '/terms'}>Privacy Policy</Link>
              {smOrGreater && (
                <>
                  <PipeSpacer />
                  <Link href="/about/faq">FAQ</Link>
                </>
              )}
            </div>
            <div className="small">{address.join(', ')}</div>
          </div>
          <div className="col-12 col-sm-3 text-center text-sm-end">
            <a href="https://www.facebook.com/qcpetstudies" target="_blank" rel="noopener noreferrer"><FaFacebookF className="me-3" /></a>
            <a href="https://twitter.com/qcpetstudies" target="_blank" rel="noopener noreferrer"><FaTwitter className="me-3" /></a>
            <a href="https://www.instagram.com/qcpetstudies" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
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
          <Image src={BBBLogo} width={75} height={48} alt="BBB Better Business Bureau A+" />
        </a>
      </div>
      <small className="logoText">BBB Accredited</small>
    </div>
    <div className="col-4 col-sm-3 col-md-2 col-lg-6">
      <div>
        <Image src={GuaranteeIcon} width={46} height={48} alt="21-Day Guarantee" />
      </div>
      <small className="logoText">21-Day Guarantee</small>
    </div>
  </div>
);
