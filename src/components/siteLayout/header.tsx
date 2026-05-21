import type { FC } from 'react';

import styles from './header.module.scss';
import { PromoBanner } from './promoBanner';
import { SecondaryNav } from './secondaryNav';
import { CanadaHeader } from '../canadaHeader';
import { MainNav } from '@/components/siteLayout/mainNav';
import { gbpCountry } from '@/domain/currency';
import { may16 } from '@/periods';

interface Props {
  date: number;
  countryCode: string;
}

export const Header: FC<Props> = props => (
  <div className={`${styles.wrapper} shadow-lg`}>
    <InnerBanner {...props} />
    <MainNav countryCode={props.countryCode} />
    <SecondaryNav />
  </div>
);

const InnerBanner: FC<Props> = ({ date, countryCode }) => {
  if (countryCode === 'CA') {
    return <CanadaHeader />;
  }

  if (may16.contains(date)) {
    return (
      <PromoBanner date={date} promotionPeriod={may16.toDTO()}>
        {countryCode === 'US'
          ? <>Memorial Week Special: Save {gbpCountry(countryCode) ? '£300' : '$300'}</>
          : <><span className="d-none d-lg-inline">Limited-time offer: </span>Save {gbpCountry(countryCode) ? '£300' : '$300'} on your tuition when you enroll today!</>
        }
      </PromoBanner>
    );
  }
};
