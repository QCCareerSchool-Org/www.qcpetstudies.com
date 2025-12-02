import { usePathname } from 'next/navigation';

export const useOrigin = (): string | undefined => {
  const path = usePathname();

  if (typeof window === 'undefined') {
    return path;
  }

  const { protocol, host } = window.location;
  return `${protocol}//${host}${path}`;
};
