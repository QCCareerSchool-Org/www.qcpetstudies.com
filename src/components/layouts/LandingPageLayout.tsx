import Image from 'next/image';
import Link from 'next/link';
import { FC, MouseEventHandler, ReactElement, ReactNode } from 'react';

import { useLocation } from '../../hooks/useLocation';
import { useScreenWidth } from '../../hooks/useScreenWidth';
import { useScrollPosition } from '../../hooks/useScrollPosition';
import logoInverse from '../../images/qc-pet-horizontal-inverse.svg';
import logo from '../../images/qc-pet-horizontal.svg';
import { isGBPCountry } from '../../lib/address';
import { gaEvent } from '../../lib/ga';
import { getTelephoneNumber } from '../../lib/phone';

type Props = {
  link?: boolean;
  reloadApp?: boolean;
  /** What type of nav link to include */
  nav?: 'brochure' | 'enroll';
  children: ReactNode;
};

export const LandingPageLayout = ({ link = true, reloadApp = false, nav, children }: Props): ReactElement => {
  const location = useLocation();
  const screenWidth = useScreenWidth();
  const scrollPosition = useScrollPosition();

  const telephoneNumber = getTelephoneNumber(location?.countryCode ?? 'US');

  const showFixedMenu = scrollPosition > 640;
  const showFixedMenuLogo = screenWidth >= 480;

  const termsLink = isGBPCountry(location?.countryCode ?? 'US') ? '/terms-gb' : '/terms';

  const handleLogoClick: MouseEventHandler = () => {
    gaEvent('click', { id: 'logoLink' });
  };

  const handleBrochureLinkClick: MouseEventHandler = () => {
    gaEvent('click', { id: 'brochureLink' });
  };

  return (
    <div id="landingPage" className="d-flex flex-column vh-100">
      <header className="flex-shrink-0">
        {nav && (
          <div className={`minimalNav ${showFixedMenu ? 'show' : ''}`}>
            <div className="container">
              <div className="d-flex justify-content-end align-items-center text-uppercase">
                {showFixedMenuLogo && (
                  <div className="flex-shrink-0 me-auto">
                    {link
                      ? reloadApp
                        // eslint-disable-next-line @next/next/no-html-link-for-pages
                        ? <a onClick={handleLogoClick} href="/"><LogoInverse /></a>
                        : <Link onClick={handleLogoClick} href="/"><LogoInverse /></Link>
                      : <LogoInverse />
                    }
                  </div>
                )}
                {nav === 'enroll' && <div className="flex-shrink-0"><a href={`https://enroll.qcpetstudies.com`} className="btn btn-primary">Enroll</a></div>}
                {nav === 'brochure' && <div className="flex-shrink-0"><Link onClick={handleBrochureLinkClick} href="#" className="btn btn-primary">Get the Course Preview</Link></div>}
              </div>
            </div>
          </div>
        )}
        <div className="mainNav">
          <div className="container text-center d-flex justify-content-center">
            {link
              ? reloadApp
                // eslint-disable-next-line @next/next/no-html-link-for-pages
                ? <a onClick={handleLogoClick} href="/"><Logo /></a>
                : <Link onClick={handleLogoClick} href="/"><Logo /></Link>
              : <Logo />
            }
          </div>
        </div>
      </header>
      <main className="flex-shrink-0">
        {children}
      </main>
      <footer className="bg-dark">
        <section>
          <div className="container text-center">
            <h2>Have questions?<br />Give us a call.</h2>
            <p className="lead"><Link href={`tel:${telephoneNumber}`} className="link-primary">{telephoneNumber}</Link></p>
            &copy;{new Date().getFullYear()} QC Pet Studies<br /><Link href={termsLink} className="link-primary">Privacy Policy</Link>
          </div>
        </section>
      </footer>
      <style jsx>{`
        .mainNav {
          background: linear-gradient(#f6f6f6, #dfdfdf);
          padding: 24px 0;
        }
        .minimalNav {
          opacity: 0;
          background: black;
          color: white;
          font-size: 12px;
          font-weight: 400;
          position: fixed;
          z-index: 1000;
          width: 100%;
        }
        .minimalNav.show {
          opacity: 1;
          transition: opacity 500ms;
        }
        .minimalNav .btn {
          font-size: 12px;
          font-weight: 400;
        }
        .minimalNav a:link { color: white; }
        .minimalNav a:visited { color: white; }
        .minimalNav a:hover { color: #e8e8e8; }
        .minimalNav a:active { color: #e8e8e8; }
      `}</style>
    </div>
  );
};

const Logo: FC = () => (
  <Image
    src={logo}
    alt="QC Pet Studies"
    width="300"
    height="28"
    style={{ maxWidth: '100%', height: 'auto' }}
  />
);

const LogoInverse: FC = () => (
  <Image
    src={logoInverse}
    alt="QC Pet Studies"
    width="825"
    height="77"
    style={{ width: 172, height: 16 }}
  />
);
