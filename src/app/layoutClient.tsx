'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import type { FC } from 'react';
import { useEffect, useRef } from 'react';

import { resetOptInMonster } from '@/lib/optInMonster';

export const LayoutClient: FC = () => {
  const countRef = useRef(0);
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (countRef.current > 0) { // don't run the first time because it's already being tracked in the snippet
      resetOptInMonster();
    }

    countRef.current++;
  }, [ pathname, searchParams ]);
  return null;
};
