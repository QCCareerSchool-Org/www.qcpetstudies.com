import { SiteLayout } from '@/components/siteLayout';
import { getServerData } from '@/lib/getServerData';
import type { LayoutComponent } from '@/serverComponent';

const MainLayout: LayoutComponent = async ({ children }) => {
  const date = new Date().getTime();
  const { countryCode } = await getServerData();

  return (
    <SiteLayout date={date} countryCode={countryCode}>
      {children}
    </SiteLayout>
  );
};

export default MainLayout;
