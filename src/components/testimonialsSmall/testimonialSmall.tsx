import type { StaticImageData } from 'next/image';
import Image from 'next/image';
import type { FC } from 'react';

import { ImageCircle } from '../ImageCircle';
import FiveStarsPrimary from '@/images/five-stars-primary.svg';
import FiveStarsSecondary from '@/images/five-stars-secondary.svg';

interface Props {
  size?: number;
  starSize?: number;
  quotation: string;
  name: string;
  certification?: string;
  imageSrc: StaticImageData;
  imagePositionX?: number;
  imagePositionY?: number;
  variant?: 'primary' | 'secondary';
}

export const TestimonialSmall: FC<Props> = ({ size = 192, starSize = 180, quotation, name, certification, imageSrc, imagePositionX, imagePositionY, variant = 'primary' }) => (
  <>
    <div className="mb-3 d-flex justify-content-center">
      <ImageCircle src={imageSrc} alt={name} size={size} imagePositionX={imagePositionX} imagePositionY={imagePositionY} />
    </div>
    <div className="mb-2">
      {variant === 'secondary'
        ? <Image src={FiveStarsSecondary} width="183" height="31" alt="5 out of 5" style={{ maxWidth: '100%', width: starSize, height: 'auto' }} />
        : <Image src={FiveStarsPrimary} width="183" height="31" alt="5 out of 5" style={{ maxWidth: '100%', width: starSize, height: 'auto' }} />
      }
    </div>
    <p className="lead strong mb-2"><strong>&ldquo;{quotation}&rdquo;</strong></p>
    <p className="mb-0">{name}{certification && <>, <span className="gold">{certification}&trade;</span></>}</p>
  </>
);
