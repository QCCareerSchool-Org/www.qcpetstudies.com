'use client';

import type { FC, PropsWithChildren } from 'react';

import { CaptchaProvider } from './captchaProvider';
import { IPProvider } from './ipProvider';
import { ScreenWidthProvider } from './screenWidthProvider';
import { ScrollPositionProvider } from './scrollPositionProvider';
import { TaxCreditPopupProvider } from './taxCreditPopupProvider';
import { UserValuesProvider } from './userValuesProvider';
import type { UserValues } from '@/domain/userValues';

const reCaptchaKey = process.env.NEXT_PUBLIC_RECAPTCHA_KEY;

interface Props {
  userValues?: UserValues;
  serverIp: string | null;
}

export const Provider: FC<PropsWithChildren<Props>> = ({ userValues, serverIp, children }) => (
  <UserValuesProvider {...userValues}>
    <IPProvider serverIp={serverIp}>
      <ScreenWidthProvider>
        <ScrollPositionProvider>
          <CaptchaProvider reCaptchaKey={reCaptchaKey}>
            <TaxCreditPopupProvider>
              {children}
            </TaxCreditPopupProvider>
          </CaptchaProvider>
        </ScrollPositionProvider>
      </ScreenWidthProvider>
    </IPProvider>
  </UserValuesProvider>
);
