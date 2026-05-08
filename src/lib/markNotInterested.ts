import { addToBrevoList, getBrevoContact } from '@/lib/brevoAPI';
import { getBrevoContactId } from '@/lib/getBrevoContactId';

export const markNotInterested = async (sc: string | string[] | undefined, listId: number): Promise<{ emailAddress?: string; firstName?: string } | undefined> => {
  if (typeof sc === 'string') {
    const contactId = getBrevoContactId(sc);

    if (contactId) {
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
    }
  }
};
