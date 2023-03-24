import { FC } from 'react';

import MelodyMason from '../../images/testimonials-sm/melody-mason.jpg';
import { TestimonialSm } from './TestimonialSm';

type Props = {
  size?: number;
};

export const TestimonialSmMelodyMason: FC<Props> = ({ size }) => (
  <TestimonialSm
    size={size}
    quotation="I feel very confident in my skills after finishing the course."
    name="Melody Mason"
    certification="IDGP"
    imageSrc={MelodyMason}
  />
);
