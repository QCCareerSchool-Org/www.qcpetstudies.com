import { FC } from 'react';

import { Testimonial } from './Testimonial';
import NickiHughes from '@/images/testimonials/nicki-hughes.jpg';

export const TestimonialNickiHughes: FC = () => (
  <Testimonial name="Nicki Hughes" certification="IDGP" imageSrc={NickiHughes} imageWidth={256} imageHeight={144}>
    <p>I was concerned about how much one could actually learn about a hands-on profession online; however, as I got further in and watched the videos, <strong>I saw how in-depth they are and how they really take the time to show you the skills</strong> you need to know to complete the course.</p>
  </Testimonial>
);
