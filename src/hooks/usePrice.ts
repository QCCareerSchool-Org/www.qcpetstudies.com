import { useEffect, useState } from 'react';
import { lookupPrices } from '../lib/lookupPrices';

import type { Price } from '../models/price';

export const usePrice = (courses: string[], countryCode?: string, provinceCode?: string | null): Price | undefined => {
  const [ state, dispatch ] = useState<Price>();

  useEffect(() => {
    if (countryCode === undefined || provinceCode === undefined) {
      dispatch(undefined);
    } else {
      lookupPrices(courses, countryCode, provinceCode).then(p => {
        dispatch(p);
      }).catch(() => { /* empty */ });
    }
  }, [ courses, countryCode, provinceCode ]);

  return state;
};
