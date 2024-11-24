'use client';

import type { FC, PropsWithChildren } from 'react';

import { CaptchaProvider } from './CaptchaProvider';
import { LocationProvider } from './LocationProvider';
import { PushSubscriptionProvider } from './PushSubscriptionProvider';
import { ScreenWidthProvider } from './ScreenWidthProvider';
import { ScrollPositionProvider } from './ScrollPositionProvider';

const reCaptchaKey = process.env.NEXT_PUBLIC_RECAPTCHA_KEY;

export const Provider: FC<PropsWithChildren> = ({ children }) => (
  <LocationProvider>
    <ScreenWidthProvider>
      <ScrollPositionProvider>
        <PushSubscriptionProvider>
          <CaptchaProvider reCaptchaKey={reCaptchaKey}>
            {children}
          </CaptchaProvider>
        </PushSubscriptionProvider>
      </ScrollPositionProvider>
    </ScreenWidthProvider>
  </LocationProvider>
);
