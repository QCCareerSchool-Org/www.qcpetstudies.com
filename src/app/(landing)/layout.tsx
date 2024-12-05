import { Footer } from './_components/footer';
import type { LayoutComponent } from '@/app/serverComponent';
import './landing.scss';

/**
 * The header, if any, should be included on the page
 */
const LandingLayout: LayoutComponent = ({ children }) => (
  <>
    <main className="flex-shrink-0">{children}</main>
    <Footer />
  </>
);

export default LandingLayout;
