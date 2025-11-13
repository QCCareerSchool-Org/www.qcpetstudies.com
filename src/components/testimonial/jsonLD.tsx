import type { FC } from 'react';
import type { Course, EducationalOrganization, Review, WithContext } from 'schema-dts';

import type { CourseCode } from '@/domain/courseCode';
import { getCourseDescription, getCourseName, getCourseUrl } from '@/domain/courseCode';
import type { PriceQuery } from '@/lib/fetch';
import { fetchPrice } from '@/lib/fetch';

type Props = {
  courseCode: CourseCode | undefined;
  name: string;
  rating: number;
  reviewText: string;
  schemaCourseId?: string;
};

export const TestimonialSchemaData: FC<Props> = async props => {

  let itemReviewed: Course | EducationalOrganization | undefined;

  if (props.courseCode) {
    const priceQuery: PriceQuery = { countryCode: 'US', provinceCode: 'MD', courses: [ props.courseCode ] };
    const price = await fetchPrice(priceQuery);
    if (!price) {
      return null;
    }

    itemReviewed = {
      '@type': 'Course',
      '@id': props.schemaCourseId ?? `https://www.qceventplanning.com/#course-${props.courseCode}`,
      'url': getCourseUrl(props.courseCode),
      'name': getCourseName(props.courseCode),
      'description': getCourseDescription(props.courseCode),
      'provider': {
        '@type': 'EducationalOrganization',
        '@id': 'https://www.qceventplanning.com/#school',
        'url': 'https://www.qceventplanning.com',
        'name': 'QC Event School',
      },
      'offers': {
        '@type': 'Offer',
        'category': 'Paid',
        'priceCurrency': 'USD',
        'price': price.discountedCost.toFixed(2),
      },
      'hasCourseInstance': {
        '@type': 'CourseInstance',
        'courseMode': 'Online',
        'courseWorkload': 'PT40H',
      },
    };
  } else {
    itemReviewed = {
      '@type': 'EducationalOrganization',
      '@id': 'https://www.qcdesignschool.com/#school',
      'name': 'QC Design School',
      'url': 'https://www.qcdesignschool.com',
    };
  }

  const reviewSchema: WithContext<Review> = {
    '@context': 'https://schema.org',
    '@type': 'Review',
    'author': {
      '@type': 'Person',
      'name': props.name,
    },
    'reviewBody': props.reviewText,
    'reviewRating': {
      '@type': 'Rating',
      'ratingValue': props.rating.toString(),
      'worstRating': '0',
      'bestRating': '5',
    },
    itemReviewed,
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />;
};
