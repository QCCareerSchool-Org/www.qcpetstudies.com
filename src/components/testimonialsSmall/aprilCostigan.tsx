import type { FC } from 'react';

import AprilCostigan from './images/april-costigan.jpg';
import { TestimonialSmall } from './testimonialSmall';

type Props = {
  size?: number;
  starSize?: number;
};

export const TestimonialSmAprilCostigan: FC<Props> = ({ size, starSize }) => (
  <TestimonialSmall
    size={size}
    starSize={starSize}
    quotation="I've constructed an entire professional grooming studio in my basement."
    name="April Costigan"
    certification="IDGP"
    imageSrc={AprilCostigan}
  />
);
