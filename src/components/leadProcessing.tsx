/* eslint-disable camelcase */
'use client';

import type { FC } from 'react';
import { useEffect, useRef } from 'react';

import { fbqLead } from '@/lib/fbq';
import { gaEvent, gaUserData } from '@/lib/gtag';
import { oaiqLead } from '@/lib/oaiq';
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
  googleAdsConversionId?: string;
}

export const LeadProcessing: FC<Props> = props => {
  const googleAdsConversionId = props.googleAdsConversionId ?? 'AW-1071836607/yZtFCL_BpW8Qv9uL_wM';
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
    gaEvent('conversion', { send_to: googleAdsConversionId, transaction_id: props.leadId });
    oaiqLead();
  }, [ props.emailAddress, props.telephoneNumber, props.city, props.countryCode, props.provinceCode, props.firstName, props.lastName, props.leadId, googleAdsConversionId ]);

  return null;
};
