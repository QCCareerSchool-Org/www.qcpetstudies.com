'use client';

import { GoogleAnalytics as NextGoogleAnalytics } from '@next/third-parties/google';
import Script from 'next/script';
import type { FC } from 'react';

interface Props {
  id: string;
  adsId?: string;
}

export const GoogleAnalytics: FC<Props> = ({ id, adsId }) => (
  <>
    <NextGoogleAnalytics gaId={id} />
    {adsId && <Script id="google-analytics-google-ads" dangerouslySetInnerHTML={{ __html: getScript(adsId) }} />}
  </>
);

const getScript = (adsId: string): string => {
  return `gtag('config', \`${adsId.replace(/`/ug, '\\`')}\`, { allow_enhanced_conversions: true });\n`;
};
