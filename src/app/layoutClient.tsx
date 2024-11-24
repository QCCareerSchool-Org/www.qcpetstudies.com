'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import type { FC } from 'react';
import { useEffect, useRef } from 'react';

import { brevoPageview } from '@/lib/brevo';
import { fbqPageview } from '@/lib/fbq';
import { gaPageview } from '@/lib/ga';
import { resetOptInMonster } from '@/lib/optInMonster';
import { getRegistration } from '@/lib/serviceWorker';
import { uetPageview } from '@/lib/uet';

export const LayoutClient: FC = () => {
  const countRef = useRef(0);
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    void getRegistration();
  }, []);

  useEffect(() => {
    if (pathname) {
      let url = `https://www.qcdesignschool.com${pathname}`;
      if (searchParams?.toString().length) {
        url += `?${searchParams?.toString()}`;
      }

      gaPageview(url);
      uetPageview(url);
      fbqPageview(url);

      if (countRef.current > 0) { // don't run brevo the first time
        const title = document.title;
        try {
          const parsed = new URL(title);
          brevoPageview(title, url, parsed.pathname);
        } catch (err) {
          console.error(err);
        }
      }
      resetOptInMonster();
      countRef.current++;
    }
  }, [ pathname, searchParams ]);
  return null;
};
