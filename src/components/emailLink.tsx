'use client';

import type { FC } from 'react';
import { useEffect, useState } from 'react';

export const EmailLink: FC = () => {
  const [ emailAddress, setEmailAddress ] = useState('');

  useEffect(() => {
    // eslint-disable-next-line no-useless-concat
    setEmailAddress('info' + '@' + 'qcpetstudies.com');
  }, []);

  if (emailAddress) {
    return <a href={`mailto:${emailAddress}`}>{emailAddress}</a>;
  }
};
