import type { FC, PropsWithChildren } from 'react';

import { Header } from './header';
import { LiveChat } from '@/scripts/liveChat';

type Props = {
  date: number;
  countryCode: string;
};

export const SiteLayout: FC<PropsWithChildren<Props>> = ({ date, countryCode, children }) => (
  <>
    <Header date={date} countryCode={countryCode} />
    <main className="flex-shrink-0">{children}</main>
    <LiveChat license={1056788} group={18} />
  </>
);
