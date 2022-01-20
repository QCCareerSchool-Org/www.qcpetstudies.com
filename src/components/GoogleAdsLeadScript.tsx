import Script from 'next/script';
import { ReactElement, useMemo } from 'react';

type Props = {
  conversionId?: number;
  conversionLabel: string;
  emailAddress: string | null;
};

const createScript = (conversionId: number, conversionLabel: string, emailAddress: string | null): string => {
  let script = '';
  if (emailAddress !== null) {
    script += `var enhanced_conversion_data = { email: '${emailAddress}' };\n`;
  }
  script += `gtag('event', 'conversion', { send_to: 'AW-${conversionId}/${conversionLabel}' });\n`;
  return script;
};

export const GoogleAdsLeadScript = ({ conversionId = 1071836607, conversionLabel, emailAddress }: Props): ReactElement => {
  const script = useMemo(() => createScript(conversionId, conversionLabel, emailAddress), [ conversionId, conversionLabel, emailAddress ]);
  return <Script id="googleAdsLead" dangerouslySetInnerHTML={{ __html: script }} />;
};
