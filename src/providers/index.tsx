import { ReactElement, ReactNode } from 'react';

import { LocationProvider } from './LocationProvider';
import { ScreenWidthProvider } from './ScreenWidthProvider';
import { ScrollPositionProvider } from './ScrollPositionProvider';

type Props = {
  children: ReactNode;
};

export const Provider = ({ children }: Props): ReactElement => (
  <LocationProvider>
    <ScreenWidthProvider>
      <ScrollPositionProvider>
        {children}
      </ScrollPositionProvider>
    </ScreenWidthProvider>
  </LocationProvider>
);
