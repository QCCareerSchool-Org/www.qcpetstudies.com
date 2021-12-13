import { Location } from '../models/location';

export const lookupLocation = async (ipAddress: string): Promise<Location> => {
  try {
    const url = `https://api.qccareerschool.com/geoLocation/clientIp?q=${encodeURIComponent(ipAddress)}`;
    const response = await fetch(url);
    if (!response.ok) {
      throw Error('Unable to fetch location');
    }
    return await response.json();
  } catch (err) {
    return { countryCode: 'US', provinceCode: 'MD' };
  }
};
