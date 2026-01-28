import type { Result } from 'generic-result-type';
import { failure, success } from 'generic-result-type';

import type { Lead } from '@/domain/lead';
import { isLead } from '@/domain/lead';

export const getLead = async (leadId: string): Promise<Result<Lead>> => {
  const url = `https://leads.qccareerschool.com/leads/${leadId}`;
  const response = await fetch(url);
  if (!response.ok) {
    return failure(Error('Unable to fetch lead'));
  }
  const json: unknown = await response.json();
  if (!isLead(json)) {
    return failure(Error('Unexpected response'));
  }
  return success(json);
};
