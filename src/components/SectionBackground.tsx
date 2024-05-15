import Image, { StaticImageData } from 'next/image';
import type { CSSProperties, FC } from 'react';

type Props = {
  src: StaticImageData;
  objectPosition?: CSSProperties['objectPosition'];
  priority?: boolean;
};

export const SectionBackground: FC<Props> = ({ src, objectPosition, priority }) => (
  <Image
    src={src}
    placeholder="blur"
    alt=""
    priority={priority}
    fill
    sizes="100vw"
    style={{ objectFit: 'cover', objectPosition: objectPosition ?? 'center' }}
  />
);
