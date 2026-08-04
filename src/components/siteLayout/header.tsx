import type { FC } from 'react';

import styles from './header.module.scss';
import { PromoBanner } from './promoBanner';
import { SecondaryNav } from './secondaryNav';
import { MainNav } from '@/components/siteLayout/mainNav';
import { gbpCountry } from '@/domain/currency';
import { august06, july22 } from '@/periods';

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

  if (august06.contains(date)) {
    return (
      <PromoBanner date={date} promotionPeriod={august06.toDTO()}>
        <span className="d-none d-lg-inline">Flash offer:{' '}</span>Enroll Today & Get a 2nd Course Free
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
