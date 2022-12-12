import Image from 'next/image';
import Link from 'next/link';
import { ReactElement, ReactNode } from 'react';

import { useLocation } from '../../hooks/useLocation';
import { useScreenWidth } from '../../hooks/useScreenWidth';
import logo from '../../images/qc-pet-horizontal.svg';
import { isGBPCountry } from '../../lib/address';
import { getTelephoneNumber } from '../../lib/phone';

type Props = {
  link?: boolean;
  reloadApp?: boolean;
  nav?: boolean;
  /** custom path for the shopping cart (include leading slash) */
  enrollPath?: string;
  children: ReactNode;
};

export const LandingPageLayout = ({ link = true, reloadApp = false, nav = true, enrollPath = '/', children }: Props): ReactElement => {
  const screenWidth = useScreenWidth();
  const location = useLocation();

  const telephoneNumber = getTelephoneNumber(location?.countryCode ?? 'US');

  const smOrGreater = screenWidth >= 576;

  const termsLink = isGBPCountry(location?.countryCode ?? 'US') ? '/terms-gb' : '/terms';

  return (
    <div id="landingPage" className="d-flex flex-column vh-100">
      <header className="flex-shrink-0">
        {nav && (
          <div className="minimalNav">
            <div className="container">
              <div className="d-flex justify-content-end align-items-center text-uppercase">
                {/* <Link href="/catalog-become-dog-groomer" className="link-primary me-5">Get Catalog</Link> */}
                <a href={`https://enroll.qcpetstudies.com${enrollPath}`} className="btn btn-primary">Enroll</a>
              </div>
            </div>
          </div>
        )}
        <div className="mainNav">
          <div className="container text-center d-flex justify-content-center">
            {link
              ? reloadApp
                // eslint-disable-next-line @next/next/no-html-link-for-pages
                ? <a href="/"><Logo /></a>
                : <Link href="/"><Logo /></Link>
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
          background: black;
          color: white;
          font-size: 12px;
          font-weight: 400;
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

const Logo = (): ReactElement => <Image
  src={logo}
  alt="QC Pet Studies"
  width="300"
  height="28"
  style={{ maxWidth: '100%', height: 'auto' }}
/>;
