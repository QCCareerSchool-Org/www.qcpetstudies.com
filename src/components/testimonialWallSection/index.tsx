import type { FC } from 'react';

import { Testimonial } from '@/components/testimonial';
import type { CourseCode } from '@/domain/courseCode';

type HeaderSize = 1 | 2 | 3 | 4 | 5 | 6;

interface Props {
  h?: HeaderSize;
  courseCodes?: CourseCode[];
  testimonialIds: string[];
  className?: string;
  hideHeading?: boolean;
}

export const TestimonialWallSection: FC<Props> = ({ h, courseCodes, testimonialIds, className, hideHeading }) => (
  <section className={className}>
    <div className="container">
      {!hideHeading && (
        <div className="row justify-content-center">
          <div className="col-12 col-lg-9 col-xl-8 col-xxl-7 text-lg-center">
            <h2 className={`mb-4 ${headerClass(h)}`}>Hear From Students and Grads</h2>
            <p className="lead mb-5">QC Pet Studies is proud to have amazing students and grads pursuing their dream careers in the pet industry. Here are some of their success stories!</p>
          </div>
        </div>
      )}
      <div className="row justify-content-center g-5">
        {testimonialIds.map(id => (
          <div key={id} className="col-12 col-sm-8 col-lg-4">
            <Testimonial id={id} courseCodes={courseCodes} />
          </div>
        ))}
      </div>
    </div>
  </section>
);

const headerClass = (h?: HeaderSize): string => (typeof h === 'undefined' ? '' : `h${h}`);
