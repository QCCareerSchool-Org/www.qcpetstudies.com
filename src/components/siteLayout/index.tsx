import type { FC, PropsWithChildren } from 'react';

import { Footer } from './footer';
import { Header } from './header';
import { BrevoConversations } from '@/scripts/brevoCoversations';

type Props = {
  date: number;
  countryCode: string;
};

export const SiteLayout: FC<PropsWithChildren<Props>> = ({ date, countryCode, children }) => (
  <>
    <Header date={date} countryCode={countryCode} />
    <main className="flex-shrink-0">{children}</main>
    <Footer countryCode={countryCode} />
    {process.env.BREVO_CONVERSATIONS_ID && <BrevoConversations conversationsId={process.env.BREVO_CONVERSATIONS_ID} />}
  </>
);
