interface Properties {
  FIRSTNAME?: string;
  LASTNAME?: string;
  COUNTRY_CODE?: string;
  PROVINCE_CODE?: string;
  STATUS_PET_LEAD?: true;
  STATUS_PET_STUDENT?: true;
}

declare global {
  interface Window {
    sendinblue?: {
      page: (...args: unknown[]) => void;
      identify: (emailAddress: string, properties: Properties) => void;
    };
  }
}

// log the page view with a specific URL
export const brevoPageview = (title: string, url: string, path: string): void => {
  window.sendinblue?.page(title, {
    ma_title: title, // eslint-disable-line camelcase
    ma_url: url, // eslint-disable-line camelcase
    ma_path: path, // eslint-disable-line camelcase
  });
};
export const brevoIdentifyLead = (emailAddress: string, countryCode: string | null, provinceCode: string | null, firstName: string | null, lastName: string | null): void => {
  const properties: Properties = { STATUS_PET_LEAD: true };
  if (countryCode) {
    properties.COUNTRY_CODE = countryCode;
  }
  if (provinceCode) {
    properties.PROVINCE_CODE = provinceCode;
  }
  if (firstName) {
    properties.FIRSTNAME = firstName;
  }
  if (lastName) {
    properties.LASTNAME = lastName;
  }
  window.sendinblue?.identify(emailAddress, properties);
};

export const brevoIdentifyStudent = (emailAddress: string, countryCode?: string, provinceCode?: string, firstName?: string, lastName?: string): void => {
  const properties: Properties = {
    FIRSTNAME: firstName,
    LASTNAME: lastName,
    STATUS_PET_STUDENT: true,
  };
  if (countryCode) {
    properties.COUNTRY_CODE = countryCode;
  }
  if (provinceCode) {
    properties.PROVINCE_CODE = provinceCode;
  }
  window.sendinblue?.identify(emailAddress, properties);
};
