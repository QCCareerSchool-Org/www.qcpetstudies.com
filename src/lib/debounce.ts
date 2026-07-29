export interface DebouncedFunction<Args extends unknown[]> {
  (...args: Args): void;
  cancel: () => void;
  flush: () => void;
}

export const debounce = <Args extends unknown[]>(callback: (...args: Args) => void, delay: number): DebouncedFunction<Args> => {
  let pendingArgs: Args | undefined;
  let timeoutId: number | undefined;

  const cancel = (): void => {
    if (timeoutId !== undefined) {
      // eslint-disable-next-line custom/no-window-outside-effects
      window.clearTimeout(timeoutId);
    }

    pendingArgs = undefined;
    timeoutId = undefined;
  };

  const flush = (): void => {
    if (pendingArgs === undefined) {
      return;
    }

    const args = pendingArgs;
    cancel();
    callback(...args);
  };

  const debounced = Object.assign(
    (...args: Args): void => {
      cancel();
      pendingArgs = args;
      // eslint-disable-next-line custom/no-window-outside-effects
      timeoutId = window.setTimeout(flush, delay);
    },
    { cancel, flush },
  );

  return debounced;
};
