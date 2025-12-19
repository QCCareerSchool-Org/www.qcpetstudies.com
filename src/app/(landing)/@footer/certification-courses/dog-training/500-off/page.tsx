import { Footer } from '../../../../_components/footer';
import { NewYearsFooter } from '../../../../_components/newYearsFooter';

const PROMO_START = Date.UTC(2025, 11, 26, 8);
const PROMO_END = Date.UTC(2026, 0, 17, 8);

export const dynamic = 'force-dynamic';

const now = Date.now();

const Training500OffFooter = () => {
  const showPromoFooter = now >= PROMO_START && now < PROMO_END;

  return showPromoFooter ? <NewYearsFooter course="dt" /> : <Footer />;
};

export default Training500OffFooter;
