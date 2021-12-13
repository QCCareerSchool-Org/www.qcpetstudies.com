import fetch from 'isomorphic-unfetch';
import Cookies from 'js-cookie';
import React, { ReactElement, ReactNode, useEffect, useState } from 'react';

import { Location } from '../models/location';

export const LocationStateContext = React.createContext<Location | null | undefined>(undefined);
export const LocationDispatchContext = React.createContext<((location: Location) => void) | undefined>(undefined);

type Props = {
  children: ReactNode;
};

const getLocation = async (): Promise<Location> => {
  const storedLocation = Cookies.get('location');
  if (storedLocation) {
    try {
      const parsed = JSON.parse(storedLocation);
      if (typeof parsed.countryCode === 'string' && (typeof parsed.provinceCode === 'string' || parsed.provinceCode === null)) {
        return parsed;
      }
    } catch (err) { /* ignore */ }
  }
  try {
    const url = 'https://api.qccareerschool.com/geoLocation/ip';
    const response = await fetch(url);
    if (!response.ok) {
      throw Error('Unable to fetch location');
    }
    const fetchedLocation = await response.json();
    Cookies.set('location', JSON.stringify(fetchedLocation), { secure: true, sameSite: 'strict' });
    return fetchedLocation;
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
