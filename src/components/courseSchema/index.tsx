import type { FC } from 'react';
import type { Course, WithContext } from 'schema-dts';

import { courses } from './courseSchemaData';
import type { CourseCode } from '@/domain/courseCode';
import type { PriceQuery } from '@/lib/fetch';
import { fetchPrice } from '@/lib/fetch';

interface Props {
  courseID: string;
  courseCode: CourseCode;
}

export const CourseSchema: FC<Props> = async ({ courseID, courseCode }) => {
  const course = courses[courseID];
  const priceQuery: PriceQuery = { countryCode: 'US', provinceCode: 'MD', courses: [ courseCode ] };
  const price = await fetchPrice(priceQuery);
  if (!price) {
    return null;
  }

  const courseJsonLD = (coursePrice: number): WithContext<Course> => ({
    '@context': 'https://schema.org',
    '@type': 'Course',
    'url': course.url,
    'name': course.name,
    'description': course.description,
    'educationalCredentialAwarded': course.certificate,
    'hasCourseInstance': {
      '@type': 'CourseInstance',
      'courseMode': 'Online',
      'offers': {
        '@type': 'Offer',
        'category': 'Course',
        'url': 'https://enroll.qcpetstudies.com/',
        'price': coursePrice.toFixed(2),
        'priceCurrency': 'USD',
        'availability': 'https://schema.org/InStock',
      },
    },
    'provider': {
      '@type': 'EducationalOrganization',
      'name': 'QC Pet Studies',
      'sameAs': [
        'https://www.facebook.com/qcpetstudies',
        'https://www.instagram.com/qcpetstudies',
        'https://www.youtube.com/@qcpetstudies',
      ],
    },
  });

  return (
    <script id={`course-schema-${courseID}`} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(courseJsonLD(price.cost)) }} />
  );
};
