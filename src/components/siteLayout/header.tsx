import type { FC } from 'react';

import styles from './header.module.scss';
import { PromoBanner } from './promoBanner';
import { SecondaryNav } from './secondaryNav';
import { MainNav } from '@/components/siteLayout/mainNav';
import { gbpCountry } from '@/domain/currency';
import { october07 } from '@/periods';

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
  if (october07.contains(date)) {
    return (
      <PromoBanner date={date} promotionPeriod={october07.toDTO()}>
        <span className="d-none d-lg-inline">Ends Soon:</span> Start Today and Save {gbpCountry(countryCode) ? '£300' : '$300'} on Tuition!
      </PromoBanner>
    );
  }
};
