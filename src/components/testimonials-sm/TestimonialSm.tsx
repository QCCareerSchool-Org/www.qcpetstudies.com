import type { Property } from 'csstype';
import type { StaticImageData } from 'next/image';
import Image from 'next/image';
import type { FC } from 'react';

import FiveStarsPrimary from '../../images/five-stars-primary.svg';
import FiveStarsSecondary from '../../images/five-stars-secondary.svg';
import { ImageCircle } from '../ImageCircle';

type Props = {
  size?: number;
  quotation: string;
  name: string;
  certification?: string;
  imageSrc: StaticImageData;
  objectPosition?: Property.ObjectPosition;
  variant?: 'primary' | 'secondary';
};

export const TestimonialSm: FC<Props> = ({ size = 216, quotation, name, certification, imageSrc, objectPosition, variant = 'primary' }) => (
  <>
    <div className="mb-3 d-flex justify-content-center">
      <ImageCircle src={imageSrc} alt={name} size={size} objectPosition={objectPosition} />
    </div>
    <div className="mb-3"><Image src={variant === 'secondary' ? FiveStarsSecondary : FiveStarsPrimary} width="268" height="48" alt="5 out of 5" /></div>
    <p className="lead strong"><strong>&ldquo;{quotation}&rdquo;</strong></p>
    <p>{name}{certification && <>, <span className="gold">{certification}&trade;</span></>}</p>
  </>
);
