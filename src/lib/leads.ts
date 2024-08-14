import { School } from '../models/school';

export type LeadPayload = {
  school: School;
  emailAddress: string;
  firstName?: string;
  lastName?: string;
  telephoneNumber?: string;
  emailOptIn?: boolean;
  smsOptIn?: boolean;
  gclid?: string;
  msclkid?: string;
  marketing?: {
    source: string | null;
    medium: string | null;
    campaign: string | null;
    content: string | null;
    term: string | null;
  };
  courses?: string[];
};

type ClientData = {
  ipAddress: string | null;
  userAgent: string | null;
};

export const addLead = async (payload: LeadPayload, clientData?: ClientData): Promise<AddLeadResponse> => {
  const url = 'https://leads.qccareerschool.com/';

  if (payload.marketing && !(payload.marketing.source ?? payload.marketing.medium ?? payload.marketing.campaign ?? payload.marketing.content ?? payload.marketing.term)) {
    // no marketing parameters were supplied
    payload.marketing = undefined;
  }

  if (payload.courses && payload.courses.length === 0) {
    // no courses were supplied
    payload.courses = undefined;
  }

  const headers: Record<string, string> = { 'Content-Type': 'application/json' };
  if (clientData?.ipAddress) {
    headers['X-Forwarded-For'] = clientData.ipAddress;
  }
  if (clientData?.userAgent) {
    headers['user-agent'] = clientData.userAgent;
  }

  const response = await fetch(url, {
    method: 'POST',
    headers,
    body: JSON.stringify(payload),
  });
  if (!response.ok) {
    throw Error(response.statusText);
  }

  const responseBody: unknown = await response.json();
  if (!isAddLeadResponse(responseBody)) {
    throw Error('Invalid response');
  }

  return responseBody;
};

type AddLeadResponse = { leadId: string };

const isAddLeadResponse = (obj: unknown): obj is AddLeadResponse => {
  return obj !== null && typeof obj === 'object' && 'leadId' in obj && typeof obj.leadId === 'string';
};
