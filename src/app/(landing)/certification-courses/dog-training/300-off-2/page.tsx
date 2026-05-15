import type { Metadata } from 'next';

import { DogTrainingBase } from '@/app/(main)/certification-courses/dog-training';
import { DeadlineFunnelScript } from '@/components/deadlineFunnelScript';
import type { CourseCode } from '@/domain/courseCode';
import { fetchPrice } from '@/lib/fetchPrice';
import { getServerData } from '@/lib/getServerData';
import type { PageComponent } from '@/serverComponent';

export const metadata: Metadata = {
  title: 'Dog Training Course',
  description: 'Become a Professional Dog Trainer with QC\'s online dog training course. Study Online with Hands-On Learning!',
  alternates: { canonical: '/certification-courses/dog-training/300-off' },
};

const courseCodes: CourseCode[] = [ 'dt' ];

const DogTraining300Off2Page: PageComponent = async props => {
  const { countryCode, provinceCode } = await getServerData(props.searchParams);

  const price = await fetchPrice(courseCodes, countryCode, provinceCode, { promoCode: 'DT300', school: 'QC Pet Studies' }, undefined, process.env.FIREWALL_BYPASS_SECRET);
  if (!price.success) {
    return null;
  }

  const [ dtPrice, dePrice ] = await Promise.all([
    fetchPrice([ 'dt' ], countryCode, provinceCode, { promoCode: 'DT150', school: 'QC Pet Studies' }, undefined, process.env.FIREWALL_BYPASS_SECRET),
    fetchPrice([ 'de' ], countryCode, provinceCode, { promoCode: 'DT150', school: 'QC Pet Studies' }, undefined, process.env.FIREWALL_BYPASS_SECRET),
  ]);
  if (!dtPrice.success || !dePrice.success) {
    return null;
  }

  return (
    <>
      <DeadlineFunnelScript />
      <DogTrainingBase price={price.value} enrollPath="/training-300-off" courseCodes={courseCodes} countryCode={countryCode} provinceCode={provinceCode} dtPrice={dtPrice.value} dePrice={dePrice.value} />;
    </>
  );
};

export default DogTraining300Off2Page;
