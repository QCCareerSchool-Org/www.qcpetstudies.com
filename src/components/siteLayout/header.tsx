import type { FC } from 'react';

import styles from './header.module.scss';
import { PromoBanner } from './promoBanner';
import { SecondaryNav } from './secondaryNav';
import { MainNav } from '@/components/siteLayout/mainNav';
import { gbpCountry } from '@/lib/currencies';
import { feb04, feb13 } from '@/lib/promotionPeriods';

interface Props {
  date: number;
  countryCode: string;
}

export const Header: FC<Props> = ({ date, countryCode }) => (
  <div className={`${styles.wrapper} shadow-lg`}>
    {feb04.contains(date)
      ? (
        <PromoBanner date={date} promotionPeriod={feb04.toObject()}>
          <span className="d-none d-lg-inline">Don't Miss Out—</span>Get {gbpCountry(countryCode) ? '£300' : '$300'} Off Your Tuition!
        </PromoBanner>
      )
      : feb13.contains(date)
        ? (
          <PromoBanner date={date} promotionPeriod={feb04.toObject()}>
            <span className="d-none d-lg-inline">Limited Time Offer:</span> Start today for just {gbpCountry(countryCode) ? '£99' : '$99'} + get a second course free!

          </PromoBanner>
        )
        : null
    }
    <MainNav countryCode={countryCode} />
    <SecondaryNav />
  </div>
);
