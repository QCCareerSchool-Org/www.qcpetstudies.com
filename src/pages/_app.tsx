import '../styles/global.scss';

import type { AppProps, NextWebVitalsMetric } from 'next/app';
import { useRouter } from 'next/router';
import Script from 'next/script';
import { ReactElement, useEffect } from 'react';
import SSRProvider from 'react-bootstrap/SSRProvider';

import { gaPageview } from '../lib/ga';
import * as salesforce from '../lib/salesforce';
import { LocationProvider } from '../providers/LocationProvider';
import { ScreenWidthProvider } from '../providers/ScreenWidthProvider';
import { ScrollPositionProvider } from '../providers/ScrollPositionProvider';

const googleAnalyticsScript = `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', { page_path: window.location.pathname });
gtag('config', 'AW-1071836607');
`;

const QCPetStudiesApp = ({ Component, pageProps }: AppProps): ReactElement => {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: string): void => {
      gaPageview(url);
      salesforce.pageview(url);
    };

    // When the component is mounted, subscribe to router changes and log those page views
    router.events.on('routeChangeComplete', handleRouteChange);

    // If the component is unmounted, unsubscribe from the event with the `off` method
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [ router.events ]);

  return (
    <SSRProvider>
      <LocationProvider>
        <ScreenWidthProvider>
          <ScrollPositionProvider>
            <Script
              strategy="afterInteractive"
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
            />
            <Script
              id="gtag-init"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{ __html: googleAnalyticsScript }}
            />
            <Component {...pageProps} />
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
