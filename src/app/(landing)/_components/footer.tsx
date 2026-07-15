import Image from 'next/image';
import Link from 'next/link';
import type { FC } from 'react';

import PhoneCallIcon from './phone-call.svg';
import { TelephoneLink } from '@/components/telephoneLink';
import { gbpCountry } from '@/domain/currency';
import { getServerData } from '@/lib/getServerData';

export const Footer: FC = async () => {
  const { countryCode } = await getServerData();
  const termsLink = gbpCountry(countryCode) ? '/terms-gb' : '/terms';

  return (
    <footer className="bg-light">
      <section>
        <div className="container text-center">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-10">
              <h2 className="fw-bold mb-4">Have questions?</h2>
              <h2 className="mb-4 fw-bold" style={{ fontSize: 'clamp(1.5rem, 2.1vw, 2.15rem)' }}>Give us a call</h2>
              <div className="d-flex align-items-center justify-content-center rounded-circle bg-primary p-4 mb-4 mx-auto" style={{ width: 'fit-content' }}>
                <Image src={PhoneCallIcon} alt="" width={40} height={40} />
              </div>
              <p className="mb-4 fw-bold" style={{ fontSize: 'clamp(1.5rem, 2.1vw, 2.15rem)' }}><TelephoneLink countryCode={countryCode} className="text-dark" /></p>
            </div>
          </div>
        </div>
        <div className="container">
          <hr />
        </div>
        <div>
          <div className="container d-flex justify-content-between align-items-center">
            &copy;{new Date().getFullYear()} QC Pet Studies<br /><Link href={termsLink}>Privacy Policy</Link>
          </div>
        </div>
      </section>
    </footer>
  );
};
