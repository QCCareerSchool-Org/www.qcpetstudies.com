import { Footer } from './_components/footer';
import type { LayoutComponent } from '@/app/serverComponent';
import './landing.scss';

/**
 * The header, if any, should be included on the page
 */
const LandingLayout: LayoutComponent = ({ children, footer }) => (
  <>
    <main className="flex-shrink-0">{children}</main>
    {footer ?? <Footer />}
  </>
);

export default LandingLayout;
