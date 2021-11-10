import Image from 'next/image';
import Link from 'next/link';
import { ReactElement, ReactNode } from 'react';

import { useLocation } from '../hooks/useLocation';
import logo from '../images/qc-pet-horizontal.svg';
import { gbCountry } from '../lib/address';
import { getTelephoneNumber } from '../lib/phone';

type Props = {
  children: ReactNode;
};

export const LandingPageLayout = ({ children }: Props): ReactElement => {
  const location = useLocation();
  const telephoneNumber = getTelephoneNumber(location?.countryCode ?? 'US');

  const termsLink = gbCountry(location?.countryCode ?? 'US') ? '/terms-gb' : '/terms';

  return (
    <div id="landingPage" className="d-flex flex-column vh-100">
      <header className="flex-shrink-0">
        <div className="container text-center">
          <div className="py-4">
            <Link href="/"><a><Image src={logo} alt="QC Pet Studies" width="300" height="28" /></a></Link>
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
            <p className="lead"><Link href={`tel:${telephoneNumber}`}><a className="link-primary">{telephoneNumber}</a></Link></p>
            &copy;{new Date().getFullYear()} QC Pet Studies<br /><Link href={termsLink}><a className="link-primary">Privacy Policy</a></Link>
          </div>
        </section>
      </footer>
      <style jsx>{`
        header {
          background: linear-gradient(#f6f6f6, #dfdfdf);
        }
      `}</style>
    </div>
  );
};
