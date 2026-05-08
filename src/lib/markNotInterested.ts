import { addToBrevoList, getBrevoContact } from '@/lib/brevoAPI';

export const markNotInterested = async (contactId: number, listId: number): Promise<{ emailAddress?: string; firstName?: string } | undefined> => {
  const [ addResult, contactResult ] = await Promise.all([
    addToBrevoList(contactId, listId),
    getBrevoContact(contactId),
  ]);

  if (!addResult.success) {
    console.error(addResult.error);
  }

  if (!contactResult.success) {
    console.error(contactResult.error);
  } else {
    return { emailAddress: contactResult.value.emailAddress, firstName: contactResult.value.firstName };
  }
};
