import type { FC } from 'react';

import CaseyBechard from './images/casey-bechard.jpg';
import { TestimonialSmall } from './testimonialSmall';

interface Props {
  size?: number;
  starSize?: number;
}

export const TestimonialSmCaseyBechard: FC<Props> = ({ size, starSize }) => (
  <TestimonialSmall
    size={size}
    starSize={starSize}
    quotation="The tutors were very well-spoken and gave great instructions."
    name="Casey Bechard"
    certification="IDGP"
    imageSrc={CaseyBechard}
  />
);
