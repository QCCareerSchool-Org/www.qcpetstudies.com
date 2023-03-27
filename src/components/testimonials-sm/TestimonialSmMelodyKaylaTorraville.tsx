import { FC } from 'react';

import KaylaTorraville from '../../images/testimonials-sm/kayla-torraville.jpg';
import { TestimonialSm } from './TestimonialSm';

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
