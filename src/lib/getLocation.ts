import { GetServerSidePropsContext } from 'next';

import { Location } from '../models/location';
import { getIpAddress } from './getIpAddress';
import { lookupLocation } from './lookupLocation';

const getStoredLocation = (context: GetServerSidePropsContext): Location | undefined => {
  const storedLocation: string | undefined = context.req.cookies.location;
  if (typeof storedLocation !== 'undefined') {
    try {
      const data = JSON.parse(storedLocation);
      if (typeof data.countryCode === 'string' && (typeof data.provinceCode === 'string' || data.provinceCode === null)) {
        return {
          countryCode: data.countryCode,
          provinceCode: data.provinceCode,
        };
      }
    } catch (err) { /* ignore */ }
  }
};

const getLocationByIpAddress = async (context: GetServerSidePropsContext): Promise<Location | undefined> => {
  const ipAddress = getIpAddress(context);
  if (typeof ipAddress !== 'undefined') {
    return lookupLocation(ipAddress);
  }
};

const storeLocation = (context: GetServerSidePropsContext, location: Location): void => {
  context.res.setHeader('Set-Cookie', `location=${JSON.stringify(location)}; Path=/; Secure; SameSite=Strict`);
};

export const getLocation = async (context: GetServerSidePropsContext): Promise<Location> => {
  const storedLocation = getStoredLocation(context);
  if (typeof storedLocation !== 'undefined') {
    return storedLocation;
  }

  const locationByIpAddress = await getLocationByIpAddress(context);
  if (typeof locationByIpAddress !== 'undefined') {
    storeLocation(context, locationByIpAddress);
    return locationByIpAddress;
  }

  return {
    countryCode: 'US',
    provinceCode: 'MD',
  };
};
