import '../styles/global.scss';

import { NextPage } from 'next';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { ReactElement, ReactNode, useEffect } from 'react';

import { ErrorBoundary } from '../components/ErrorBoundary';
import { ErrorPage } from '../components/ErrorPage';
import { DefaultLayout } from '../components/layouts/DefaultLayout';
import { resetActiveCampaign } from '../lib/activeCampaign';
import { brevoPageview } from '../lib/brevo';
import { fbqPageview } from '../lib/fbq';
import { gaPageview } from '../lib/ga';
import { resetOptInMonster } from '../lib/optInMonster';
import { pardotPageview } from '../lib/pardot';
import { getRegistration } from '../lib/serviceWorker';
import { TrackJS } from '../lib/trackjs-isomorphic';
import { uetPageview } from '../lib/uet';
import { Provider } from '../providers';
import { OklahomaDisclaimer } from './oklahomaDisclaimer';

if (!TrackJS.isInstalled()) {
  TrackJS.install({
    token: '0377457a8a0c41c2a11da5e34f786bba',
    application: 'qc-pet-studies',
  });
}

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
    getRegistration().catch(() => { /* empty */ });
  }, []);

  useEffect(() => {
    const handleRouteChange = (url: string): void => {
      gaPageview(url);
      uetPageview(url);
      fbqPageview(url);
      pardotPageview(url);
      try {
        const parsed = new URL(window.document.title);
        brevoPageview(window.document.title, url, parsed.pathname);
      } catch (err) {
        console.error(err);
      }
      resetOptInMonster();
      resetActiveCampaign();
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
    <ErrorBoundary fallback={<ErrorPage />}>
      <Provider>
        {getLayout(<Component {...pageProps} />)}
        <OklahomaDisclaimer />
      </Provider>
    </ErrorBoundary>
  );
};

export default QCPetStudiesApp;
