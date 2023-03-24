import { FC } from 'react';

import MelodyMason from '../../images/testimonials/melody-mason.jpg';
import { Testimonial } from './Testimonial';

export const TestimonialMelodyMason: FC = () => (
  <Testimonial name="Melody Mason" certification="IDGP" imageSrc={MelodyMason} imageWidth={256} imageHeight={144}>
    <p>The Dog Grooming course was extremely helpful. The video tutorials were very well done, and they made learning to groom a dog very clear. The tutor&apos;s notes were also very helpful. <strong>I feel very confident in my skills after finishing the course and starting my career.</strong></p>
  </Testimonial>
);
