/* eslint-disable custom/no-window-outside-effects */
import type { CurrencyCode } from '@/domain/currencyCode';
import type { Enrollment } from '@/domain/enrollment';

interface Content {
  id: string;
  name: string;
  content_type: string;
  quantity?: number;
  amount?: number;
  currency?: CurrencyCode;
}

interface EventProps {
  type: string;
  amount?: number;
  currency?: CurrencyCode;
  contents?: Content[];
}

interface EventOptions {
  custom_event_name: string;
  event_id: string;
}

declare global {
  interface Window {
    oaiq?: (type: 'measure', eventName: string, eventProps?: EventProps, eventOptions?: EventOptions) => void;
  }
}

export const oaiqLead = (): void => {
  window.oaiq?.('measure', 'lead_created', { type: 'customer_action' });
};

export const oaiqSale = (enrollment: Enrollment): void => {
  window.oaiq?.('measure', 'registration_completed', {
    type: 'customer_action',
    amount: enrollment.cost,
    currency: enrollment.currencyCode,
  });
};
