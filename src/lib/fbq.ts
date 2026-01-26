import type { Enrollment } from '@/domain/enrollment';

interface Options {
  eventID?: string;
}

interface FBQ {
  (action: 'track', type: 'Lead', params?: Record<string, never>, options?: Options): void;
  (action: 'track', type: 'PageView', params?: { page_url?: string }, options?: Options): void;
  (action: 'track', type: 'Purchase', params: { value: number; currency: string }, options: Options): void;
  (action: 'trackCustom', type: 'VirtualPageView', params: { url: string }): void;
}

declare global {
  interface Window {
    fbq?: FBQ;
  }
}

// log the page view with a specific URL
export const fbqPageview = (url?: string): void => {
  if (typeof url !== 'undefined') {
    window.fbq?.('track', 'PageView', { page_url: url }); // eslint-disable-line camelcase
    return;
  }
  window.fbq?.('track', 'PageView');
};

// log the conversion
export const fbqLead = (eventId?: string): void => {
  if (typeof eventId !== 'undefined') {
    window.fbq?.('track', 'Lead', undefined, { eventID: eventId });
    return;
  }
  window.fbq?.('track', 'Lead');
};

// log a sale
export const fbqSale = (enrollment: Enrollment): void => {
  window.fbq?.('track', 'Purchase', { value: enrollment.cost, currency: enrollment.currencyCode }, { eventID: enrollment.id.toString() });
};
