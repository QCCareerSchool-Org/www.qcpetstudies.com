import Script from 'next/script';
import { ReactElement, useMemo } from 'react';

type Props = {
  conversionId?: number;
  conversionLabel: string;
};

export const GoogleAdsLeadScript = ({ conversionId = 1071836607, conversionLabel }: Props): ReactElement => {
  const script = useMemo(() => `gtag('event', 'conversion', { send_to: 'AW-${conversionId}/${conversionLabel}' });`, [ conversionId, conversionLabel ]);
  return <Script id="googleAdsLead" dangerouslySetInnerHTML={{ __html: script }} />;
};
