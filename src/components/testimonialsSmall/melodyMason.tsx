import type { FC } from 'react';

import MelodyMason from './images/melody-mason.jpg';
import { TestimonialSmall } from './testimonialSmall';

interface Props {
  size?: number;
  starSize?: number;
}

export const TestimonialSmMelodyMason: FC<Props> = ({ size, starSize }) => (
  <TestimonialSmall
    size={size}
    starSize={starSize}
    quotation="I feel very confident in my skills after finishing the course."
    name="Melody Mason"
    certification="IDGP"
    imageSrc={MelodyMason}
  />
);
