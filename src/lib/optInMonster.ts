declare global {
  interface Window {
    om48459_42601?: {
      reset?: () => void;
    };
  }
}

export const resetOptInMonster = (): void => {
  window.om48459_42601?.reset?.();
};
