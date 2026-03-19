export interface Lead {
  leadId: string;
  emailAddress: string;
  telephoneNumber: string | null;
  firstName: string | null;
  lastName: string | null;
  city: string | null;
  countryCode: string | null;
  provinceCode: string | null;
  ip: string | null;
  /** milliseconds since midnight, January 1, 1970 UTC */
  created: number;
}

export const isLead = (obj: unknown): obj is Lead => {
  return typeof obj === 'object' && obj !== null &&
    'leadId' in obj && typeof obj.leadId === 'string' &&
    'emailAddress' in obj && typeof obj.emailAddress === 'string' &&
    'telephoneNumber' in obj && (typeof obj.telephoneNumber === 'string' || obj.telephoneNumber === null) &&
    'firstName' in obj && (typeof obj.firstName === 'string' || obj.firstName === null) &&
    'lastName' in obj && (typeof obj.lastName === 'string' || obj.lastName === null) &&
    'city' in obj && (typeof obj.city === 'string' || obj.city === null) &&
    'countryCode' in obj && (typeof obj.countryCode === 'string' || obj.countryCode === null) &&
    'provinceCode' in obj && (typeof obj.provinceCode === 'string' || obj.provinceCode === null) &&
    'ip' in obj && (typeof obj.ip === 'string' || obj.ip === null) &&
    'created' in obj && typeof obj.created === 'number';
};
