export const getBrevoContactId = (encoded: string): number | undefined => {
  const decoded = Buffer.from(encoded, 'base64').toString('utf8');
  const parts = decoded.split('#');
  if (parts.length === 2) {
    const contactId = Number(parts[1]);

    if (Number.isInteger(contactId)) {
      return contactId;
    }
  }
};
