import { useEffect, useRef } from 'react';

export type Handler<E extends Event = Event> = (event: E) => void;

/**
 * Adds an event listener to an element
 * @param eventName the name of the event to listen for, e.g., 'onClick'
 * @param handler the handler to run, ideally a stable reference
 * @param element the element to add the listener to
 */
export const useEventListener = <
  E extends Event = Event,
>(
  eventName: string,
  handler: Handler<E>,
  element?: React.RefObject<HTMLElement | null | undefined>,
): void => {
  const savedHandler = useRef<Handler<E>>(undefined);

  // Keep track of the latest handler
  useEffect(() => {
    savedHandler.current = handler;
  }, [ handler ]);

  useEffect(() => {
    // Make sure the element supports addEventListener
    const targetElement = element?.current ?? window;
    const isSupported = 'addEventListener' in targetElement;
    if (!isSupported) {
      return;
    }

    // Create event listener that calls the handler stored in the ref
    const eventListener: EventListener = event => {
      // Safely check if the handler exists before calling it
      savedHandler.current?.(event as E);
    };

    // Add event listener
    targetElement.addEventListener(eventName, eventListener);

    // Clean up when the component unmounts or the dependency changes
    return () => {
      targetElement.removeEventListener(eventName, eventListener);
    };
  }, [ eventName, element ]);
};
