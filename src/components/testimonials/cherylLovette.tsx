import type { FC } from 'react';

import CherylLovette from './images/cheryl-lovette.jpg';
import { Testimonial } from './testimonial';

export const TestimonialCherylLovette: FC = () => (
  <Testimonial name="Cheryl Lovette" certification="IDTP" imageSrc={CherylLovette} imageWidth={256} imageHeight={188}>
    <p> I really enjoyed both courses and how easy the format was. Having everything in one place with no downloading needed, was very easy and convenient. I also appreciated the added touch of the interactive parts of the reading.</p>
  </Testimonial>
);
