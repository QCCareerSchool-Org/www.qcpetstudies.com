import type { CSSProperties, FC, ReactNode } from 'react';

import { getTelephoneNumber } from '@/lib/telephone';

interface Props {
  countryCode: string;
  className?: string;
  style?: CSSProperties;
  linkText?: ReactNode;
}

export const TelephoneLink: FC<Props> = ({ countryCode, className, style, linkText }) => {
  const telephoneNumber = getTelephoneNumber(countryCode);
  return (
    <a href={`tel:${telephoneNumber}`} className={className} style={style}>{telephoneNumber}{linkText}</a>
  );
};
