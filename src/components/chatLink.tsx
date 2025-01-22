'use client';

import type { FC, MouseEventHandler, PropsWithChildren } from 'react';

type Props = {
  className?: string;
  focus?: boolean;
};

export const ChatLink: FC<PropsWithChildren<Props>> = ({ className, focus, children }) => {
  const handleChatLinkClick: MouseEventHandler<HTMLAnchorElement> = e => {
    e.preventDefault();
    window.BrevoConversations?.('openChat', focus);
  };

  return <a onClick={handleChatLinkClick} href="#" className={className}>{children}</a>;
};
