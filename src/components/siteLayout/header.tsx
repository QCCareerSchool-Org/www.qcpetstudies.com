import type { FC } from 'react';

import styles from './header.module.scss';
import { PromoBanner } from './promoBanner';
import { SecondaryNav } from './secondaryNav';
import { MainNav } from '@/components/siteLayout/mainNav';
import { gbpCountry } from '@/domain/currency';
import { may16 } from '@/periods';

interface Props {
  date: number;
  countryCode: string;
}

export const Header: FC<Props> = ({ date, countryCode }) => (
  <div className={`${styles.wrapper} shadow-lg`}>
    {may16.contains(date)
      ? (
        <PromoBanner date={date} promotionPeriod={may16.toDTO()}>
          {countryCode === 'US'
            ? <>Memorial Week Special: Save {gbpCountry(countryCode) ? '£300' : '$300'}</>
            : <><span className="d-none d-lg-inline">Limited-time offer: </span>Save {gbpCountry(countryCode) ? '£300' : '$300'} on your tuition when you enroll today!</>
          }
        </PromoBanner>
      )
      : null
    }
    <MainNav countryCode={countryCode} />
    <SecondaryNav />
  </div>
);
