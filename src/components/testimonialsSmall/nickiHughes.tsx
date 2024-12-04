import type { FC } from 'react';

import { TestimonialSm } from './testimonialSm';
import NickiHughes from '@/images/testimonials-sm/nicki-hughes.jpg';

type Props = {
  size?: number;
  starSize?: number;
};

export const TestimonialSmNickiHughes: FC<Props> = ({ size }) => (
  <TestimonialSm
    size={size}
    quotation="They really take the time to show you the skills you need to know to complete the course."
    name="Nicki Hughes"
    certification="IDGP"
    imageSrc={NickiHughes}
  />
);
