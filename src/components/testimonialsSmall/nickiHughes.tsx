import type { FC } from 'react';

import NickiHughes from './images/nicki-hughes.jpg';
import { TestimonialSmall } from './testimonialSmall';

interface Props {
  size?: number;
  starSize?: number;
}

export const TestimonialSmNickiHughes: FC<Props> = ({ size }) => (
  <TestimonialSmall
    size={size}
    quotation="They really take the time to show you the skills you need to know to complete the course."
    name="Nicki Hughes"
    certification="IDGP"
    imageSrc={NickiHughes}
  />
);
