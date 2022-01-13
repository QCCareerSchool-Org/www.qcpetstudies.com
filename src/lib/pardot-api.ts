/**
 * Pardot API
 *
 * ONLY USE ON THE BACK END!
 *
 * Example:
 *
 * type Props = {
 *   data: VisitorData | null;
 * };
 *
 * export const getServerSideProps: GetServerSideProps<Props> = async ({ req }) => {
 *   const visitorId = req.cookies.visitor_id947642;
 *   if (visitorId) {
 *     try {
 *       const accessToken = await getPardotAccessToken();
 *       const data = await getPardotVisitor(parseInt(visitorId, 10), accessToken.access_token);
 *       return { props: { data } };
 *     } catch (err) {
 *       console.error(err);
 *     }
 *   }
 *   return { props: { data: null } };
 * };
 */

import fs from 'fs';
import jwt from 'jsonwebtoken';

const key = fs.readFileSync('./key.pem');
const passphrase = process.env.SALESFORCE_KEY_PASSPHRASE;

const authDomain = 'https://login.salesforce.com';
const appId = process.env.SALESFORCE_APP_ID;
const user = process.env.SALESFORCE_USERNAME;

/**
 * Asynchronously sign the given payload into a JSON web token string payload
 * @param payload the payload to sign, could be a literal, buffer, or string
 * @param secretOrPrivateKey either the secret for HMAC algorithms, or the PEM encoded private key for RSA and ECDSA.
 * @param options the options for the signature
 * @returns The JSON web token string
 */
export const createJWT = async (payload: string | Record<string, unknown> | Buffer, secretOrPrivateKey: jwt.Secret, options: jwt.SignOptions): Promise<string> => {
  return new Promise((resolve, reject) => {
    jwt.sign(payload, secretOrPrivateKey, options, (err, result) => {
      if (err) {
        return reject(err);
      }
      if (typeof result === 'undefined') {
        return reject(Error('unable to create jwt'));
      }
      resolve(result);
    });
  });
};

export const createPardotJWT = async (): Promise<string> => {
  const payload = {
    iss: appId,
    aud: authDomain,
    sub: user,
  };
  return createJWT(payload, { key, passphrase: passphrase ?? '' }, { algorithm: 'RS256', expiresIn: 60 });
};

type AccessTokenResponse = {
  access_token: string; // eslint-disable-line camelcase
  scope: string;
  instance_url: string; // eslint-disable-line camelcase
  id: string;
  token_type: string; // eslint-disable-line camelcase
};

export const getPardotAccessToken = async (): Promise<AccessTokenResponse> => {
  const jsonWebToken = await createPardotJWT();
  const body = {
    grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer', // eslint-disable-line camelcase
    assertion: jsonWebToken,
    format: 'json',
  };
  const response = await fetch(`${authDomain}/services/oauth2/token`, {
    method: 'post',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams(body).toString(),
  });
  if (response.ok) {
    return response.json();
  }
  console.error(await response.json());
  throw Error('invalid response');
};

export const getVisitor = async (id: number, token: string): Promise<VisitorData> => {
  const url = `https://pi.pardot.com/api/visitor/version/4/do/read/id/${id}/`;
  const response = await fetch(`${url}?format=json`, {
    headers: {
      'Authorization': `Bearer ${token}`,
      'Pardot-Business-Unit-Id': '0Uv5f000000GmcFCAS',
    },
  });
  const data = await response.json();
  return data;
};

export const getProspectByEmail = async (emailAddress: string, token: string): Promise<ProspectData> => {
  const url = `https://pi.pardot.com/api/prospect/version/4/do/read/email/${encodeURIComponent(emailAddress)}`;
  const response = await fetch(`${url}?format=json`, {
    headers: {
      'Authorization': `Bearer ${token}`,
      'Pardot-Business-Unit-Id': '0Uv5f000000GmcFCAS',
    },
  });
  const data = await response.json();
  return data;
};

