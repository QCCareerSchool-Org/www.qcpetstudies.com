import type { FC } from 'react';

import KaylaTorraville from './images/kayla-torraville.jpg';
import { Testimonial } from './testimonial';

export const TestimonialKaylaTorraville: FC = () => (
  <Testimonial name="Kayla Torraville" certification="IDGP" imageSrc={KaylaTorraville} imageWidth={256} imageHeight={144}>
    <p>QC Pet Studies allowed me to pursue my dream while at home. I learned a lot of new skills and techniques. My tutor was great and very knowledgeable. The course material was very detailed as well and easy to learn from despite it being all virtual. <strong>I would recommend it to everyone.</strong></p>
  </Testimonial>
);
