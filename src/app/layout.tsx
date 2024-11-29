import '@/styles/global.scss';

import { Metadata } from 'next';
import { ReactElement, Suspense } from 'react';

import { FaviconMeta } from './favicon';
import { LayoutClient } from './layoutClient';
import { OklahomaDisclaimer } from './oklahomaDisclaimer';
import type { LayoutComponent } from './serverComponent';
import { ErrorBoundary } from '@/components/ErrorBoundary';
import { ErrorPage } from '@/components/ErrorPage';
import { TrackJS } from '@/lib/trackjs-isomorphic';
import { Provider } from '@/providers';

if (!TrackJS.isInstalled()) {
  TrackJS.install({
    token: '0377457a8a0c41c2a11da5e34f786bba',
    application: 'qc-pet-studies',
  });
}

export const metadata: Metadata = {
  title: { default: 'Become a Pet Care Professional - QC Pet Studies', template: '%s - QC Pet Studies' },
  metadataBase: new URL('https://www.qcpetstudies.com'),
};

const RootLayout: LayoutComponent = ({ children }): ReactElement => {
  return (
    <html lang="en" className={`h-100`}>
      <head>
        <FaviconMeta />
      </head>
      <body className="d-flex flex-column">
        <ErrorBoundary fallback={<ErrorPage />}>
          <Provider>
            {children}
            <OklahomaDisclaimer />
          </Provider>
        </ErrorBoundary>
        <Suspense><LayoutClient /></Suspense>
      </body>
    </html>

  );
};

export default RootLayout;
