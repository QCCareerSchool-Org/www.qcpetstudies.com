import type { Property } from 'csstype';
import Image from 'next/image';
import type { StaticImageData } from 'next/image';
import type { FC } from 'react';

type Props = {
  src: StaticImageData;
  alt: string;
  size?: number;
  objectPosition?: Property.ObjectPosition;
};

export const ImageCircle: FC<Props> = ({ src, alt, size = 60, objectPosition = '50%' }) => (
  <div style={{ position: 'relative', overflow: 'hidden', width: size, height: size, borderRadius: size / 2 }}>
    <Image src={src} placeholder="blur" fill alt={alt} style={{ objectFit: 'cover', objectPosition }} />
  </div>
);
