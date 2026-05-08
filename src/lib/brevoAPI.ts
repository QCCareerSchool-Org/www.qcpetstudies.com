import 'server-only';

import type { Brevo } from '@getbrevo/brevo';
import { BrevoClient } from '@getbrevo/brevo';
import type { Result } from 'generic-result-type';
import { failure, success } from 'generic-result-type';

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
): Promise<Result> => {
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
  try {
    const response = await brevo.contacts.createContact(request, { abortSignal });
    if (typeof response?.id !== 'undefined') {
      return success();
    }
    return failure(Error('Failed to create contact'));
  } catch (err) {
    if (abortSignal?.aborted) {
      return failure(Error('Aborted'));
    }
    return failure(err instanceof Error ? err : Error(String(err)));
  }
};

export const sendBrevoEmail = async (
  templateId: number,
  emailAddress: string,
  firstName?: string,
  lastName?: string,
  abortSignal?: AbortSignal,
): Promise<Result<string>> => {
  const name = firstName && `${firstName}${lastName ? ` ${lastName}` : ''}`;

  const request: Brevo.SendTransacEmailRequest = {
    to: [ { email: emailAddress, name } ],
    templateId,
  };

  try {
    const response = await brevo.transactionalEmails.sendTransacEmail(request, { abortSignal });
    if (response.messageId) {
      return success(response.messageId);
    }
    return failure(Error('Message ID is undefined'));
  } catch (err) {
    if (abortSignal?.aborted) {
      return failure(Error('Aborted'));
    }
    return failure(err instanceof Error ? err : Error(String(err)));
  }
};

export const addToBrevoList = async (contactId: number, listId: number, abortSignal?: AbortSignal): Promise<Result> => {
  const request: Brevo.UpdateContactRequest = {
    identifier: contactId,
    identifierType: 'contact_id',
    listIds: [ listId ],
  };

  try {
    await brevo.contacts.updateContact(request, { abortSignal });
    return success();
  } catch (err) {
    if (abortSignal?.aborted) {
      return failure(Error('Aborted'));
    }
    return failure(err instanceof Error ? err : Error(String(err)));
  }
};

interface BrevoContact {
  id: number;
  emailAddress: string;
  firstName?: string;
  lastName?: string;
}

export const getBrevoContact = async (contactId: number, abortSignal?: AbortSignal): Promise<Result<BrevoContact>> => {
  const request: Brevo.contacts.GetContactInfoRequest = {
    identifier: contactId,
    identifierType: 'contact_id',
  };

  try {
    const response = await brevo.contacts.getContactInfo(request, { abortSignal });
    const attributes = response.attributes as { FIRSTNAME?: string; LASTNAME?: string };

    return success({
      id: contactId,
      emailAddress: response.email ?? '',
      firstName: attributes.FIRSTNAME,
      lastName: attributes.LASTNAME,
    });
  } catch (err) {
    if (abortSignal?.aborted) {
      return failure(Error('Aborted'));
    }
    return failure(err instanceof Error ? err : Error(String(err)));
  }
};
