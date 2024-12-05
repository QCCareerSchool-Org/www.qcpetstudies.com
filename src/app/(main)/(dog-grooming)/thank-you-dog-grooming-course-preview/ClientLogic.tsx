'use client';

import type { FC } from 'react';
import { useEffect, useRef } from 'react';

import { brevoIdentifyLead } from '@/lib/brevo';
import { fbqLead } from '@/lib/fbq';
import { gaEvent, gaUserData } from '@/lib/gtag';

type Props = {
  emailAddress: string | undefined;
  countryCode: string | undefined;
  provinceCode: string | undefined;
  firstName: string | undefined;
  lastName: string | undefined;
};

export const ClientLogic: FC<Props> = ({ emailAddress, countryCode, provinceCode, firstName, lastName }) => {

  const effectCalled = useRef<boolean>(false);

  useEffect(() => {
    if (emailAddress) {
      gaUserData({ email: emailAddress });
    }
  }, [ emailAddress ]);

  useEffect(() => {
    if (effectCalled.current) {
      return;
    }
    effectCalled.current = true;
    fbqLead();
    gaEvent('conversion', { send_to: 'AW-1071836607/yZtFCL_BpW8Qv9uL_wM' }); // eslint-disable-line camelcase
  }, []);

  useEffect(() => {
    if (emailAddress) {
      brevoIdentifyLead(emailAddress, countryCode, provinceCode, firstName ?? undefined, lastName ?? undefined);
    }
  }, [ emailAddress, countryCode, provinceCode, firstName, lastName ]);

  return null;

};
