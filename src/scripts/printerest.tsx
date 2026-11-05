import Script from 'next/script';
import type { FC } from 'react';

import type { UserValues } from '@/domain/userValues';
import { hash } from '@/lib/hash';
import type { LoadParams } from '@/lib/pintrk';
import { pintrkNormalize } from '@/lib/pintrk';
import { safeJSON } from '@/lib/safeJSON';

interface Props {
  id: string;
  userValues?: UserValues;
}

export const Pinterest: FC<Props> = ({ id, userValues }) => {
  const pd: LoadParams = {};
  if (userValues) {
    const normalized = pintrkNormalize({
      emailAddress: userValues.emailAddress,
      telephoneNumber: userValues.telephoneNumber,
      firstName: userValues.firstName,
      lastName: userValues.lastName,
      city: userValues.city,
      provinceCode: userValues.provinceCode,
      countryCode: userValues.countryCode,
    });
    for (const [ key, value ] of Object.entries(normalized) as [keyof LoadParams, string][]) {
      pd[key] = hash(value);
    }
  }

  const url = new URL('https://ct.pinterest.com/v3');
  url.searchParams.append('event', 'init');
  url.searchParams.append('tid', id);
  for (const [ key, value ] of Object.entries(pd) as [keyof LoadParams, string][]) {
    url.searchParams.append(`pd[${key}]`, value);
  }
  url.searchParams.append('noscript', '1');

  return (
    <>
      <Script id="pinterest" dangerouslySetInnerHTML={{ __html: getScript(id, pd) }} />
      <noscript>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img height="1" width="1" style={{ display: 'none' }} alt="" src={url.toString()} />
      </noscript>
    </>
  );
};

const getScript = (id: string, pd: LoadParams): string => `
(function () {
  if (window.pintrk) {
    return;
  }

  const pintrk = function (...args) {
    pintrk.queue.push(args);
  };
  pintrk.queue = [];
  pintrk.version = '3.0';
  window.pintrk = pintrk;

  const script = document.createElement('script');
  script.async = true;
  script.src = 'https://s.pinimg.com/ct/core.js';
  document.head.appendChild(script);
})();

pintrk('load', ${safeJSON(id)}, ${safeJSON(pd)});
pintrk('page');
`;
