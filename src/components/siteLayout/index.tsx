import type { FC, PropsWithChildren } from 'react';

import { Footer } from './footer';
import { Header } from './header';
import { TaxCreditsModal } from '../taxCreditsModal';
import { BrevoConversations } from '@/scripts/brevoConversations';

interface Props {
  date: number;
  countryCode: string;
}

export const SiteLayout: FC<PropsWithChildren<Props>> = ({ date, countryCode, children }) => (
  <>
    <Header date={date} countryCode={countryCode} />
    <main className="flex-shrink-0">{children}</main>
    <Footer countryCode={countryCode} />
    {process.env.BREVO_CONVERSATIONS_ID && process.env.BREVO_GROUP_ID && <BrevoConversations conversationsId={process.env.BREVO_CONVERSATIONS_ID} groupId={process.env.BREVO_GROUP_ID} />}
    <TaxCreditsModal />
  </>
);
