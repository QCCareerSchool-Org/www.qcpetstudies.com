export const getClientIp = (forwardedFor: string | undefined, realIp: string | undefined): string | null => {
  if (forwardedFor) {
    return forwardedFor.split(',')[0].trim();
  }

  if (realIp) {
    return realIp;
  }

  return null;
};
