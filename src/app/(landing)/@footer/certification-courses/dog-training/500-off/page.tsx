import { BoxingDayFooter } from '../../../../_components/boxingDayFooter';
import { Footer } from '../../../../_components/footer';

const PROMO_START = Date.UTC(2025, 11, 26, 8);
const PROMO_END = Date.UTC(2026, 1, 1, 8);

export const dynamic = 'force-dynamic';

const Training500OffFooter = () => {
  const now = Date.now();
  const showPromoFooter = now >= PROMO_START && now < PROMO_END;

  return showPromoFooter ? <BoxingDayFooter course="dt" /> : <Footer />;
};

export default Training500OffFooter;
