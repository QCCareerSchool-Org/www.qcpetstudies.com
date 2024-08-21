import { ReactElement, ReactNode } from 'react';

import { CaptchaProvider } from './CaptchaProvider';
import { LocationProvider } from './LocationProvider';
import { PushSubscriptionProvider } from './PushSubscriptionProvider';
import { ScreenWidthProvider } from './ScreenWidthProvider';
import { ScrollPositionProvider } from './ScrollPositionProvider';

type Props = {
  children: ReactNode;
};

const reCaptchaKey = process.env.NEXT_PUBLIC_RECAPTCHA_KEY;

export const Provider = ({ children }: Props): ReactElement => (
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
