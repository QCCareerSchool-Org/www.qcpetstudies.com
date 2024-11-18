'use client';

import { Provider } from '@/providers';

export function RootLayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Provider>
      {children}
    </Provider>
  );
}
