import Script from 'next/script';
import { ReactElement, useMemo } from 'react';

import { Enrollment } from '../models/enrollment';

type Props = {
  conversionId?: number;
  conversionLabel: string;
  enrollment: Enrollment;
};

const createScript = (conversionId: number, conversionLabel: string, enrollment: Enrollment): string => {
  let script = '';
  script += `var enhanced_conversion_data = { email: '${enrollment.emailAddress}' };\n`;
  script += `typeof gtag === 'function' && gtag('event', 'conversion', { send_to: 'AW-${conversionId}/${conversionLabel}', value: ${enrollment.cost}, currency: '${enrollment.currencyCode}', transaction_id: '${enrollment.id}'  });\n`;
  return script;
};

export const GoogleAdsSaleScript = ({ conversionId = 1071836607, conversionLabel, enrollment }: Props): ReactElement => {
  const script = useMemo(() => createScript(conversionId, conversionLabel, enrollment), [ conversionId, conversionLabel, enrollment ]);
  return <Script id="adwordsSale" dangerouslySetInnerHTML={{ __html: script }} />;
};
