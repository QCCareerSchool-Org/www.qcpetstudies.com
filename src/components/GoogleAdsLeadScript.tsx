import Script from 'next/script';
import { ReactElement } from 'react';

const script = `gtag('event', 'conversion', { send_to: 'AW-1071836607/yZtFCL_BpW8Qv9uL_wM' });`;

export const GoogleAdsLeadScript = (): ReactElement => (
  <Script id="googleAdsLead" dangerouslySetInnerHTML={{ __html: script }} />
);
