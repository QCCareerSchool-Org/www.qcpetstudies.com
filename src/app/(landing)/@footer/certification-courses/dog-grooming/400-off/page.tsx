import { Footer } from '../../../../_components/footer';
import { NewYearsFooter } from '../../../../_components/newYearsFooter';

const PROMO_START = Date.UTC(2025, 11, 26, 8);
const PROMO_END = Date.UTC(2026, 0, 17, 8);

export const dynamic = 'force-dynamic';

const now = Date.now();

const Grooming400OffFooter = () => {
  const showPromoFooter = now >= PROMO_START && now < PROMO_END;

  return showPromoFooter ? <NewYearsFooter course="dg" /> : <Footer />;
};

export default Grooming400OffFooter;
