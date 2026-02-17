import type { FC } from 'react';

import styles from './header.module.scss';
import { PromoBanner } from './promoBanner';
import { SecondaryNav } from './secondaryNav';
import { MainNav } from '@/components/siteLayout/mainNav';
import { gbpCountry } from '@/lib/currencies';
import { feb19 } from '@/periods';

interface Props {
  date: number;
  countryCode: string;
}

export const Header: FC<Props> = ({ date, countryCode }) => (
  <div className={`${styles.wrapper} shadow-lg`}>
    {feb19.contains(date)
      ? (
        <PromoBanner date={date} promotionPeriod={feb19.toDTO()}>
          <span className="d-none d-lg-inline">Limited-Time Offer—</span>Save {gbpCountry(countryCode) ? '£300' : '$300'} on tuition + start for just {gbpCountry(countryCode) ? '£99' : '$99'}!
        </PromoBanner>
      )
      : null
    }
    <MainNav countryCode={countryCode} />
    <SecondaryNav />
  </div>
);
