import Link from 'next/link';
import type { FC } from 'react';

import { TelephoneLink } from '@/components/telephoneLink';
import { gbpCountry } from '@/lib/currencies';
import { getServerData } from '@/lib/getServerData';

export const Footer: FC = async () => {
  const { countryCode } = await getServerData();
  const termsLink = gbpCountry(countryCode) ? '/terms-gb' : '/terms';

  return (
    <footer className="bg-light">
      <section>
        <div className="container text-center">
          <h2>Have questions?<br />Give us a call.</h2>
          <p className="lead"><TelephoneLink countryCode={countryCode} /></p>
          &copy;{new Date().getFullYear()} QC Pet Studies<br /><Link href={termsLink}>Privacy Policy</Link>
        </div>
      </section>
    </footer>
  );
};
