import type { FC } from 'react';

import type { CourseCode } from '@/domain/courseCode';
import { getCourseDescription, getCourseName, getCourseUrl } from '@/domain/courseCode';
import type { PriceQuery } from '@/lib/fetch';
import { fetchPrice } from '@/lib/fetch';

type Props = {
  courseCode: CourseCode;
  itemProp?: string;
};

export const CourseMicrodata: FC<Props> = async ({ courseCode, itemProp }) => {
  const priceQuery: PriceQuery = { countryCode: 'US', provinceCode: 'MD', courses: [ courseCode ] };
  const price = await fetchPrice(priceQuery);
  if (!price) {
    return null;
  }

  return (
    <span itemProp={itemProp} itemScope itemType="https://schema.org/Course">
      <meta itemProp="@id" content={`https://www.qceventplanning.com/courses/#${courseCode}`} />
      <meta itemProp="url" content={getCourseUrl(courseCode)} />
      <meta itemProp="name" content={getCourseName(courseCode)} />
      <meta itemProp="description" content={getCourseDescription(courseCode)} />
      <span itemProp="provider" itemScope itemType="https://schema.org/EducationalOrganization">
        <meta itemProp="@id" content="https://www.qceventplanning.com/#school" />
        <meta itemProp="url" content="https://www.qceventplanning.com" />
        <meta itemProp="name" content="QC Event School" />
      </span>
      <span itemProp="offers" itemScope itemType="https://schema.org/Offer">
        <meta itemProp="category" content="Paid" />
        <meta itemProp="priceCurrency" content="USD" />
        <meta itemProp="price" content={price.cost.toFixed(2)} />
      </span>
      <span itemProp="hasCourseInstance" itemScope itemType="https://schema.org/CourseInstance">
        <meta itemProp="courseMode" content="Online" />
        <meta itemProp="courseWorkload" content="PT40H" />
      </span>
    </span>
  );
};
