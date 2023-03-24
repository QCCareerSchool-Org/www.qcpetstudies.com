import { FC } from 'react';

import KaylaTorraville from '../../images/testimonials-sm/kayla-torraville.jpg';
import { TestimonialSm } from './TestimonialSm';

type Props = {
  size?: number;
};

export const TestimonialSmKaylaTorraville: FC<Props> = ({ size }) => (
  <TestimonialSm
    size={size}
    quotation="I would recommend it to everyone."
    name="Kayla Torraville"
    certification="IDGP"
    imageSrc={KaylaTorraville}
  />
);
