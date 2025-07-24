import type { StaticImageData } from 'next/image';
import Image from 'next/image';
import type { FC } from 'react';

type Props = {
  src: StaticImageData;
  alt: string;
  imagePositionX?: number;
  imagePositionY?: number;
  size?: number;
  itemProp?: boolean;
};

export const ImageCircle: FC<Props> = ({ src, alt, imagePositionX, imagePositionY, size = 64, itemProp }) => {
  const width = Math.floor(size);
  const radius = Math.ceil(width / 2);
  return (
    <div style={{ position: 'relative', width, height: width, borderRadius: radius }}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={`${width * 2}px`}
        style={{ borderRadius: radius, objectFit: 'cover', objectPosition: `${typeof imagePositionX === 'undefined' ? '50%' : `${imagePositionX}%`} ${typeof imagePositionY === 'undefined' ? '50%' : `${imagePositionY}%`}` }}
        itemProp={itemProp ? 'image' : undefined}
      />
    </div>
  );
};
