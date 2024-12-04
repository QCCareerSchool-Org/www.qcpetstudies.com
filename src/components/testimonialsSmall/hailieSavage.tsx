import type { FC } from 'react';

import HailieSavage from './images/hailie-savage.jpg';
import { TestimonialSmall } from './testimonialSmall';

type Props = {
  size?: number;
  starSize?: number;
};

export const TestimonialSmHailieSavage: FC<Props> = ({ size, starSize }) => (
  <TestimonialSmall
    size={size}
    starSize={starSize}
    quotation="The critique was fantastic. I highly recommend the program!"
    name="Hailie Savage"
    certification="IDGP"
    imageSrc={HailieSavage}
  />
);
