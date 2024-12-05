import type { Metadata } from 'next';
import type { ReactElement } from 'react';
import { Suspense } from 'react';

import { FaviconMeta } from './favicon';
import { LayoutClient } from './layoutClient';
import type { LayoutComponent } from './serverComponent';
import { OklahomaDisclaimer } from '../components/oklahomaDisclaimer';
import { Provider } from '@/providers';
import { Brevo } from '@/scripts/brevo';
import { GoogleAnalytics } from '@/scripts/googleAnalytics';
import { OptInMonster } from '@/scripts/optInMonster';
import { VWO } from '@/scripts/vwo';

import './bootstrap.scss';
import './global.scss';

export const metadata: Metadata = {
  title: { default: 'QC Pet Studies', template: '%s - QC Pet Studies' },
  metadataBase: new URL('https://www.qcpetstudies.com'),
};

const RootLayout: LayoutComponent = ({ children }): ReactElement => {
  return (
    <html lang="en" className="vh-100">
      <head>
        {process.env.GOOGLE_ANALYTICS_ID && <GoogleAnalytics id={process.env.GOOGLE_ANALYTICS_ID} adsId={process.env.GOOGLE_ADS_ID} />}
        {process.env.VWO_ID && <VWO id={parseInt(process.env.VWO_ID, 10)} />}
        {process.env.BREVO_CLIENT_KEY && <Brevo clientKey={process.env.BREVO_CLIENT_KEY} />}
        <FaviconMeta />
      </head>
      <body className="d-flex flex-column vh-100">
        <Provider>
          {children}
          <OklahomaDisclaimer />
        </Provider>
        <OptInMonster />
        <Suspense><LayoutClient /></Suspense>
      </body>
    </html>
  );
};

export default RootLayout;
