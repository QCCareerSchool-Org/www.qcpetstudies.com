import { useState } from 'react';

export const useOrigin = (): string => {
  const [ origin ] = useState(window.location.origin);

  return origin;
};
