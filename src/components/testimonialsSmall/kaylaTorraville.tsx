import type { FC } from 'react';

import KaylaTorraville from './images/kayla-torraville.jpg';
import { TestimonialSmall } from './testimonialSmall';

type Props = {
  size?: number;
  starSize?: number;
};

export const TestimonialSmKaylaTorraville: FC<Props> = ({ size, starSize }) => (
  <TestimonialSmall
    size={size}
    starSize={starSize}
    quotation="I would recommend it to everyone."
    name="Kayla Torraville"
    certification="IDGP"
    imageSrc={KaylaTorraville}
  />
);
