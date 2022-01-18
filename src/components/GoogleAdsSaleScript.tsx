import Script from 'next/script';
import { ReactElement, useMemo } from 'react';

import { Enrollment } from '../models/enrollment';

type Props = {
  conversionId?: number;
  conversionLabel: string;
  enrollment: Enrollment;
};

export const GoogleAdsSaleScript = ({ conversionId = 1071836607, conversionLabel, enrollment }: Props): ReactElement => {
  const script = useMemo(() => `gtag('event', 'conversion', { send_to: 'AW-${conversionId}/${conversionLabel}', value: ${enrollment.cost}, currency: '${enrollment.currencyCode}', transaction_id: '${enrollment.id}'  });`, [ conversionId, conversionLabel, enrollment ]);
  return <Script id="adwordsSale" dangerouslySetInnerHTML={{ __html: script }} />;
};
