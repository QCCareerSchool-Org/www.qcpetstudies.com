'use client';

import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import type { FC, MouseEventHandler, ReactNode } from 'react';

import { useLocation } from '@/hooks/useLocation';
import { useScreenWidth } from '@/hooks/useScreenWidth';
import { useScrollPosition } from '@/hooks/useScrollPosition';
import favicon from '@/images/favicon.svg';
import logoInverse from '@/images/qc-pet-horizontal-inverse.svg';
import logo from '@/images/qc-pet-horizontal.svg';
import qcLogo from '@/images/qc-white.svg';
import { isGBPCountry } from '@/lib/address';
import { gaEvent } from '@/lib/ga';
import { getTelephoneNumber } from '@/lib/phone';

type Props = {
  link?: boolean;
  href?: string;
  reloadApp?: boolean;
  /** What type of nav link to include */
  nav?: 'brochure' | 'enroll';
  footer?: boolean;
  children: ReactNode;
};

const LandingPageLayout: FC<Props> = ({ link = true, href = '/', reloadApp = false, nav, footer = true, children }) => {
  const location = useLocation();
  const screenWidth = useScreenWidth();
  const scrollPosition = useScrollPosition();

  const telephoneNumber = getTelephoneNumber(location?.countryCode ?? 'US');

  const showFixedMenu = scrollPosition > 640;

  const termsLink = isGBPCountry(location?.countryCode ?? 'US') ? '/terms-gb' : '/terms';

  const handleLogoClick: MouseEventHandler = () => {
    gaEvent('click', { id: 'logoLink' });
  };

  const handleBrochureMenuLinkClick: MouseEventHandler = () => {
    gaEvent('click', { id: 'brochureMenuLink' });
  };

  return (
    <div id="landingPage" className="d-flex flex-column vh-100">
      <header className="flex-shrink-0">
        {nav && (
          <div className={`fixedNav ${showFixedMenu ? 'show' : ''}`}>
            <div id="fixedNavContainer" className="container">
              <div className="d-flex justify-content-end align-items-center text-uppercase">
                <div className="flex-shrink-0 me-auto">
                  {link
                    ? reloadApp
                      // eslint-disable-next-line @next/next/no-html-link-for-pages
                      ? <a onClick={handleLogoClick} href={href}><FixedMenuLogo screenWidth={screenWidth} /></a>
                      : <Link onClick={handleLogoClick} href={href}><FixedMenuLogo screenWidth={screenWidth} /></Link>
                    : <FixedMenuLogo screenWidth={screenWidth} />
                  }
                </div>
                {nav === 'enroll' && <div className="flex-shrink-0"><a href={href ?? 'https://enroll.qcpetstudies.com'} className="btn btn-primary">Enroll</a></div>}
                {nav === 'brochure' && <div className="flex-shrink-0"><Link onClick={handleBrochureMenuLinkClick} href="#" className="btn btn-primary">Get the {screenWidth >= 375 ? 'Free ' : null}Course Preview</Link></div>}
              </div>
            </div>
          </div>
        )}
        <div className="mainNav">
          <div className="container text-center d-flex justify-content-center">
            {link
              ? reloadApp
                // eslint-disable-next-line @next/next/no-html-link-for-pages
                ? <a onClick={handleLogoClick} href={href}><MainLogo /></a>
                : <Link onClick={handleLogoClick} href={href}><MainLogo /></Link>
              : <MainLogo />
            }
          </div>
        </div>
      </header>
      <main className="flex-shrink-0">
        {children}
      </main>
      <footer className="bg-dark">
        {footer
          ? (
            <section>
              <div className="container text-center">
                <h2>Have questions?<br />Give us a call.</h2>
                <p className="lead"><Link href={`tel:${telephoneNumber}`} className="link-primary">{telephoneNumber}</Link></p>
                <Copyright termsLink={termsLink} />
              </div>
            </section>
          )
          : (
            <div className="container text-center py-3">
              <Copyright termsLink={termsLink} />
            </div>
          )
        }
      </footer>
      <style jsx>{`
        @media only screen and (max-width: 575px) {
          #fixedNavContainer {
            margin-right: 0;
            padding-right: 0;
          }
        }
        .mainNav {
          background: linear-gradient(#f6f6f6, #dfdfdf);
          padding: 24px 0;
        }
        .fixedNav {
          opacity: 0;
          background: black;
          color: white;
          font-size: 12px;
          font-weight: 400;
          position: fixed;
          z-index: 1000;
          width: 100%;
        }
        .fixedNav.show {
          opacity: 1;
          transition: opacity 500ms;
        }
        .fixedNav .btn {
          font-size: 12px;
          font-weight: 400;
        }
        .fixedNav a:link { color: white; }
        .fixedNav a:visited { color: white; }
        .fixedNav a:hover { color: #e8e8e8; }
        .fixedNav a:active { color: #e8e8e8; }
      `}</style>
    </div>
  );
};

const Copyright: FC<{ termsLink: string }> = ({ termsLink }) => (
  <>&copy;{new Date().getFullYear()} QC Pet Studies<br /><Link href={termsLink} className="link-primary">Privacy Policy</Link></>
);

const MainLogo: FC = () => (
  <Image
    src={logo as StaticImageData}
    alt="QC Pet Studies"
    width="300"
    height="28"
    style={{ maxWidth: '100%', height: 'auto' }}
  />
);

type FixedMenuLogoProps = {
  screenWidth: number;
};

const FixedMenuLogo: FC<FixedMenuLogoProps> = ({ screenWidth }) => {
  if (screenWidth >= 480) {
    return (
      <Image
        src={logoInverse as StaticImageData}
        alt="QC Pet Studies"
        width="825"
        height="77"
        style={{ width: 172, height: 16 }}
      />
    );
  }
  if (screenWidth >= 330) {
    return (
      <>
        <Image
          src={favicon as StaticImageData}
          width="21"
          height="21"
          alt="QC Pet Studies"
          style={{ width: 18, height: 18, marginRight: '0.5rem' }}
        />
        <Image
          src={qcLogo as StaticImageData}
          alt="QC"
          width="151"
          height="77"
          style={{ width: 32, height: 16 }}
        />
      </>
    );
  }
  return null;
};

export default LandingPageLayout;
