import type { FC } from 'react';
import { memo, Suspense, useMemo } from 'react';

import { testimonials } from './data';
import styles from './index.module.css';
import { TestimonialSchemaData } from './jsonLD';
import { Star } from './star';
import { Title } from './title';
import { ImageCircle } from '@/components/ImageCircle';
import type { CourseCode } from '@/domain/courseCode';

type Props = {
  id: string;
  courseCodes?: string[];
};

export const courseSort = (a: CourseCode, b: CourseCode): number => {
  if (a === b) {
    return 0;
  }
  if (a === 'dg') {
    return -1;
  }
  if (b === 'dg') {
    return 1;
  }
  return a.localeCompare(b);
};

export const Testimonial: FC<Props> = memo(({ id, courseCodes }) => {
  const testimonial = useMemo(() => {
    const found = testimonials[id];
    if (!found) {
      return;
    }
    return {
      ...found,
      courses: found.courses.sort((a, b) => {
        if (courseCodes?.includes(a) && courseCodes?.includes(b)) {
          return courseSort(a, b);
        }
        if (courseCodes?.includes(a)) {
          return -1;
        }
        if (courseCodes?.includes(b)) {
          return 1;
        }
        return courseSort(a, b);
      }),
    };
  }, [ id, courseCodes ]);

  if (!testimonial) {
    return;
  }

  const testimonialCourseCode = testimonial.courses.length > 0 ? testimonial.courses[0] : undefined;

  return (
    <blockquote className={styles.testimonial}>
      <Suspense><TestimonialSchemaData courseCode={testimonialCourseCode} name={testimonial.name} rating={testimonial.stars} reviewText={testimonial.short?.[0] ?? ''} /></Suspense>
      <div className={styles.stars}>{Array(5).fill(null).map((_, i) => <Star key={i} filled={i < testimonial.stars} />)}</div>
      <div>
        {testimonial.short.map((q, i, a) => {
          if (i < a.length - 1) {
            return <p key={i} className={styles.quotation}>&ldquo;{q}</p>;
          }
          return <p key={i} className={styles.quotation}>&ldquo;{q}&rdquo;</p>;
        })}
      </div>
      <footer className={styles.footer}>
        <div className={styles.imageWrapper}>
          <ImageCircle itemProp src={testimonial.image} alt={testimonial.name} imagePositionX={testimonial.imagePositionX} imagePositionY={testimonial.imagePositionY} />
        </div>
        <cite>
          <span className={styles.attribution}>{testimonial.name}</span>{testimonial.courses.length > 0 && <><br /><Title testimonial={testimonial} /></>}
        </cite>
      </footer>
    </blockquote>
  );
});

Testimonial.displayName = 'Testimonial';
