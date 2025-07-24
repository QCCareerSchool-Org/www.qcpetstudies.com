import type { FC } from 'react';
import { memo, useMemo } from 'react';

import { testimonials } from './data';
import styles from './index.module.css';
import { Star } from './star';
import { Title } from './title';
import { ImageCircle } from '@/components/ImageCircle';
import { CourseMicrodata } from '@/components/microdata/course';
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

  console.log(testimonial);

  if (!testimonial) {
    return;
  }

  return (
    <blockquote className={styles.testimonial} itemScope itemType="https://schema.org/Review">
      {testimonial.courses.length > 0
        ? <CourseMicrodata itemProp="itemReviewed" courseCode={testimonial.courses[0]} />
        : (
          <span itemProp="itemReviewed" itemScope itemType="https://schema.org/EducationalOrganization">
            <meta itemProp="@id" content="https://www.qceventplanning.com/#school" />
            <meta itemProp="url" content="https://www.qceventplanning.com" />
            <meta itemProp="name" content="QC Event School" />
          </span>
        )}
      <span itemProp="reviewRating" itemScope itemType="https://schema.org/Rating">
        <meta itemProp="ratingValue" content={testimonial.stars.toString()} />
        <meta itemProp="worstRating" content="0" />
        <meta itemProp="bestRating" content="5" />
      </span>
      <div className={styles.stars}>{Array(5).fill(null).map((_, i) => <Star key={i} filled={i < testimonial.stars} />)}</div>
      <div>
        {testimonial.short.map((q, i, a) => {
          if (i < a.length - 1) {
            return <p key={i} className={styles.quotation}>&ldquo;{q}</p>;
          }
          return <p key={i} className={styles.quotation}>&ldquo;{q}&rdquo;</p>;
        })}
      </div>
      <footer className={styles.footer} itemProp="author" itemScope itemType="https://schema.org/Person">
        <div className={styles.imageWrapper}>
          <ImageCircle itemProp src={testimonial.image} alt={testimonial.name} imagePositionX={testimonial.imagePositionX} imagePositionY={testimonial.imagePositionY} />
        </div>
        <cite>
          <span className={styles.attribution} itemProp="name">{testimonial.name}</span>{testimonial.courses.length > 0 && <><br /><Title testimonial={testimonial} /></>}
        </cite>
      </footer>
    </blockquote>
  );
});

Testimonial.displayName = 'Testimonial';
