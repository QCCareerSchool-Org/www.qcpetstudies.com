import type { FC, PropsWithChildren } from 'react';
import { useMemo } from 'react';

import { TestimonialCarouselClient } from './client';
import styles from './index.module.scss';
import type { TestimonialId } from '../testimonial/data';
import { testimonials } from '../testimonial/data';
import { TestimonialSmall } from '../testimonialsSmall/testimonialSmall';
import type { CourseCode } from '@/domain/courseCode';

interface Props {
  testimonialIds?: TestimonialId[];
  coursePriority?: CourseCode;
  exclusions?: TestimonialId[];
}

export const TestimonialCarousel: FC<PropsWithChildren<Props>> = ({ testimonialIds, coursePriority, exclusions, children }) => {
  const usedTestimonials = useMemo(() => {
    const ids = testimonialIds ?? Object.keys(testimonials);
    const filtered = ids.filter(t => !exclusions?.includes(t));

    if (!coursePriority) {
      return filtered;
    }

    return filtered.sort((a: TestimonialId, b: TestimonialId) => {
      const testimonialA = testimonials[a];
      const testimonialB = testimonials[b];

      const priorityA = testimonialA ? testimonialA.courses.includes(coursePriority) : false;
      const priorityB = testimonialB ? testimonialB.courses.includes(coursePriority) : false;

      if (priorityA === priorityB) {
        return 0;
      }
      if (priorityA) {
        return -1;
      }
      return 1;
    });
  }, [ testimonialIds, exclusions, coursePriority ]);

  return (
    <div style={{ minHeight: 360 }}>
      <TestimonialCarouselClient>
        {usedTestimonials.map(t => {
          const testimonial = testimonials[t];

          if (!testimonial) {
            return null;
          }

          return (
            <div key={t} className={`container ${styles.slide}`}>
              <TestimonialSmall
                quotation={testimonial.short.join(' ')}
                name={testimonial.name}
                imageSrc={testimonial.image}
              />
            </div>
          );
        })}
        {children}
      </TestimonialCarouselClient>
    </div>
  );
};
