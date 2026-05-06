import type { FC } from 'react';

import styles from './header.module.scss';
import { PromoBanner } from './promoBanner';
import { SecondaryNav } from './secondaryNav';
import { MainNav } from '@/components/siteLayout/mainNav';
import { gbpCountry } from '@/domain/currency';
import { may06 } from '@/periods';

interface Props {
  date: number;
  countryCode: string;
}

export const Header: FC<Props> = ({ date, countryCode }) => (
  <div className={`${styles.wrapper} shadow-lg`}>
    {may06.contains(date)
      ? (
        <PromoBanner date={date} promotionPeriod={may06.toDTO()}>
          <span className="d-none d-lg-inline">Limited-time offer: </span>Save {gbpCountry(countryCode) ? '£300' : '$300'} on your tuition when you enroll today!
        </PromoBanner>
      )
      : null
    }
    <MainNav countryCode={countryCode} />
    <SecondaryNav />
  </div>
);
