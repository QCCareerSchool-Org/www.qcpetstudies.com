import type { FC } from 'react';

import styles from './header.module.scss';
import { PromoBanner } from './promoBanner';
import { SecondaryNav } from './secondaryNav';
import { MainNav } from '@/components/siteLayout/mainNav';
import { gbpCountry } from '@/domain/currency';
import { mar18 } from '@/periods';

interface Props {
  date: number;
  countryCode: string;
}

export const Header: FC<Props> = ({ date, countryCode }) => (
  <div className={`${styles.wrapper} shadow-lg`}>
    {mar18.contains(date)
      ? (
        <PromoBanner date={date} promotionPeriod={mar18.toDTO()}>
          <span className="d-none d-lg-inline">Don't Miss Out!</span> Enroll Today and Save {gbpCountry(countryCode) ? '£400' : '$400'}!
        </PromoBanner>
      )
      : null
    }
    <MainNav countryCode={countryCode} />
    <SecondaryNav />
  </div>
);
