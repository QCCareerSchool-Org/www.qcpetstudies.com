import * as brevo from '@getbrevo/brevo';

const brevoApiKey = process.env.BREVO_API_KEY ?? '';

type Attributes = {
  STATUS_PET_LEAD?: boolean;
  STATUS_PET_STUDENT?: boolean;
};

export const createBrevoContact = async (emailAddress: string, firstName?: string, lastName?: string, countryCode?: string, provinceCode?: string | null, attributes?: Attributes, listIds?: number[]): Promise<boolean> => {
  const contactsApi = new brevo.ContactsApi();
  contactsApi.setApiKey(brevo.ContactsApiApiKeys.apiKey, brevoApiKey);

  const body = {
    email: emailAddress,
    listIds,
    updateEnabled: true,
    attributes: {
      ...attributes,
    },
  } satisfies brevo.CreateContact;

  if (typeof firstName !== 'undefined') {
    (body.attributes as Record<string, unknown>).FIRSTNAME = firstName;
  }
  if (typeof lastName !== 'undefined') {
    (body.attributes as Record<string, unknown>).LASTNAME = lastName;
  }
  if (typeof countryCode !== 'undefined') {
    (body.attributes as Record<string, unknown>).COUNTRY_CODE = countryCode.toLocaleUpperCase();
  }
  if (typeof provinceCode !== 'undefined') {
    (body.attributes as Record<string, unknown>).PROVINCE_CODE = provinceCode === null ? '' : provinceCode.toLocaleUpperCase();
  }

  const createContactResult = await contactsApi.createContact(body);

  return createContactResult.response.complete;
};

export const sendBrevoEmail = async (templateId: number, emailAddress: string, firstName?: string, lastName?: string): Promise<void> => {
  const transactionalEmailsApi = new brevo.TransactionalEmailsApi();
  transactionalEmailsApi.setApiKey(brevo.TransactionalEmailsApiApiKeys.apiKey, brevoApiKey);

  await transactionalEmailsApi.sendTransacEmail({
    to: firstName ? [ { email: emailAddress, name: firstName } ] : [ { email: emailAddress } ],
    templateId,
    params: { name: firstName, surname: lastName },
    // headers: {
    //   'X-Mailin-custom': 'custom_header_1:custom_value_1|custom_header_2:custom_value_2',
    // },
  });
};
