'use client';

import type { SVGProps } from 'react';
import { forwardRef, useRef } from 'react';

import styles from './index.module.scss';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { mergeRefs } from '@/lib/mergeRefs';

type Variant = 'straight' | 'tapered';

type Props = SVGProps<SVGSVGElement> & {
  variant?: Variant;
  pathWidth?: number;
};

export const Squiggle = forwardRef<SVGSVGElement, Props>(({ variant, className, pathWidth = 10, ...props }, parentRef) => {
  const localRef = useRef<SVGSVGElement>(null);
  const intersected = useIntersectionObserver(localRef, undefined, true);

  // include caller className last so it can win in CSS specificity/tie-breaks if needed
  const classList = `${styles.squiggle} ${intersected ? styles.show : ''} ${className ?? ''}`;

  return variant === 'straight'
    ? (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        {...props}
        ref={mergeRefs(localRef, parentRef)}
        // className is applied after {...props} so it always wins,
        // even if className ends up inside props in the future
        className={classList}
        aria-hidden="true"
        viewBox="0 0 694 20"
        preserveAspectRatio="none"
        stroke="currentColor"
        fill="none"
      >
        <path strokeWidth={pathWidth} d="M0 10 H694" />
      </svg>
    )
    : variant === 'tapered'
      ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          {...props}
          ref={mergeRefs(localRef, parentRef)}
          // className is applied after {...props} so it always wins,
          // even if className ends up inside props in the future
          className={classList}
          aria-hidden="true"
          viewBox={`0 0 500 ${pathWidth}`}
          preserveAspectRatio="none"
          stroke="none"
          fill="currentColor"
        >
          <path d={`M 0 0 L 500 ${pathWidth / 2} L 0 ${pathWidth} Z`} />
        </svg>
      )
      : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          {...props}
          ref={mergeRefs(localRef, parentRef)}
          // className is applied after {...props} so it always wins,
          // even if className ends up inside props in the future
          className={classList}
          aria-hidden="true"
          viewBox="0 0 694 96.19"
          preserveAspectRatio="none"
          stroke="currentColor"
          fill="none"
        >
          <path strokeWidth={pathWidth} d="M12,84.1947 C12,84.1947 176,-27.8053 153,27.1947 C130,82.1947 122.88,103.746702 220,41.1947 C279,3.1947 210,80.1947 314,72.1947 C378.439,67.2377 494.147003,0.8867 682,32.1947" />
        </svg>
      );
});

Squiggle.displayName = 'Squiggle';
