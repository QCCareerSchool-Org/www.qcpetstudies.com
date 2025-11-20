'use client';

import type { FC, PropsWithChildren } from 'react';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';

interface Props {
  reCaptchaKey?: string;
}

export const CaptchaProvider: FC<PropsWithChildren<Props>> = ({ reCaptchaKey, children }) => (
  <GoogleReCaptchaProvider reCaptchaKey={reCaptchaKey ?? ''}>
    {children}
  </GoogleReCaptchaProvider>
);
