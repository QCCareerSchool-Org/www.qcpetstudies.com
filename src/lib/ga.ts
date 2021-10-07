declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
  }
}

// log the pageview with their URL
export const pageview = (url: string): void => {
  window.gtag('config', process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS, {
    page_path: url, // eslint-disable-line camelcase
  });
};

type EventParams = {
  action: string;
  params: unknown;
};

// log specific events happening.
export const event = ({ action, params }: EventParams): void => {
  window.gtag('event', action, params);
};
