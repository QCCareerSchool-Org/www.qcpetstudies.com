import type { RefObject } from 'react';
import { useEffect, useState } from 'react';

/**
 * Observes an element to see it is intersected
 * @param ref A reference to the element being observed
 * @param options IntersectionObserverInit object
 * @param once Whether to track only once, the first time the element is intersected; or to keep track of its current intersected state
 * @returns The state of the intersection
 */
export const useIntersectionObserver = (ref: RefObject<HTMLOrSVGElement | null>, options?: IntersectionObserverInit, once?: boolean): boolean => {
  const [ intersected, setIntersected ] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) {
      return;
    }

    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        setIntersected(true);
      } else if (!once) {
        setIntersected(false);
      }
    }, options);

    observer.observe(element as HTMLElement);

    return () => { observer.unobserve(element as HTMLElement); };
  }, [ ref, options, once ]);

  return intersected;
};
