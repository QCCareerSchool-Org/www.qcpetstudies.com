import 'server-only';

import type { Brevo } from '@getbrevo/brevo';
import { BrevoClient } from '@getbrevo/brevo';

const apiKey = process.env.BREVO_API_KEY ?? '';

const brevo = new BrevoClient({ apiKey, baseUrl: 'https://proxy.qccareerschool.com/brevo/v3/', headers: { 'X-Secret': process.env.PROXY_SECRET } });

interface CustomAttributes {
  STATUS_PET_LEAD?: boolean;
  STATUS_PET_STUDENT?: boolean;
}

export const createBrevoContact = async (
  emailAddress: string,
  firstName?: string,
  lastName?: string,
  countryCode?: string,
  provinceCode?: string | null,
  attributes?: CustomAttributes,
  listIds?: number[],
  abortSignal?: AbortSignal,
): Promise<boolean> => {
  const request: Brevo.CreateContactRequest = {
    email: emailAddress,
    listIds,
    updateEnabled: true,
    attributes: {
      ...attributes,
      ...(typeof firstName !== 'undefined' ? { FIRSTNAME: firstName } : undefined),
      ...(typeof lastName !== 'undefined' ? { LASTNAME: lastName } : undefined),
      ...(typeof countryCode !== 'undefined' ? { COUNTRY_CODE: countryCode.toLocaleUpperCase() } : undefined),
      ...(typeof provinceCode !== 'undefined' ? { PROVINCE_CODE: provinceCode?.toLocaleUpperCase() ?? '' } : undefined),
    },
  };

  const response = await brevo.contacts.createContact(request, { abortSignal });

  return typeof response?.id !== 'undefined';
};

export const sendBrevoEmail = async (
  templateId: number,
  emailAddress: string,
  firstName?: string,
  lastName?: string,
  abortSignal?: AbortSignal,
): Promise<string | undefined> => {
  const name = firstName && `${firstName}${lastName ? ` ${lastName}` : ''}`;

  const request: Brevo.SendTransacEmailRequest = {
    to: [ { email: emailAddress, name } ],
    templateId,
  };

  const response = await brevo.transactionalEmails.sendTransacEmail(request, { abortSignal });

  return response.messageId;
};

export const getBrevoContactId = (encoded: string): number | undefined => {
  const decoded = Buffer.from(encoded, 'base64').toString('utf8');
  const parts = decoded.split('#');
  if (parts.length === 2) {
    const contactId = Number(parts[1]);

    if (Number.isInteger(contactId)) {
      return contactId;
    }
  }
};

export const addToBrevoList = async (contactId: number, listId: number, abortSignal?: AbortSignal): Promise<void> => {
  const request: Brevo.UpdateContactRequest = {
    identifier: contactId,
    identifierType: 'contact_id',
    listIds: [ listId ],
  };

  await brevo.contacts.updateContact(request, { abortSignal });
};

interface BrevoContact {
  id: number;
  email: string;
  firstName?: string;
  lastName?: string;
}

interface BrevoContactAttributes {
  FIRSTNAME?: string;
  LASTNAME?: string;
}

export const getBrevoContact = async (contactId: number, abortSignal?: AbortSignal):
Promise<BrevoContact | undefined> => {
  const response = await brevo.contacts.getContactInfo(
    { identifier: contactId, identifierType: 'contact_id' },
    { abortSignal },
  );
  const attributes = response.attributes as BrevoContactAttributes;

  return {
    id: contactId,
    email: response.email ?? '',
    firstName: attributes.FIRSTNAME,
    lastName: attributes.LASTNAME,
  };
};
