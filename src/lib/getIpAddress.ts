import type { NextApiRequest } from 'next';

export const getIPAddress = (req: NextApiRequest): string | undefined => {
  const forwardedFor = req.headers['x-forwarded-for'];
  if (Array.isArray(forwardedFor) && forwardedFor.length) {
    return forwardedFor[0].split(',')[0].trim();
  } else if (typeof forwardedFor === 'string') {
    return forwardedFor.split(',')[0].trim();
  } else if (req.socket.remoteAddress) {
    return req.socket.remoteAddress;
  }
};
