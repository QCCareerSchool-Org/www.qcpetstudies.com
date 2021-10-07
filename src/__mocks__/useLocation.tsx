import { Location } from '../models/location';

export const useLocation = jest.fn((): Location => ({
  countryCode: 'US',
  provinceCode: 'MD',
}));
