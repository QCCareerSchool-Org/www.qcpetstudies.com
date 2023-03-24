import Image, { StaticImageData } from 'next/image';
import { FC, PropsWithChildren } from 'react';

type Props = {
  name: string;
  certification?: string;
  imageSrc: StaticImageData;
  imageWidth: number;
  imageHeight: number;
};

export const Testimonial: FC<PropsWithChildren<Props>> = ({ name, certification, imageSrc, imageWidth, imageHeight, children }) => (
  <>
    <div className="mb-3">
      <Image src={imageSrc} width={imageWidth} height={imageHeight} alt={name} />
    </div>
    {children}
    <p className="lead"><strong>{name}{certification && <>, <span className="gold">{certification}&trade;</span></>}</strong></p>
  </>
);
