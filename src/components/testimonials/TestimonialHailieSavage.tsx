import { FC } from 'react';

import HailieSavage from '../../images/testimonials/hailie-savage.jpg';
import { Testimonial } from './Testimonial';

export const TestimonialHailieSavage: FC = () => (
  <Testimonial name="Hailie Savage" certification="IDGP" imageSrc={HailieSavage} imageWidth={256} imageHeight={144}>
    <p>The tutors were extremely helpful and the course materials were very well put together and extremely helpful! The critique was fantastic. <strong>I highly recommend the program!</strong></p>
  </Testimonial>
);
