import type { StaticImageData } from 'next/image';
import type { FC } from 'react';

type Props = {
  src: StaticImageData;
  alt: string;
};

const Image: FC<Props> = ({ src, alt }) => {
  // eslint-disable-next-line @next/next/no-img-element, @typescript-eslint/no-unsafe-assignment
  return <img src={src.src} alt={alt} />;
};

export default Image;
