'use client';

import type { FC } from 'react';

import { useOrigin } from '@/hooks/useOrigin';

export const CurrentPageInput: FC = () => {
  const origin = useOrigin();
  return <input type="hidden" name="currentPage" value={origin} />;
};
