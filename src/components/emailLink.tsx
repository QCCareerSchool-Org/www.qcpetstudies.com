'use client';

import type { FC } from 'react';
import { useEffect, useRef } from 'react';

export const EmailLink: FC = () => {
  const ref = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (ref.current) {
      // eslint-disable-next-line no-useless-concat
      const emailAddress = 'info' + '@' + 'qcpetstudies.com';
      ref.current.href = `mailto:${emailAddress}`;
      ref.current.innerHTML = emailAddress;
    }
  }, []);

  return <a ref={ref} />;
};
