import type { FC, ReactNode } from 'react';
import { Suspense } from 'react';

export const withSuspense = <P extends object>(Component: FC<P>, fallback?: ReactNode): FC<P> => {
  const Inner: FC<P> = props => (
    <Suspense fallback={fallback}>
      <Component {...props} />
    </Suspense>
  );

  Inner.displayName = `withSuspense(${Component.displayName ?? Component.name ?? 'Component'})`;

  return Inner;
};
