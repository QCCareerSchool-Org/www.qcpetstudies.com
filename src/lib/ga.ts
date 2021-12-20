declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
  }
}

// log the pageview with their URL
export const gaPageview = (url: string): void => {
  window.gtag('config', process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS, {
    page_path: url, // eslint-disable-line camelcase
  });
};

type EventParams = {
  event_category?: string; // eslint-disable-line camelcase
  event_label?: string; // eslint-disable-line camelcase
  value?: number;
};

// log specific events happening.
export const gaEvent = (action: string, params?: EventParams): void => {
  window.gtag('event', action, params);
};
