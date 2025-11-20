import type { FC } from 'react';

import type { CTAType } from './cta';

interface Props {
  type?: CTAType;
}

export const CTAHeading: FC<Props> = ({ type }) => {
  switch (type) {
    case 'grooming tech':
      return <>Ready to Launch Your Career as a <strong>Grooming Technician?</strong></>;
    case 'grooming':
      return <>Ready to Launch Your<br /><strong>Grooming Career?</strong></>;
    case 'training':
      return <>Ready to Launch Your<br /><strong>Training Career?</strong></>;
    case 'care':
      return <>Ready to Launch Your<br /><strong>Dog Care Career?</strong></>;
    default:
      return <>Ready to Launch Your <strong>Career?</strong></>;
  }
};
