import type { Metadata } from 'next';

import { PageSections } from './PageSections';
import type { PageComponent } from '@/app/serverComponent';
import { PriceSectionWithDiscount } from '@/components/priceSectionWithDiscount';
import { TutorSectionDG } from '@/components/tutorSectionDG';
import type { PriceQuery } from '@/lib/fetch';
import { fetchPrice } from '@/lib/fetch';
import { getData } from '@/lib/getData';
import { getParam } from '@/lib/getParam';

const courseCodes = [ 'dg' ];

export const metadata: Metadata = {
  title: 'Dog Grooming Certification Course',
  alternates: { canonical: '/certification-courses/dog-grooming/woof-gang-bakery' },
};

const Page: PageComponent = async ({ searchParams }) => {
  const { countryCode, provinceCode } = getData();
  const priceQuery: PriceQuery = { countryCode, provinceCode: provinceCode ?? undefined, courses: courseCodes };
  const price = await fetchPrice(priceQuery);
  if (!price) {
    return null;
  }

  const enrollPath = getParam(searchParams.enrollPath);

  return (
    <>
      <PageSections enrollPath={enrollPath} />

      <PriceSectionWithDiscount
        courses={courseCodes}
        price={price}
        doubleGuarantee={true}
        enrollPath={enrollPath}
        message={<>Includes everything you need to get started with a <strong className="text-primary">WGB-exclusive $500 discount!</strong></>}
      />

      <TutorSectionDG className="bg-light" />
    </>
  );
};

export default Page;
