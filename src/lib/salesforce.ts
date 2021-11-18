declare global {
  interface Window {
    piTracker: (url?: string) => void;
  }
}

// log the pageview with their URL
export const pageview = (url: string): void => {
  window.piTracker(url);
};
