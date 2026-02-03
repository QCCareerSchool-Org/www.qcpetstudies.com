'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import type { FC } from 'react';
import { useEffect, useRef } from 'react';

import { brevoPageview } from '@/lib/brevo';
import { resetOptInMonster } from '@/lib/optInMonster';

export const LayoutClient: FC = () => {
  const countRef = useRef(0);
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const { protocol, host } = window.location;
    const domain = `${protocol}//${host}`;

    let url = `${domain}${pathname}`;
    const stringSearchParams = searchParams.toString();
    if (stringSearchParams) {
      url += `?${stringSearchParams}`;
    }

    if (countRef.current > 0) { // don't run the first time because it's already being tracked in the snippet
      const title = document.title;
      brevoPageview(title, url, pathname);

      resetOptInMonster();
    }

    countRef.current++;
  }, [ pathname, searchParams ]);
  return null;
};
