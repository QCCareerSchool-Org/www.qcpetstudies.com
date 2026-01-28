import type { Metadata } from 'next';
import type { ReactElement } from 'react';
import { Suspense } from 'react';
import { ToastContainer } from 'react-toastify';

import { FaviconMeta } from './favicon';
import styles from './layout.module.scss';
import { LayoutClient } from './layoutClient';
import type { LayoutComponent } from './serverComponent';
import { Provider } from '@/providers';
import { Bing } from '@/scripts/bing';
import { Brevo } from '@/scripts/brevo';
import { Facebook } from '@/scripts/facebook';
import { GoogleAnalytics } from '@/scripts/googleAnalytics';
import { OptInMonster } from '@/scripts/optInMonster';
import { PerfectAudience } from '@/scripts/perfectAudience';
import { Tiktok } from '@/scripts/tiktok';
import { VWO } from '@/scripts/vwo';

import './bootstrap.scss';
import './global.scss';

export const metadata: Metadata = {
  title: { default: 'QC Pet Studies', template: '%s - QC Pet Studies' },
  metadataBase: new URL('https://www.qcpetstudies.com'),
};

const RootLayout: LayoutComponent = ({ children }): ReactElement => {
  return (
    <html lang="en">
      <head>
        {process.env.GOOGLE_ANALYTICS_ID && <GoogleAnalytics id={process.env.GOOGLE_ANALYTICS_ID} adsId={process.env.GOOGLE_ADS_ID} />}
        {process.env.VWO_ID && <VWO id={parseInt(process.env.VWO_ID, 10)} />}
        {process.env.BREVO_CLIENT_KEY && <Brevo clientKey={process.env.BREVO_CLIENT_KEY} />}
        {process.env.FACEBOOK_ID && <Facebook id={process.env.FACEBOOK_ID} />}
        {process.env.TIKTOK_ID && <Tiktok id={process.env.TIKTOK_ID} />}
        {process.env.BING_ID && <Bing id={process.env.BING_ID} />}
        <FaviconMeta />
      </head>
      <body className="d-flex flex-column">
        <Provider>
          {children}
        </Provider>
        <OptInMonster />
        <Suspense><LayoutClient /></Suspense>
        <ToastContainer pauseOnFocusLoss pauseOnHover position="top-center" className={styles.toastContainer} />
      </body>
    </html>
  );
};

export default RootLayout;
