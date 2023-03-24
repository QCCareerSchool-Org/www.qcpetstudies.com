import { FC } from 'react';

import AprilCostigan from '../../images/testimonials/april-costigan.jpg';
import { Testimonial } from './Testimonial';

export const TestimonialAprilCostigan: FC = () => (
  <Testimonial name="April Costigan" certification="IDGP" imageSrc={AprilCostigan} imageWidth={256} imageHeight={144}>
    <p>The Dog Grooming and First Aid courses are fantastic. I learned so much from Lisa and Paddy. I've officially started my own business, Sparkling Dog Grooming. <strong>I've constructed an entire professional grooming studio in my basement and have started building a very nice client list.</strong></p>
  </Testimonial>
);
