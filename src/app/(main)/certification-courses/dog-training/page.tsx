import type { Metadata } from 'next';

import { DogTrainingBase } from '.';
import type { PageComponent } from '@/app/serverComponent';
import type { CourseCode } from '@/domain/courseCode';
import type { PriceQuery } from '@/lib/fetch';
import { fetchPrice } from '@/lib/fetch';
import { getData } from '@/lib/getData';

export const metadata: Metadata = {
  title: 'Dog Training Course',
  description: 'Become a Professional Dog Trainer with QC\'s online dog training course. Study Online with Hands-On Learning!',
  alternates: { canonical: '/certification-courses/dog-training' },
};

const courseCodes: CourseCode[] = [ 'dt' ];

const DogTrainingPage: PageComponent = async () => {
  const { countryCode, provinceCode } = getData();
  const priceQuery: PriceQuery = { countryCode, provinceCode: provinceCode ?? undefined, courses: courseCodes };
  const price = await fetchPrice(priceQuery);
  if (!price) {
    return null;
  }

  return <DogTrainingBase price={price} enrollPath="/" courseCodes={courseCodes} countryCode={countryCode} provinceCode={provinceCode} />;
};

export default DogTrainingPage;
