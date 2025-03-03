import type { FC } from 'react';

import LucaCoppola from './images/luca-coppola.png';
import { Testimonial } from './testimonial';

export const TestimonialLucaCoppola: FC = () => (
  <Testimonial name="Luca Coppola" certification="IDTP" imageSrc={LucaCoppola} imageWidth={256} imageHeight={144}>
    <p><strong>It was a great experience&mdash;was able to learn many new things from my tutor</strong>. Shannon was a great tutor and very insightful and honest with her feedback. It was great to learn more about learning theory, as well as go through the curriculum with my tutor.</p>
  </Testimonial>
);
