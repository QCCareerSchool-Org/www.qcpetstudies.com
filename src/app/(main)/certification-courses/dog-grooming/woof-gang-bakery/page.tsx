import type { FC } from 'react';

import { PageSections } from './PageSections';
import { DGTutorSection } from '@/components/DGTutorSection';
import { PriceSectionWithDiscount } from '@/components/PriceSectionWithDiscount';
import { SEO } from '@/components/SEO';
import { lookupPrices } from '@/lib/lookupPrices';

const courseCodes = [ 'dg' ];

type Props = {
  enrollPath: string;
};

const Page: FC<Props> = async ({ enrollPath }) => {

  const price = await lookupPrices(courseCodes);

  return <>
    <SEO
      title="Dog Grooming Certification Course"
      description=""
      canonical="/certification-courses/dog-grooming/woof-gang-bakery"
    />

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

// Page.getLayout = page => (
//   <LandingPageLayout link={true} href="https://enroll.qcpetstudies.com/woof-gang-bakery" nav="enroll">{page}</LandingPageLayout>
// );

export default Page;
