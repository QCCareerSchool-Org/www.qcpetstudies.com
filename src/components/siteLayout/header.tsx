import type { FC } from 'react';

import styles from './header.module.scss';
import { PromoBanner } from './promoBanner';
import { SecondaryNav } from './secondaryNav';
import { MainNav } from '@/components/siteLayout/mainNav';
import { gbpCountry } from '@/domain/currency';
import { november04, november16 } from '@/periods';

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
  if (november04.contains(date)) {
    return (
      <PromoBanner date={date} promotionPeriod={november04.toDTO()}>
        <span className="d-none d-lg-inline">Black Friday Offer:</span> Save {gbpCountry(countryCode) ? '£400' : '$400'} on Tuition!
      </PromoBanner>
    );
  }
  if (november16.contains(date)) {
    return (
      <PromoBanner date={date} promotionPeriod={november16.toDTO()}>
        <span className="d-none d-lg-inline">Black Friday Offer:</span> Save {gbpCountry(countryCode) ? '£400' : '$400'} on Tuition!
      </PromoBanner>
    );
  }
};
