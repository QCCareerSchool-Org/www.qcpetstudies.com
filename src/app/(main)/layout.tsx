import type { LayoutComponent } from '@/app/serverComponent';
import { SiteLayout } from '@/components/siteLayout';
import { getServerData } from '@/lib/getServerData';

const MainLayout: LayoutComponent = async ({ children, footer }) => {
  const date = new Date().getTime();
  const { countryCode } = await getServerData();

  return (
    <SiteLayout date={date} countryCode={countryCode} footer={footer}>
      {children}
    </SiteLayout>
  );
};

export default MainLayout;
