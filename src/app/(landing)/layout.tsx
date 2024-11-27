'use client';

import { LayoutComponent } from '../serverComponent';
import LandingPageLayout from '@/components/LandingPageLayout';

const Layout: LayoutComponent = ({ children }) => {
  return <LandingPageLayout link={false} nav="brochure">{children}</LandingPageLayout>;
};

export default Layout;
