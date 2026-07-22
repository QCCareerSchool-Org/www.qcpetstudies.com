import { cookies } from 'next/headers';

import { SiteLayout } from '@/components/siteLayout';
import { isUserValues } from '@/domain/userValues';
import { getServerData } from '@/lib/getServerData';
import { decodeJwt } from '@/lib/jwt';
import type { LayoutComponent } from '@/serverComponent';

const MainLayout: LayoutComponent = async ({ children }) => {
  const date = new Date().getTime();
  const { countryCode } = await getServerData();
  const jwt = (await cookies()).get('user')?.value;
  const result = jwt ? await decodeJwt(jwt) : undefined;
  const raw = result?.success ? result.value : undefined;
  const userValues = raw && isUserValues(raw) ? raw : undefined;

  return (
    <SiteLayout date={date} countryCode={countryCode} userValues={userValues}>
      {children}
    </SiteLayout>
  );
};

export default MainLayout;
