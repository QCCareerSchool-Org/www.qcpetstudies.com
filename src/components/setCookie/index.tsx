'use client';

import type { FC } from 'react';
import { useEffect } from 'react';

import type { CookieData } from '@/domain/cookie';

export const SetCookie: FC<CookieData> = ({ name, value, domain, path, secure, httpOnly, sameSite, maxAge }) => {
  useEffect(() => {
    const body = JSON.stringify({ name, value, domain, path, secure, httpOnly, sameSite, maxAge });

    fetch(`/set-cookie`, {
      method: 'post',
      body,
      headers: { 'content-type': 'application/json' },
      // credentials: 'include',
    }).then(async response => {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response.json() as Promise<unknown>;
    }).then((json: unknown) => {
      console.log(json);
    }).catch((err: unknown) => {
      console.error(err instanceof Error ? err.message : String(err));
    });
  }, [ name, value, domain, path, secure, httpOnly, sameSite, maxAge ]);

  return null;
};
