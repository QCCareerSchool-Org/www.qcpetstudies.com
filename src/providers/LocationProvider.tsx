import fetch from 'isomorphic-unfetch';
import React, { ReactElement, ReactNode, useEffect, useState } from 'react';

import { Location } from '../models/location';

export const LocationStateContext = React.createContext<Location | null | undefined>(undefined);
export const LocationDispatchContext = React.createContext<((location: Location) => void) | undefined>(undefined);

type Props = {
  children: ReactNode;
};

const getLocation = async (): Promise<Location> => {
  if (window.sessionStorage) {
    const storedCountryCode = sessionStorage.getItem('countryCode');
    if (storedCountryCode !== null) {
      return { countryCode: storedCountryCode, provinceCode: sessionStorage.getItem('provinceCode') };
    }
  }
  try {
    const url = 'https://api.qccareerschool.com/geoLocation/clientIp?q=';
    const response = await fetch(url);
    if (!response.ok) {
      throw Error('Unable to fetch location');
    }
    return await response.json();
  } catch (err) {
    return { countryCode: 'US', provinceCode: 'MD' };
  }
};

export const LocationProvider = ({ children }: Props): ReactElement => {
  const [ state, dispatch ] = useState<Location | null>(null);

  useEffect(() => {
    getLocation().then(location => {
      dispatch(location);
    }).catch(() => { /* empty */ });
  }, []);

  return (
    <LocationStateContext.Provider value={state}>
      <LocationDispatchContext.Provider value={dispatch}>
        {children}
      </LocationDispatchContext.Provider>
    </LocationStateContext.Provider>
  );
};
