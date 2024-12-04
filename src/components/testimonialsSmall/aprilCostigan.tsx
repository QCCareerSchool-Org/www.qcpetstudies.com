import type { FC } from 'react';

import { TestimonialSm } from './testimonialSm';
import AprilCostigan from '@/images/testimonials-sm/april-costigan.jpg';

type Props = {
  size?: number;
  starSize?: number;
};

export const TestimonialSmAprilCostigan: FC<Props> = ({ size, starSize }) => (
  <TestimonialSm
    size={size}
    starSize={starSize}
    quotation="I've constructed an entire professional grooming studio in my basement."
    name="April Costigan"
    certification="IDGP"
    imageSrc={AprilCostigan}
  />
);
