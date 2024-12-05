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
    if (countRef.current > 0) { // don't run the first time
      if (pathname) {
        let url = `https://www.qcpetstudies.com${pathname}`;
        if (searchParams?.toString().length) {
          url += `?${searchParams?.toString()}`;
        }
        const title = document.title;
        brevoPageview(title, url, pathname);
      }
      resetOptInMonster();
    }
    countRef.current++;
  }, [ pathname, searchParams ]);
  return null;
};
