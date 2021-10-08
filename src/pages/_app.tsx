import '../styles/global.scss';

import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { ReactElement, useEffect } from 'react';

import { OntarioWarning } from '../components/OntarioWarning';
import * as ga from '../lib/ga';
import { LocationProvider } from '../providers/LocationProvider';
import { ScreenWidthProvider } from '../providers/ScreenWidthProvider';
import { ScrollPositionProvider } from '../providers/ScrollPositionProvider';

function MyApp({ Component, pageProps }: AppProps): ReactElement {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: string): void => {
      ga.pageview(url);
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
    <LocationProvider>
      <ScreenWidthProvider>
        <ScrollPositionProvider>
          <OntarioWarning />
          <Component {...pageProps} />
        </ScrollPositionProvider>
      </ScreenWidthProvider>
    </LocationProvider>
  );
}

export default MyApp;
