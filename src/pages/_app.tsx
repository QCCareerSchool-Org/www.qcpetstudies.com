import '../styles/global.scss';

import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { ReactElement, useEffect } from 'react';
import SSRProvider from 'react-bootstrap/SSRProvider';

import { gaPageview } from '../lib/ga';
import * as salesforce from '../lib/salesforce';
import { LocationProvider } from '../providers/LocationProvider';
import { ScreenWidthProvider } from '../providers/ScreenWidthProvider';
import { ScrollPositionProvider } from '../providers/ScrollPositionProvider';

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    dataLayer: any[];
  }
}

const QCPetStudiesApp = ({ Component, pageProps }: AppProps): ReactElement => {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: string): void => {
      gaPageview(url);
      salesforce.pageview(url);
    };
    // When the component is mounted, subscribe to router changes
    // and log those page views
    router.events.on('routeChangeComplete', handleRouteChange);

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [ router.events ]);

  return (
    <SSRProvider>
      <LocationProvider>
        <ScreenWidthProvider>
          <ScrollPositionProvider>
            <Component {...pageProps} />
          </ScrollPositionProvider>
        </ScreenWidthProvider>
      </LocationProvider>
    </SSRProvider>
  );
};

export default QCPetStudiesApp;
