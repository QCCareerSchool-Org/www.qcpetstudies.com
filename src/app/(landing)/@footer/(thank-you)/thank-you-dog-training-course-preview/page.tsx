import { Footer } from '@/app/(landing)/_components/footer';
import { NewYearsFooter } from '@/app/(landing)/_components/newYearsFooter';
import type { PageComponent } from '@/app/serverComponent';
import { getServerData } from '@/lib/getServerData';
import { endOfYear2025, newYear2026 } from '@/lib/promotionPeriods';
import { PromotionPeriodSet } from '@/lib/promotionPeriodSet';

const promoSet = new PromotionPeriodSet([ endOfYear2025, newYear2026 ]);

export const dynamic = 'force-dynamic';

const ThankYouTrainingFooter: PageComponent = async props => {
  const { date } = await getServerData(props.searchParams);

  return promoSet.contains(date)
    ? <NewYearsFooter course="dt" />
    : <Footer />;
};

export default ThankYouTrainingFooter;
