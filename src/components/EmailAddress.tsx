'use client';

import { FC, useEffect, useState } from 'react';

export const EmailAddress: FC = () => {
  const [ emailAddress, setEmailAddress ] = useState('');

  useEffect(() => {
    // eslint-disable-next-line no-useless-concat
    setEmailAddress('info' + '@' + 'qcpetstudies.com');
  }, []);

  return (emailAddress);
};
