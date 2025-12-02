import { usePathname } from 'next/navigation';

export const useOrigin = (): string => {
  const path = usePathname();
  return `${window.location.protocol}//${window.location.host}${path}`;
};
