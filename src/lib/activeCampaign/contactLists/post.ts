import type { Result } from 'generic-result-type';
import { failure, success } from 'generic-result-type';

import { stringify } from '../../json';
import { activeCampaignFetch } from '../index';

export enum ContactListStatus {
  ACTIVE = 1,
  UNSUBSCRIBED = 2,
};

interface ContactList {
  contact: bigint;
  list: bigint;
  status: ContactListStatus;
}

export const postContactLists = async (contactList: ContactList, signal?: AbortSignal): Promise<Result> => {
  try {
    const body = { contactList };

    const response = await activeCampaignFetch('/contactLists', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: stringify(body),
      signal,
    });

    if (!response.ok) {
      return failure(Error(response.statusText));
    }

    return success();

  } catch (err) {
    if (!signal?.aborted) {
      console.error(err);
    }
    return failure(err instanceof Error ? err : Error(String(err)));
  }
};
