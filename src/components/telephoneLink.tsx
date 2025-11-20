import type { CSSProperties, FC } from 'react';

import { getTelephoneNumber } from '@/lib/telephone';

interface Props {
  countryCode: string;
  className?: string;
  style?: CSSProperties;
  linkText?: string;
}

export const TelephoneLink: FC<Props> = ({ countryCode, className, style, linkText }) => {
  const telephoneNumber = getTelephoneNumber(countryCode);
  return (
    <a href={`tel:${telephoneNumber}`} className={className} style={style}>{linkText ?? telephoneNumber}</a>
  );
};
