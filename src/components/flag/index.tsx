import type { FC } from 'react';

import AUIcon from './images/au.svg';
import CAIcon from './images/ca.svg';
import USIcon from './images/us.svg';

type Props = {
  countryCode: string;
  height: number;
};

export const Flag: FC<Props> = ({ countryCode, height }) => {
  switch (countryCode) {
    case 'CA':
      return <CAIcon height={height} alt="Canada" />;
    case 'US':
      return <USIcon height={height} alt="United States" />;
    case 'AU':
      return <AUIcon height={height} alt="Australia" />;
  }
};
