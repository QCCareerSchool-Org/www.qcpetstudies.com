import { FC } from 'react';

import HailieSavage from '../../images/testimonials-sm/hailie-savage.jpg';
import { TestimonialSm } from './TestimonialSm';

type Props = {
  size?: number;
  starSize?: number;
};

export const TestimonialSmHailieSavage: FC<Props> = ({ size, starSize }) => (
  <TestimonialSm
    size={size}
    starSize={starSize}
    quotation="The critique was fantastic. I highly recommend the program!"
    name="Hailie Savage"
    certification="IDGP"
    imageSrc={HailieSavage}
  />
);
