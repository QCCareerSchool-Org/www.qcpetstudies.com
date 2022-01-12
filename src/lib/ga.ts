declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
  }
}

// log the page view with a specific URL
export const gaPageview = (url: string): void => {
  window.gtag('config', process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS, {
    page_path: url, // eslint-disable-line camelcase
  });
};

// log an event
export const gaEvent = (action: string, params?: unknown): void => {
  window.gtag('event', action, params);
};
