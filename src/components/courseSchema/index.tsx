import type { FC } from 'react';
import type { Course, WithContext } from 'schema-dts';

import { type CourseCode, getCourseCertification, getCourseDescription, getCourseName, getCourseSubjects, getCourseUrl, getCourseWorkload } from '@/domain/courseCode';
import type { PriceQuery } from '@/lib/fetch';
import { fetchPrice } from '@/lib/fetch';
import { qcPetStudiesEducationalOrganization } from '@/qcPetStudiesEducationalOrganization';
import { withSuspense } from '@/withSuspense';

interface Props {
  courseCode: CourseCode;
  id?: string;
  providerId?: string;
}

const CourseSchemaInner: FC<Props> = async ({ courseCode, id = '#course', providerId }) => {
  const priceQuery: PriceQuery = { countryCode: 'US', provinceCode: 'MD', courses: [ courseCode ] };
  const price = await fetchPrice(priceQuery);
  if (!price) {
    return null;
  }

  const certification = getCourseCertification(courseCode);

  const courseJsonLD: WithContext<Course> = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    '@id': id,
    courseCode,
    'url': getCourseUrl(courseCode),
    'name': getCourseName(courseCode),
    'description': getCourseDescription(courseCode),
    'educationalCredentialAwarded': certification ? {
      '@type': 'EducationalOccupationalCredential',
      'name': certification,
    } : undefined,
    'availableLanguage': 'en',
    'teaches': getCourseSubjects(courseCode),
    'hasCourseInstance': {
      '@type': 'CourseInstance',
      'courseMode': 'online',
      'courseWorkload': getCourseWorkload(courseCode),
    },
    'offers': {
      '@type': 'Offer',
      'price': price.discountedCost.toFixed(2),
      'priceCurrency': price.currency.code,
      'availability': 'https://schema.org/InStock',
      'url': 'https://enroll.qcpetstudies.com',
    },
    'provider': providerId
      ? { '@id': providerId }
      : {
        '@type': 'EducationalOrganization',
        '@id': 'https://www.qcpetstudies.com/#school',
        'name': 'QC Pet Studies',
        'sameAs': 'sameAs' in qcPetStudiesEducationalOrganization ? qcPetStudiesEducationalOrganization.sameAs : undefined,
      },
  };

  return <script id={`course-schema-${courseCode}`} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(courseJsonLD) }} />;
};

/** Automatically wrapped in a Suspense boundary */
export const CourseSchema = withSuspense(CourseSchemaInner);