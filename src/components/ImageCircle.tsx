import type { Property } from 'csstype';
import Image from 'next/image';
import type { StaticImageData } from 'next/image';
import type { FC } from 'react';

type Props = {
  src: StaticImageData;
  size?: number;
  objectPosition?: Property.ObjectPosition;
};

export const ImageCircle: FC<Props> = ({ src, size = 60, objectPosition = '50%' }) => (
  <div style={{ position: 'relative', overflow: 'hidden', width: size, height: size, borderRadius: size / 2 }}>
    <Image src={src} placeholder="blur" fill alt="April Costigan, IDGP" style={{ objectFit: 'cover', objectPosition }} />
  </div>
);
