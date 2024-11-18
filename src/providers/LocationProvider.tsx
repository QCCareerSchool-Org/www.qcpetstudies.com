'use client';

import Cookies from 'js-cookie';
import type { FC, PropsWithChildren } from 'react';
import { createContext, useEffect, useState } from 'react';

import { Location } from '@/models/location';

export const LocationStateContext = createContext<Location | null | undefined>(undefined);
export const LocationDispatchContext = createContext<((location: Location) => void) | undefined>(undefined);

const isLocation = (obj: unknown): obj is Location => {
  if (typeof obj === 'object' && obj !== null) {
    if ('countryCode' in obj && 'provinceCode' in obj) {
      const location = obj as { countryCode: unknown; provinceCode: unknown };
      if (typeof location.countryCode === 'string' && (typeof location.provinceCode === 'string' || location.provinceCode === null)) {
        return true;
      }
    }
  }
  return false;
};

const getLocation = async (): Promise<Location> => {
  const storedLocation = Cookies.get('location');
  if (storedLocation) {
    try {
      const parsed: unknown = JSON.parse(storedLocation);
      if (isLocation(parsed)) {
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
    const fetchedLocation: unknown = await response.json();
    const location = isLocation(fetchedLocation) ? fetchedLocation : { countryCode: 'US', provinceCode: 'MD' };
    Cookies.set('location', JSON.stringify(location), { secure: true, sameSite: 'strict' });
    return location;
  } catch (err) {
    return { countryCode: 'US', provinceCode: 'MD' };
  }
};

export const LocationProvider: FC<PropsWithChildren> = ({ children }) => {
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
