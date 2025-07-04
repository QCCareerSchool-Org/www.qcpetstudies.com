import type { FC } from 'react';

import LorisTiede from './images/loris-tiede.jpg';
import { Testimonial } from './testimonial';

export const TestimonialLorisTiede: FC = () => (
  <Testimonial name="Loris Tiede" certification="IDTP" imageSrc={LorisTiede} imageWidth={256} imageHeight={188}>
    <p>My experience with QC Pet Studies was awesome! The dog trainer course was very well structured and organized. What was expected of me in my assignments were clear and they were graded very promptly. I would definitely recommend QC Career School!</p>
  </Testimonial>
);
