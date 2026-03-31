import type { FC } from 'react';

import styles from './header.module.scss';
import { PromoBanner } from './promoBanner';
import { SecondaryNav } from './secondaryNav';
import { MainNav } from '@/components/siteLayout/mainNav';
import { gbpCountry } from '@/domain/currency';
import { april1 } from '@/periods';

interface Props {
  date: number;
  countryCode: string;
}

export const Header: FC<Props> = ({ date, countryCode }) => (
  <div className={`${styles.wrapper} shadow-lg`}>
    {april1.contains(date)
      ? (
        <PromoBanner date={date} promotionPeriod={april1.toDTO()}>
          <span className="d-none d-lg-inline">Limited-time offer: </span>Start today for just {gbpCountry(countryCode) ? '£99' : '$99'} + get a second course free!
        </PromoBanner>
      )
      : null
    }
    <MainNav countryCode={countryCode} />
    <SecondaryNav />
  </div>
);
