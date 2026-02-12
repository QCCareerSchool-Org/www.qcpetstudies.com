import { Footer } from '@/app/(landing)/_components/footer';
import { NewYearsFooter } from '@/app/(landing)/_components/newYearsFooter';
import type { PageComponent } from '@/app/serverComponent';
import { getServerData } from '@/lib/getServerData';
import { endOfYear2025, newYear2026 } from '@/lib/periods';
import { PromotionPeriodSet } from '@/lib/periodSet';

const promoSet = new PromotionPeriodSet([ endOfYear2025, newYear2026 ]);

export const dynamic = 'force-dynamic';

const Grooming400OffFooter: PageComponent = async props => {
  const { date } = await getServerData(props.searchParams);

  return promoSet.contains(date)
    ? <NewYearsFooter course="dg" />
    : <Footer />;
};

export default Grooming400OffFooter;
