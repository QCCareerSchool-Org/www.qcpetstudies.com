export const externship = (countryCode: string, provinceCode: string | null): boolean => {
  return countryCode === 'US' || (countryCode === 'CA' && provinceCode !== 'ON');
};
