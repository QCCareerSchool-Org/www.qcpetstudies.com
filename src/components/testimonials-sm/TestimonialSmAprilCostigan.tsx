import { FC } from 'react';

import AprilCostigan from '../../images/testimonials-sm/april-costigan.jpg';
import { TestimonialSm } from './TestimonialSm';

type Props = {
  size?: number;
};

export const TestimonialSmAprilCostigan: FC<Props> = ({ size }) => (
  <TestimonialSm
    size={size}
    quotation="I've constructed an entire professional grooming studio in my basement."
    name="April Costigan"
    certification="IDGP"
    imageSrc={AprilCostigan}
  />
);
