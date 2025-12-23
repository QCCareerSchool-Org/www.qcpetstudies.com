import type { FC, PropsWithChildren, ReactNode } from 'react';

import { Footer } from './footer';
import { Header } from './header';
import { TaxCreditsModal } from '../taxCreditsModal';
import { BrevoConversations } from '@/scripts/brevoCoversations';

interface Props {
  date: number;
  countryCode: string;
  footer?: ReactNode;
}

export const SiteLayout: FC<PropsWithChildren<Props>> = ({ date, countryCode, footer, children }) => (
  <>
    <Header date={date} countryCode={countryCode} />
    <main className="flex-shrink-0">{children}</main>
    {footer ?? <Footer countryCode={countryCode} />}
    {process.env.BREVO_CONVERSATIONS_ID && <BrevoConversations conversationsId={process.env.BREVO_CONVERSATIONS_ID} />}
    <TaxCreditsModal />
  </>
);
