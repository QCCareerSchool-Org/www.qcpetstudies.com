import type { FC } from 'react';

import AUIcon from './images/au.svg';
import CAIcon from './images/ca.svg';
import USIcon from './images/us.svg';
import Image from 'next/image';

interface Props {
  countryCode: string;
  height: number;
}

export const Flag: FC<Props> = ({ countryCode, height }) => {
  switch (countryCode) {
    case 'CA':
      return <Image src={CAIcon} height={height} alt="Canada" />;
    case 'US':
      return <Image src={USIcon} height={height} alt="United States" />;
    case 'AU':
      return <Image src={AUIcon} height={height} alt="Australia" />;
  }
};
