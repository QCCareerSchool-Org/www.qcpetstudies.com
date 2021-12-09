import { GetServerSidePropsContext } from 'next';

export const getIpAddress = (context: GetServerSidePropsContext): string | undefined => {
  return Array.isArray(context.req.headers['x-real-ip']) ? context.req.headers['x-real-ip'][0] : context.req.headers['x-real-ip'] ?? context.req.socket.remoteAddress;
};
