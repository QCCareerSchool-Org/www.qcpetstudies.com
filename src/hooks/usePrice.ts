import { useEffect, useState } from 'react';
import { lookupPrices } from '@/lib/lookupPrices';

import type { Price } from '@/models/price';

export const usePrice = (courses: string[]): Price | undefined => {
  const [ state, dispatch ] = useState<Price>();

  useEffect(() => {

    lookupPrices(courses).then(p => {
      dispatch(p);
    }).catch(() => { /* empty */ });

  }, [ courses ]);

  return state;
};
