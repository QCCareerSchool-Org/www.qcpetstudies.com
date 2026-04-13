import type { Metadata } from 'next';

import { DogTrainingBase } from '@/app/(main)/certification-courses/dog-training';
import type { PageComponent } from '@/serverComponent';
import { DeadlineFunnelScript } from '@/components/deadlineFunnelScript';
import type { CourseCode } from '@/domain/courseCode';
import { fetchPrice } from '@/lib/fetchPrice';
import { getServerData } from '@/lib/getServerData';

export const metadata: Metadata = {
  title: 'Dog Training Course',
  description: 'Become a Professional Dog Trainer with QC\'s online dog training course. Study Online with Hands-On Learning!',
  alternates: { canonical: '/certification-courses/dog-training/300-off' },
};

const courseCodes: CourseCode[] = [ 'dt' ];

const DogTraining300OffPage: PageComponent = async props => {
  const { countryCode, provinceCode } = await getServerData(props.searchParams);

  const price = await fetchPrice(courseCodes, countryCode, provinceCode, { promoCode: 'DT300', school: 'QC Pet Studies' });
  if (!price.success) {
    return null;
  }

  return (
    <>
      <DeadlineFunnelScript />
      <DogTrainingBase price={price.value} enrollPath="/training-300-off" courseCodes={courseCodes} countryCode={countryCode} provinceCode={provinceCode} />;
    </>
  );
};

export default DogTraining300OffPage;