export const setProspectAsStudent = async (id: number, token: string): Promise<void> => {
  const url = `https://pi.pardot.com/api/prospect/version/4/do/update/id/${id}?is_a_Student=Yes`;
  await fetch(url, {
    method: 'post',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Pardot-Business-Unit-Id': '0Uv5f000000GmcFCAS',
    },
  });
};

export type VisitorData = {
  '@attributes': { stat: string; version: number };
  visitor: {
    id: number;
    prospect_id?: null; // eslint-disable-line camelcase
    prospect?: {
      id: number;
      first_name: string | null; // eslint-disable-line camelcase
      last_name: string | null; // eslint-disable-line camelcase
      email: string | null;
      company: string | null;
    };
    page_view_count: number; // eslint-disable-line camelcase
    ip_address: string | null; // eslint-disable-line camelcase
    hostname: string | null;
    /** string date */
    created_at: string; // eslint-disable-line camelcase
    /** string date */
    updated_at: string; // eslint-disable-line camelcase
    visitor_referrer?: { // eslint-disable-line camelcase
      id: number;
      referrer: string;
      vendor: string | null;
      type: string | null;
      query: string | null;
    };
    visitor_activities: { visitor_activity: unknown }; // eslint-disable-line camelcase
  };
};

export type ProspectData = {
  '@attributes': { stat: string; version: number };
  prospect: {
    id: number;
    campaign_id: number; // eslint-disable-line camelcase
    salutation: string | null;
    first_name: string | null; // eslint-disable-line camelcase
    last_name: string | null; // eslint-disable-line camelcase
    email: string;
    password: string | null;
    company: string | null;
    website: string | null;
    job_title: string | null; // eslint-disable-line camelcase
    department: string | null;
    country: string | null;
    address_one: string | null; // eslint-disable-line camelcase
    address_two: string | null; // eslint-disable-line camelcase
    city: string | null;
    state: string | null;
    territory: string | null;
    zip: string | null;
    phone: string | null;
    fax: string | null;
    source: string | null;
    annual_revenue: number | null; // eslint-disable-line camelcase
    employees: number | null;
    industry: string | null;
    years_in_business: number | null; // eslint-disable-line camelcase
    comments: string | null;
    notes: string | null;
    score: number;
    grade: string | null;
    /** string date */
    last_activity_at: string; // eslint-disable-line camelcase
    recent_interaction: string; // eslint-disable-line camelcase
    crm_lead_fid: string | null; // eslint-disable-line camelcase
    crm_contact_fid: string | null; // eslint-disable-line camelcase
    crm_owner_fid: string | null; // eslint-disable-line camelcase
    crm_account_fid: string | null; // eslint-disable-line camelcase
    salesforce_fid: string | null; // eslint-disable-line camelcase
    /** string date */
    crm_last_sync: string | null; // eslint-disable-line camelcase
    crm_url: string | null; // eslint-disable-line camelcase
    is_do_not_email: boolean | null; // eslint-disable-line camelcase
    is_do_not_call: boolean | null; // eslint-disable-line camelcase
    opted_out: boolean | null; // eslint-disable-line camelcase
    is_reviewed: boolean | null; // eslint-disable-line camelcase
    is_starred: boolean | null; // eslint-disable-line camelcase
    /** string date */
    created_at: string | null; // eslint-disable-line camelcase
    /** string date */
    updated_at: string | null; // eslint-disable-line camelcase
    campaign: {
      id: number;
      name: string;
      crm_fid: string; // eslint-disable-line camelcase
    } | null;
    last_activity: { // eslint-disable-line camelcase
      visitor_activity: unknown; // eslint-disable-line camelcase
    };
    profile: {
      id: number;
      name: string;
      profile_criteria: unknown[]; // eslint-disable-line camelcase
    } | null;
    visitors: {
      visitor: unknown[];
    };
    visitor_activities: { // eslint-disable-line camelcase
      visitor_activity: unknown[]; // eslint-disable-line camelcase
    };
    lists: {
      list_subscription: unknown; // eslint-disable-line camelcase
    };
  };
};
