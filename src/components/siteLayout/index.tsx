import type { FC, PropsWithChildren } from 'react';

import { Footer } from './footer';
import { Header } from './header';
import { TaxCreditsModal } from '../taxCreditsModal';
import type { UserValues } from '@/domain/userValues';
import { LiveChat } from '@/scripts/liveChat';

interface Props {
  date: number;
  countryCode: string;
  userValues?: UserValues;
}

export const SiteLayout: FC<PropsWithChildren<Props>> = ({ date, countryCode, userValues, children }) => (
  <>
    <Header date={date} countryCode={countryCode} />
    <main className="flex-shrink-0">{children}</main>
    <Footer countryCode={countryCode} />
    {process.env.LIVECHAT_LICENSE && <LiveChat group={process.env.LIVECHAT_GROUP_ID} license={process.env.LIVECHAT_LICENSE} userValues={userValues} />}
    <TaxCreditsModal />
  </>
);
