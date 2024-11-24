'use client';

import { Component, ReactNode } from 'react';

import { TrackJS } from '@/lib/trackjs-isomorphic';

type Props = {
  fallback: ReactNode;
  children: ReactNode;
};

type State = {
  hasError: boolean;
};

export class ErrorBoundary extends Component<Props, State> {
  public constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  public static getDerivedStateFromError(): State {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public componentDidCatch(error: any, errorInfo: any): void {
    if (hasComponentStack(errorInfo)) {
      // The component stack is sometimes useful in development mode
      // In production it can be somewhat obfuscated, so feel free to omit this line.
      console.log(errorInfo.componentStack);
    }

    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    TrackJS.track(error);
  }

  public render(): ReactNode {
    return this.state.hasError
      ? this.props.fallback
      : this.props.children;
  }
}

const hasComponentStack = (val: unknown): val is { componentStack: unknown } => {
  return typeof val === 'object' && val !== null && 'componentStack' in val;
};
