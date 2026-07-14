import { fetchWithRetry } from '../fetchWithRetry';

const activeCampaignAccount = process.env.ACTIVE_CAMPAIGN_ACCOUNT;
if (!activeCampaignAccount) {
  throw Error('Environment variable ACTIVE_CAMPAIGN_ACCOUNT not found');
}

const apiToken = process.env.ACTIVE_CAMPAIGN_API_TOKEN;
if (!apiToken) {
  throw Error('Environment variable ACTIVE_CAMPAIGN_API_TOKEN not found');
}

const baseUrl = `https://${activeCampaignAccount}.api-us1.com/api/3`;

export const activeCampaignFetch = async (path: string, options: RequestInit = {}): Promise<Response> => {
  const headers = new Headers(options.headers);
  headers.set('Api-Token', apiToken);
  return fetchWithRetry(`${baseUrl}${path}`, { ...options, headers });
};
