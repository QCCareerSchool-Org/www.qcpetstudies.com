import type { Result } from 'generic-result-type';
import { success } from 'generic-result-type';

import { postContact } from './contacts/sync/post';
import { postContactTags } from './contactTags/post';
import type { Enrollment } from '@/domain/enrollment';

export const addActiveCampaignStudent = async (enrollment: Enrollment): Promise<Result<bigint>> => {
  const contact = {
    email: enrollment.emailAddress,
    phone: enrollment.telephoneNumber,
    firstName: enrollment.firstName,
    lastName: enrollment.lastName,
  };

  const fields = {
    countryCode: enrollment.countryCode,
    ...(enrollment.provinceCode ? { provinceCode: enrollment.provinceCode } : undefined),
    city: enrollment.city,
  };

  const contactResult = await postContact(contact, fields);
  if (!contactResult.success) {
    return contactResult;
  }

  const contactTag = {
    contact: contactResult.value,
    tag: 37n, // Student: Event
  };

  const addTagResult = await postContactTags(contactTag);
  if (!addTagResult.success) {
    return addTagResult;
  }

  return success(contactResult.value);
};
