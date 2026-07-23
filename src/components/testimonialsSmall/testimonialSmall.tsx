import type { StaticImageData } from 'next/image';
import Image from 'next/image';
import type { FC } from 'react';

import { ImageCircle } from '../ImageCircle';
import styles from './testimonialSmall.module.scss';
import StarFill from '@/images/star-fill.svg';

interface Props {
  size?: number;
  starSize?: number;
  quotation: string;
  name: string;
  certification?: string;
  imageSrc: StaticImageData;
  imagePositionX?: number;
  imagePositionY?: number;
}

export const TestimonialSmall: FC<Props> = ({ size = 192, starSize = 180, quotation, name, certification, imageSrc, imagePositionX, imagePositionY }) => (
  <div className={styles.layout}>
    <div className={styles.imageColumn}>
      <ImageCircle src={imageSrc} alt={name} size={size} imagePositionX={imagePositionX} imagePositionY={imagePositionY} />
    </div>
    <div className={styles.contentColumn}>
      <div className={styles.stars}>
        <div className={styles.starRow} aria-label="5 out of 5">
          {Array.from({ length: 5 }).map((_, index) => (
            <Image
              key={index}
              src={StarFill}
              width={80}
              height={80}
              alt=""
              aria-hidden="true"
              style={{ width: starSize / 8.333, height: 'auto' }}
            />
          ))}
        </div>
      </div>
      <p className="mb-3">{quotation}</p>
      <p className="mb-0">{name}{certification && <>, <span className="gold">{certification}&trade;</span></>}</p>
    </div>
  </div>
);
