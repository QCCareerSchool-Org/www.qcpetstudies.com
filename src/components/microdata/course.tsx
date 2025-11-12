import type { FC } from 'react';

import type { CourseCode } from '@/domain/courseCode';
import { getCourseDescription, getCourseName, getCourseUrl, getCourseWorkload } from '@/domain/courseCode';
import type { PriceQuery } from '@/lib/fetch';
import { fetchPrice } from '@/lib/fetch';
import { withSuspense } from '@/withSuspense';

type Props = {
  courseCode: CourseCode;
  itemProp?: string;
};

const CourseMicrodataInner: FC<Props> = async ({ courseCode, itemProp }) => {
  const priceQuery: PriceQuery = { countryCode: 'US', provinceCode: 'MD', courses: [ courseCode ] };
  const price = await fetchPrice(priceQuery);
  if (!price) {
    return null;
  }

  const workload = getCourseWorkload(courseCode);

  return (
    <span itemProp={itemProp} itemScope itemType="https://schema.org/Course" itemID="#course">
      <link itemProp="url" href={getCourseUrl(courseCode)} />
      <meta itemProp="name" content={getCourseName(courseCode)} />
      <meta itemProp="description" content={getCourseDescription(courseCode)} />
      <span itemProp="provider" itemScope itemType="https://schema.org/EducationalOrganization" itemID="https://www.qcpetstudies.com/#school">
        <link itemProp="url" href="https://www.qcpetstudies.com" />
        <meta itemProp="name" content="QC Pet Studies" />
      </span>
      <span itemProp="offers" itemScope itemType="https://schema.org/Offer">
        <meta itemProp="priceCurrency" content={price.currency.code} />
        <meta itemProp="price" content={price.discountedCost.toFixed(2)} />
        <link itemProp="url" href="https://enroll.qcpetstudies.com" />
        <meta itemProp="availability" content="https://schema.org/InStock" />
      </span>
      <span itemProp="hasCourseInstance" itemScope itemType="https://schema.org/CourseInstance">
        <meta itemProp="courseMode" content="online" />
        {workload && <meta itemProp="courseWorkload" content={workload} />}
      </span>
    </span>
  );
};

/** Automatically wrapped in a Suspense boundary */
export const CourseMicrodata = withSuspense(CourseMicrodataInner);
