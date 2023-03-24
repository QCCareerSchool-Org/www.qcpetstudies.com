import type { FC, PropsWithChildren } from 'react';

import { TestimonialAprilCostigan } from '../../../components/testimonials/TestimonialAprilCostigan';
import { TestimonialCaseyBecard } from '../../../components/testimonials/TestimonialCaseyBecard';
import { TestimonialHailieSavage } from '../../../components/testimonials/TestimonialHailieSavage';
import { TestimonialKaylaTorraville } from '../../../components/testimonials/TestimonialKaylaTorraville';
import { TestimonialMelodyMason } from '../../../components/testimonials/TestimonialMelodyMason';
import { TestimonialNickiHughes } from '../../../components/testimonials/TestimonialNickiHughes';

type Props = {
  className?: string;
};

export const TestimonialsSection: FC<Props> = ({ className }) => (
  <section className={className}>
    <div className="container text-center">
      <h2 className="text-center mb-4">QC Success Stories</h2>
      <div className="row justify-content-center">
        <Col className="mb-4">
          <TestimonialKaylaTorraville />
        </Col>
        <Col className="mb-4">
          <TestimonialAprilCostigan />
        </Col>
        <Col className="mb-4">
          <TestimonialHailieSavage />
        </Col>
        <Col className="mb-4 mb-xl-0">
          <TestimonialMelodyMason />
        </Col>
        <Col className="mb-4 mb-lg-0 mb-xl-0">
          <TestimonialCaseyBecard />
        </Col>
        <Col className="mb-4 mb-lg-0 mb-xl-0">
          <TestimonialNickiHughes />
        </Col>
      </div>
    </div>
  </section>
);

const Col: FC<PropsWithChildren<{ className?: string }>> = ({ className, children }) => (
  <div className={`col-12 col-md-9 col-lg-6 col-xl-4 ${className ?? ''}`}>{children}</div>
);
