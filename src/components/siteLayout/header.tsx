import type { FC } from 'react';

import styles from './header.module.scss';
import { PromoBanner } from './promoBanner';
import { SecondaryNav } from './secondaryNav';
import { MainNav } from '@/components/siteLayout/mainNav';
import { gbpCountry } from '@/domain/currency';
import { august14, july22 } from '@/periods';

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

  if (august14.contains(date)) {
    return (
      <PromoBanner date={date} promotionPeriod={august14.toDTO()}>
        <span className="d-none d-lg-inline">Early Back to School Offer:{' '}</span>Save {gbpCountry(countryCode) ? '£400' : '$400'} on tuition!
      </PromoBanner>
    );
  }

  if (july22.contains(date)) {
    return (
      <PromoBanner date={date} promotionPeriod={july22.toDTO()}>
        <span className="d-none d-lg-inline">Ends Soon:{' '}</span>Save {gbpCountry(countryCode) ? '£400' : '$400'} on Tuition
      </PromoBanner>
    );
  }
};
