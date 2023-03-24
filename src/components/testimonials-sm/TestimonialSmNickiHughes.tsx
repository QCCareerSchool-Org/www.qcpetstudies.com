import { FC } from 'react';

import NickiHughes from '../../images/testimonials-sm/nicki-hughes.jpg';
import { TestimonialSm } from './TestimonialSm';

type Props = {
  size?: number;
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
