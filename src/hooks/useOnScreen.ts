import { MutableRefObject, useEffect, useState } from 'react';

export const useOnScreen = <T = unknown>(ref: MutableRefObject<T>, rootMargin = '0px', fallbackValue = false): boolean => {
  const [ isIntersecting, setIntersecting ] = useState(false);

  useEffect(() => {
    if ('IntersectionObserver' in window) {

      // create an intersection observer whose callback will set our isIntersecting state
      const observer = new IntersectionObserver(([ entry ]) => {
        if (entry.isIntersecting) {
          setIntersecting(true);
        } else {
          setIntersecting(false);
        }
      }, { rootMargin });

      // observe the element in the provided ref
      const element = ref.current;
      if (element && element instanceof Element) {
        observer.observe(element);
        return () => observer.unobserve(element);
      }

    } else {
      // use the fallback value if we don't have IntersectionObserver available
      setIntersecting(fallbackValue);
    }
  }, [ ref, rootMargin, fallbackValue ]);

  return isIntersecting;
};
