import { ReactElement, ReactNode } from 'react';

import { LocationProvider } from './LocationProvider';
import { PushSubscriptionProvider } from './PushSubscriptionProvider';
import { ScreenWidthProvider } from './ScreenWidthProvider';
import { ScrollPositionProvider } from './ScrollPositionProvider';

type Props = {
  children: ReactNode;
};

export const Provider = ({ children }: Props): ReactElement => (
  <LocationProvider>
    <ScreenWidthProvider>
      <ScrollPositionProvider>
        <PushSubscriptionProvider>
          {children}
        </PushSubscriptionProvider>
      </ScrollPositionProvider>
    </ScreenWidthProvider>
  </LocationProvider>
);
