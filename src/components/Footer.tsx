import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import { FC, ReactNode } from 'react';
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
import { getFlagImageData } from '../lib/flags';
import { openLiveChat } from '../lib/livechat';
import { getTelephoneNumber } from '../lib/phone';

export type FooterCTAType = 'grooming' | 'training' | 'care' | 'behavior' | 'grooming tech';

type Props = {
  /** overrides the entire CTA */
  cta?: ReactNode;
  ctaType?: FooterCTAType;
  enrollPath?: string;
  className?: string;
};

export const Footer: FC<Props> = ({ ctaType, cta, enrollPath = '/', className }) => {
  const location = useLocation();
  const screenWidth = useScreenWidth();

  const address = getAddress(location?.countryCode ?? 'US');

  const phoneNumber = getTelephoneNumber(location?.countryCode);
  const smOrGreater = screenWidth >= 576;
  const lgOrGreater = screenWidth >= 992;

  const enrollUrl = ctaType === 'grooming'
    ? `https://enroll.qcpetstudies.com${enrollPath}?c=dg`
    : ctaType === 'training'
      ? `https://enroll.qcpetstudies.com${enrollPath}?c=dt`
      : ctaType === 'behavior'
        ? `https://enroll.qcpetstudies.com${enrollPath}?c=dt&c=dc`
        : ctaType === 'care'
          ? `https://enroll.qcpetstudies.com${enrollPath}?c=dd`
          : ctaType === 'grooming tech'
            ? `https://enroll.qcpetstudies.com${enrollPath}?c=gt`
            : `https://enroll.qcpetstudies.com${enrollPath}`;

  const flagImage = getFlagImageData(location?.countryCode);

  return (
    <footer style={{ borderTop: '1px solid rgb(255,255,255,0.1)' }} className={className}>
      <div className="container">

        {typeof cta === 'undefined'
          ? (
            <div className="row align-items-center">
              <div className="col-12 col-lg-9 col-xl-8 mb-4 mb-lg-0 text-center text-lg-start">
                <h2>Ready to Launch Your <strong>{ctaType === 'grooming' || ctaType === 'grooming tech' ? <><br />Grooming </> : ctaType === 'training' ? <><br />Training </> : ctaType === 'care' ? <>Dog Care </> : null}Career?</strong></h2>
                <p className="lead mb-0">Take the first step towards a new career in the booming {ctaType === 'grooming' ? 'dog grooming ' : ctaType === 'training' ? 'dog training ' : ctaType === 'behavior' ? 'behavior' : ctaType === 'care' ? ' dog care' : 'pet'} industry.</p>
              </div>
              <div className="col-12 col-lg-3 text-center text-lg-end text-xl-center">
                <a href={enrollUrl}><button className="btn btn-secondary btn-lg">Enroll Online</button></a>
              </div>
            </div>
          )
          : cta
        }

        <hr className="my-5" />

        <div className="row" id="footerRow">
          <div id="footerColBrand" className="col-12 col-lg-6 mb-5 mb-lg-0 text-center">
            <div className="mb-4">
              <Image
                id="footerLogo"
                src={Logo as StaticImageData}
                width={240}
                height={28}
                alt="QC Pet Studies"
                style={{ maxWidth: '100%', height: 'auto' }}
              />
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
                  {lgOrGreater && <div className="footerIconWrapper"><Image
                    src={InfoIcon as StaticImageData}
                    width={16}
                    height={16}
                    alt="About"
                    style={{ maxWidth: '100%', height: 'auto', position: 'relative', top: -4 }}
                  /></div>}About QC
                </Link>
              </li>
              <li>
                <a href="mailto:info@qcpetstudies.com">
                  {lgOrGreater && <div className="footerIconWrapper"><Image
                    src={EmailIcon as StaticImageData}
                    width={16}
                    height={16}
                    alt="Email"
                    style={{ maxWidth: '100%', height: 'auto', position: 'relative', top: -4 }}
                  /></div>}Email Us
                </a>
              </li>
              <li>
                <a onClick={openLiveChat} title="Open Chat Window">
                  {lgOrGreater && <div className="footerIconWrapper"><Image
                    src={ChatIcon as StaticImageData}
                    width={16}
                    height={16}
                    alt="Chat"
                    style={{ maxWidth: '100%', height: 'auto', position: 'relative', top: -4 }}
                  /></div>}Chat
                </a>
              </li>
              <li>
                <a href={`tel:${phoneNumber}`}>
                  {lgOrGreater && <div className="footerIconWrapper"><Image
                    src={PhoneIcon as StaticImageData}
                    width={16}
                    height={16}
                    alt="Phone"
                    style={{ maxWidth: '100%', height: 'auto', position: 'relative', top: -4 }}
                  /></div>}{phoneNumber}
                </a>
              </li>
            </ul>
          </div>
          <div id="footerColStayInformed" className="col-12 col-sm-4 col-lg-2 text-center text-lg-start">
            <h2 className="h4 text-primary">Stay Informed</h2>
            <div id="blogLogoWrapper">
              <Image
                src={SniffinArroundLogo as StaticImageData}
                width={155}
                height={40}
                alt="Sniffin' Around Blog"
                style={{ maxWidth: '100%', height: 'auto' }}
              />
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
            <div className="small">{address.join(', ')}{flagImage && <span style={{ position: 'relative', top: -1, marginLeft: '0.5rem' }}><Image src={flagImage.src} width={20.57} height={12} alt={flagImage.alt} /></span>}</div>
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
          <Image
            src={BBBLogo as StaticImageData}
            width={75}
            height={48}
            alt="BBB Better Business Bureau A+"
            style={{ maxWidth: '100%', height: 'auto' }}
          />
        </a>
      </div>
      <small className="logoText">BBB Accredited</small>
    </div>
    <div className="col-4 col-sm-3 col-md-2 col-lg-6">
      <div>
        <Image
          src={GuaranteeIcon as StaticImageData}
          width={46}
          height={48}
          alt="21-Day Guarantee"
          style={{ maxWidth: '100%', height: 'auto' }}
        />
      </div>
      <small className="logoText">21-Day Guarantee</small>
    </div>
  </div>
);
