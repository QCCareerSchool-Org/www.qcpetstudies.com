/* eslint-disable camelcase */
'use client';

import type { FC } from 'react';
import { useEffect, useRef } from 'react';

import { brevoIdentifyLead } from '@/lib/brevo';
import { fbqLead } from '@/lib/fbq';
import { gaEvent, gaUserData } from '@/lib/gtag';
import { uetUserData } from '@/lib/uet';

interface Props {
  emailAddress: string;
  telephoneNumber: string | null;
  city: string | null;
  provinceCode: string | null;
  countryCode: string | null;
  firstName: string | null;
  lastName: string | null;
  leadId: string;
  conversionId: string;
}

export const LeadProcessing: FC<Props> = props => {
  const effectCalled = useRef(false);

  useEffect(() => {
    if (!props.emailAddress) {
      return;
    }
    if (effectCalled.current) {
      return;
    }
    effectCalled.current = true;
    gaUserData(props.emailAddress, props.telephoneNumber, props.firstName, props.lastName, props.city, props.provinceCode, props.countryCode);
    uetUserData(props.emailAddress, props.telephoneNumber);
    fbqLead(props.leadId, { emailAddress: props.emailAddress, telephoneNumber: props.telephoneNumber, city: props.city, province: props.provinceCode, country: props.countryCode, firstName: props.firstName, lastName: props.lastName });
    gaEvent('conversion', { send_to: props.conversionId });
    brevoIdentifyLead(props.emailAddress, props.countryCode, props.provinceCode, props.firstName, props.lastName);
  }, [ props.emailAddress, props.telephoneNumber, props.city, props.countryCode, props.provinceCode, props.firstName, props.lastName, props.leadId, props.conversionId ]);

  return null;
};
