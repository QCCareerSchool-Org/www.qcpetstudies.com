import type { LayoutComponent } from '@/app/serverComponent';
import { SiteLayout } from '@/components/siteLayout';
import { getData } from '@/lib/getData';

const MainLayout: LayoutComponent = ({ children }) => {
  const date = new Date().getTime();
  const { countryCode } = getData();

  return (
    <SiteLayout date={date} countryCode={countryCode}>
      {children}
    </SiteLayout>
  );
};

export default MainLayout;
