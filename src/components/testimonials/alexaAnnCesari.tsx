import type { FC } from 'react';

import AlexaAnnCesari from './images/alexa-ann-cesari.jpg';
import { Testimonial } from './testimonial';

export const TestimonialAlexaAnnCesari: FC = () => (
  <Testimonial name="Alexa-Ann Cesari" certification="IDTP" imageSrc={AlexaAnnCesari} imageWidth={256} imageHeight={188}>
    <p>Since enrolling in the course, I have successfully acquired several new clients and have acquired some amazing skills. Thank you for this opportunity!</p>
  </Testimonial>
);
