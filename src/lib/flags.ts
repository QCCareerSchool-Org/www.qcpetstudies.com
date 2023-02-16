import { StaticImageData } from 'next/image';

import FlagAU from '../images/flags/au.svg';
import FlagCA from '../images/flags/ca.svg';
// import FlagGB from '../images/flags/gb.svg';
// import FlagNZ from '../images/flags/nz.svg';
import FlagUS from '../images/flags/us.svg';

export const getFlagImageData = (countryCode?: string): { src: StaticImageData; alt: string } | null => {
  switch (countryCode) {
    case 'CA':
      return { src: FlagCA, alt: 'CA' };
    // case 'GB':
    // case 'IM':
    // case 'GG':
    // case 'JE':
    //   return { src: FlagGB, alt: 'GB' };
    case 'AU':
    case 'CC':
    case 'CX':
      return { src: FlagAU, alt: 'AU' };
    // case 'NZ':
    // case 'PN':
    //   return { src: FlagNZ, alt: 'NZ' };
    case 'US':
      return { src: FlagUS, alt: 'US' };
    default:
      return null;
  }
};
