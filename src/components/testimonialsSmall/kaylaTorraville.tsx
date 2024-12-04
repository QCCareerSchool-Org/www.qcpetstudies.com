import type { FC } from 'react';

import { TestimonialSm } from './testimonialSm';
import KaylaTorraville from '@/images/testimonials-sm/kayla-torraville.jpg';

type Props = {
  size?: number;
  starSize?: number;
};

export const TestimonialSmKaylaTorraville: FC<Props> = ({ size, starSize }) => (
  <TestimonialSm
    size={size}
    starSize={starSize}
    quotation="I would recommend it to everyone."
    name="Kayla Torraville"
    certification="IDGP"
    imageSrc={KaylaTorraville}
  />
);
