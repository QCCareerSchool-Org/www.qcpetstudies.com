'use client';

import type { FC, MouseEventHandler, PropsWithChildren } from 'react';

type Props = {
  className?: string;
};

export const LivechatLink: FC<PropsWithChildren<Props>> = ({ className, children }) => {
  const handleChatLinkClick: MouseEventHandler<HTMLAnchorElement> = e => {
    e.preventDefault();
    window.LC_API?.open_chat_window?.();
  };

  return <a onClick={handleChatLinkClick} href="#" className={className}>{children}</a>;
};
