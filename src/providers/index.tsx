'use client';

import type { FC, PropsWithChildren } from 'react';

import { CaptchaProvider } from './captchaProvider';
import { ScreenWidthProvider } from './screenWidthProvider';
import { ScrollPositionProvider } from './scrollPositionProvider';
import { TaxCreditPopupProvider } from './taxCreditPopupProvider';

const reCaptchaKey = process.env.NEXT_PUBLIC_RECAPTCHA_KEY;

export const Provider: FC<PropsWithChildren> = ({ children }) => (
  <ScreenWidthProvider>
    <ScrollPositionProvider>
      <CaptchaProvider reCaptchaKey={reCaptchaKey}>
        <TaxCreditPopupProvider>
          {children}
        </TaxCreditPopupProvider>
      </CaptchaProvider>
    </ScrollPositionProvider>
  </ScreenWidthProvider>
);
