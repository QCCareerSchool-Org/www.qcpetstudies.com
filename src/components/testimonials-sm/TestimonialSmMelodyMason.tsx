import { FC } from 'react';

import { TestimonialSm } from './TestimonialSm';
import MelodyMason from '@/images/testimonials-sm/melody-mason.jpg';

type Props = {
  size?: number;
  starSize?: number;
};

export const TestimonialSmMelodyMason: FC<Props> = ({ size, starSize }) => (
  <TestimonialSm
    size={size}
    starSize={starSize}
    quotation="I feel very confident in my skills after finishing the course."
    name="Melody Mason"
    certification="IDGP"
    imageSrc={MelodyMason}
  />
);
