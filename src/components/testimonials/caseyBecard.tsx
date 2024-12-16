import type { FC } from 'react';

import CaseyBechard from './images/casey-bechard.jpg';
import { Testimonial } from './testimonial';

export const TestimonialCaseyBecard: FC = () => (
  <Testimonial name="Casey Becard" certification="IDGP" imageSrc={CaseyBechard} imageWidth={256} imageHeight={144}>
    <p><strong>The tutors were very well-spoken and gave great instructions.</strong> There was never a time when I was confused. The hands-on videos had lots of visual content and showed you just about everything you needed to know for your assignments.</p>
  </Testimonial>
);
