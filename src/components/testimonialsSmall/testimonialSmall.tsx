import type { StaticImageData } from 'next/image';
import type { CSSProperties, FC } from 'react';

import { ImageCircle } from '../ImageCircle';
import FiveStarsPrimary from '@/images/five-stars-primary.svg';
import FiveStarsSecondary from '@/images/five-stars-secondary.svg';

type Props = {
  size?: number;
  starSize?: number;
  quotation: string;
  name: string;
  certification?: string;
  imageSrc: StaticImageData;
  objectPosition?: CSSProperties['objectPosition'];
  variant?: 'primary' | 'secondary';
};

export const TestimonialSmall: FC<Props> = ({ size = 192, starSize, quotation, name, certification, imageSrc, objectPosition, variant = 'primary' }) => (
  <>
    <div className="mb-3 d-flex justify-content-center">
      <ImageCircle src={imageSrc} alt={name} size={size} objectPosition={objectPosition} />
    </div>
    <div className="mb-2">
      {variant === 'secondary'
        ? <FiveStarsSecondary width="183" height="31" alt="5 out of 5" style={{ maxWidth: '100%', width: starSize ?? size * 1.5, height: 'auto' }} />
        : <FiveStarsPrimary width="183" height="31" alt="5 out of 5" style={{ maxWidth: '100%', width: starSize ?? size * 1.5, height: 'auto' }} />
      }
    </div>
    <p className="lead strong mb-2"><strong>&ldquo;{quotation}&rdquo;</strong></p>
    <p className="mb-0">{name}{certification && <>, <span className="gold">{certification}&trade;</span></>}</p>
  </>
);
