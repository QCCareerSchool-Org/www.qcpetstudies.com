import { BoxingDayFooter } from '../../../_components/boxingDayFooter';
import { Footer } from '../../../_components/footer';

const BOXING_DAY_START = Date.UTC(2025, 11, 26, 8);
const BOXING_DAY_END = Date.UTC(2026, 0, 3, 8);

export const dynamic = 'force-dynamic';

const GroomingThankYouFooter = () => {
  const now = Date.now();
  const isBoxingDayWindow = now >= BOXING_DAY_START && now < BOXING_DAY_END;

  return isBoxingDayWindow ? <BoxingDayFooter course="dg" /> : <Footer />;
};

export default GroomingThankYouFooter;
