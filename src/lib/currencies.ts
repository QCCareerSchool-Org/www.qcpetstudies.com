const gbpCountries = [ 'GB', 'IM', 'GG', 'JE', 'GS' ];

/** determines if we charge people from a country in pounds sterling */
export const gbpCountry = (countryCode: string | null): boolean => {
  if (countryCode === null) {
    return false;
  }
  return gbpCountries.includes(countryCode.toUpperCase());
};

const audCountries = [ 'AU', 'CX', 'CC', 'NR', 'NF', 'HM' ];

/** determines if we charge people from a country in Australian dollars */
export const audCountry = (countryCode: string | null): boolean => {
  if (countryCode === null) {
    return false;
  }
  return audCountries.includes(countryCode.toUpperCase());
};

const nzdCountries = [ 'NZ', 'TK', 'NU', 'PN' ];

/** determines if we charge people from a country in Australian dollars */
export const nzdCountry = (countryCode: string | null): boolean => {
  if (countryCode === null) {
    return false;
  }
  return nzdCountries.includes(countryCode.toUpperCase());
};
