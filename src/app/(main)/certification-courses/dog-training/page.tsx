import type { Metadata } from 'next';

import { DogTrainingBase } from '.';
import type { CourseCode } from '@/domain/courseCode';
import { fetchPrice } from '@/lib/fetchPrice';
import { getServerData } from '@/lib/getServerData';
import type { PageComponent } from '@/serverComponent';

export const metadata: Metadata = {
  title: 'Dog Training Course',
  description: 'Become a Professional Dog Trainer with QC\'s online dog training course. Study Online with Hands-On Learning!',
  alternates: { canonical: '/certification-courses/dog-training' },
};

const courseCodes: CourseCode[] = [ 'dt' ];

const DogTrainingPage: PageComponent = async props => {
  const { countryCode, provinceCode } = await getServerData(props.searchParams);

  const price = await fetchPrice(courseCodes, countryCode, provinceCode, undefined, undefined, process.env.FIREWALL_BYPASS_SECRET);
  if (!price.success) {
    return null;
  }

  return <DogTrainingBase price={price.value} enrollPath="/" courseCodes={courseCodes} countryCode={countryCode} provinceCode={provinceCode} />;
};

export default DogTrainingPage;
