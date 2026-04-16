import type { Result } from 'generic-result-type';
import { failure, success } from 'generic-result-type';

import type { UUID } from './uuid';
import { isUUID } from './uuid';
import type { Lead } from '@/domain/lead';
import { isLead } from '@/domain/lead';

export const fetchLead = async (leadId: UUID, signal?: AbortSignal, firewallBypassSecret?: string): Promise<Result<Lead>> => {
  try {
    const url = `https://leads.qccareerschool.com/leads/${encodeURIComponent(leadId)}`;
    const headers = firewallBypassSecret ? { 'X-Firewall-Bypass-Secret': firewallBypassSecret } : undefined;

    const response = await fetch(url, { headers, signal });
    if (!response.ok) {
      return failure(Error('Unable to fetch lead'));
    }

    const json: unknown = await response.json();
    if (!isLead(json)) {
      return failure(Error('Unexpected response'));
    }

    return success(json);

  } catch (err) {
    return failure(err instanceof Error ? err : Error(String(err)));
  }
};

export const fetchLeadFromString = async (leadId: string): Promise<Result<Lead>> => {
  if (!isUUID(leadId)) {
    return failure(Error('Invalid lead id'));
  }

  return fetchLead(leadId);
};
