import '../styles/global.scss';

import { NextPage } from 'next';
import type { AppProps, NextWebVitalsMetric } from 'next/app';
import { useRouter } from 'next/router';
import { ReactElement, ReactNode, useEffect } from 'react';
import SSRProvider from 'react-bootstrap/SSRProvider';

import { DefaultLayout } from '../components/DefaultLayout';
import { fbqPageview } from '../lib/fbq';
import { gaPageview } from '../lib/ga';
import { pardotPageview } from '../lib/pardot';
import { uetPageview } from '../lib/uet';
import { LocationProvider } from '../providers/LocationProvider';
import { ScreenWidthProvider } from '../providers/ScreenWidthProvider';
import { ScrollPositionProvider } from '../providers/ScrollPositionProvider';

// eslint-disable-next-line @typescript-eslint/ban-types
export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const QCPetStudiesApp = ({ Component, pageProps }: AppPropsWithLayout): ReactElement => {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: string): void => {
      gaPageview(url);
      uetPageview(url);
      fbqPageview(url);
      pardotPageview(url);
    };

    // When the component is mounted, subscribe to router changes and log those page views
    router.events.on('routeChangeComplete', handleRouteChange);

    // If the component is unmounted, unsubscribe from the event with the `off` method
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [ router.events ]);

  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? (page => <DefaultLayout>{page}</DefaultLayout>);

  return (
    <SSRProvider>
      <LocationProvider>
        <ScreenWidthProvider>
          <ScrollPositionProvider>
            {getLayout(<Component {...pageProps} />)}
          </ScrollPositionProvider>
        </ScreenWidthProvider>
      </LocationProvider>
    </SSRProvider>
  );
};

export const reportWebVitals = ({ id, name, label, value }: NextWebVitalsMetric): void => {
  // Use `window.gtag` if you initialized Google Analytics as this example:
  // https://github.com/vercel/next.js/blob/canary/examples/with-google-analytics/pages/_app.js
  window.gtag('event', name, {
    // eslint-disable-next-line camelcase
    event_category: label === 'web-vital' ? 'Web Vitals' : 'Next.js custom metric',
    value: Math.round(name === 'CLS' ? value * 1000 : value), // values must be integers
    // eslint-disable-next-line camelcase
    event_label: id, // id unique to current page load
    // eslint-disable-next-line camelcase
    non_interaction: true, // avoids affecting bounce rate.
  });
};

export default QCPetStudiesApp;
