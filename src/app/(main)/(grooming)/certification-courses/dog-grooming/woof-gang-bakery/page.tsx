import { Metadata } from 'next';

import { PageSections } from './PageSections';
import { PageComponent } from '@/app/serverComponent';
import { DGTutorSection } from '@/components/DGTutorSection';
import { PriceSectionWithDiscount } from '@/components/PriceSectionWithDiscount';
import { getParam } from '@/lib/getParam';
import { lookupPrices } from '@/lib/lookupPrices';

const courseCodes = [ 'dg' ];

export const metadata: Metadata = {
  title: 'Dog Grooming Certification Course',
  alternates: { canonical: '/certification-courses/dog-grooming/woof-gang-bakery' },
};

const Page: PageComponent = async ({ searchParams }) => {

  const enrollPath = getParam(searchParams.enrollPath);

  const price = await lookupPrices(courseCodes);

  return <>

    <PageSections enrollPath={enrollPath} />

    <PriceSectionWithDiscount
      courses={courseCodes}
      price={price}
      doubleGuarantee={true}
      enrollPath={enrollPath}
      message={<>Includes everything you need to get started with a <strong className="text-primary">WGB-exclusive $500 discount!</strong></>}
    />

    <DGTutorSection className="bg-light" />

  </>;
};

export default Page;
