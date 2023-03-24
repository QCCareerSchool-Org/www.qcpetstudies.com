import { FC } from 'react';

import CaseyBechard from '../../images/testimonials-sm/casey-bechard.jpg';
import { TestimonialSm } from './TestimonialSm';

type Props = {
  size?: number;
};

export const TestimonialSmCaseyBechard: FC<Props> = ({ size }) => (
  <TestimonialSm
    size={size}
    quotation="The tutors were very well-spoken and gave great instructions."
    name="Casey Bechard"
    certification="IDGP"
    imageSrc={CaseyBechard}
  />
);
