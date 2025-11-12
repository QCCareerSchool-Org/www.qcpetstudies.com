import type { FC } from 'react';
import { memo, Suspense, useMemo } from 'react';

import { testimonials } from './data';
import styles from './index.module.css';
import { Star } from './star';
import { Title } from './title';
import { ImageCircle } from '@/components/ImageCircle';
import { CourseMicrodata } from '@/components/microdata/course';
import { type CourseCode, getCourseName } from '@/domain/courseCode';

type Props = {
  id: string;
  courseCodes?: CourseCode[];
  showProvinceCode?: boolean;
  schemaCourseId?: string;
};

/** sort in alphabetical order, except dg is always first */
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

export const Testimonial: FC<Props> = memo(({ id, courseCodes, showProvinceCode = false, schemaCourseId }) => {
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

  return (
    <blockquote className={styles.testimonial} itemScope itemType="https://schema.org/Review">
      {schemaCourseId
        ? (
          <span itemProp="itemReviewed" itemScope itemType="https://schema.org/Course" itemID={schemaCourseId}>
            <meta itemProp="name" content={getCourseName(courseCodes?.[0] ?? 'dg')} />
          </span>
        )
        : testimonial.courses.length > 0
          ? <Suspense><CourseMicrodata itemProp="itemReviewed" courseCode={testimonial.courses[0]} /></Suspense>
          : (
            <span itemProp="itemReviewed" itemScope itemType="https://schema.org/EducationalOrganization" itemID="https://www.qcpetstudies.com/#school">
              <link itemProp="url" href="https://www.qcpetstudies.com" />
              <meta itemProp="name" content="QC Pet Studies" />
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
          <span className={styles.attribution} itemProp="name">{testimonial.name}</span>{showProvinceCode && typeof testimonial.provinceCode !== 'undefined' && <>, {testimonial.provinceCode}</>}{testimonial.courses.length > 0 && <><br /><Title testimonial={testimonial} /></>}
        </cite>
      </footer>
    </blockquote>
  );
});

Testimonial.displayName = 'Testimonial';
