import type { FC, ReactNode } from 'react';
import { Suspense } from 'react';

type ExtraProps = {
  suspenseFallback?: ReactNode;
};

/** HOC to automatically wrap a component in a Suspense boundary */
export const withSuspense = <P extends object>(Component: FC<P>, fallback?: ReactNode): FC<P & ExtraProps> => {
  const Inner: FC<P & ExtraProps> = props => (
    <Suspense fallback={props.suspenseFallback ?? fallback}>
      <Component {...props} />
    </Suspense>
  );

  Inner.displayName = `withSuspense(${Component.displayName ?? Component.name ?? 'Component'})`;

  return Inner;
};
