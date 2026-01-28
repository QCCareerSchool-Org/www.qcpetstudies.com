'use client';

import type { FC } from 'react';
import { useEffect, useRef } from 'react';

import { brevoIdentifyLead } from '@/lib/brevo';
import { fbqLead } from '@/lib/fbq';
import { gaEvent, gaUserData } from '@/lib/gtag';
import { uetUserData } from '@/lib/uet';

interface Props {
  emailAddress?: string;
  countryCode?: string;
  provinceCode?: string;
  firstName?: string;
  lastName?: string;
  ipAddress?: string;
  leadId?: string;
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
    gaUserData({ email: props.emailAddress });
    uetUserData(props.emailAddress);
    fbqLead(props.leadId, { emailAddress: props.emailAddress, firstName: props.firstName, lastName: props.lastName });
    // eslint-disable-next-line camelcase
    gaEvent('conversion', { send_to: props.conversionId, transaction_id: props.leadId });
    brevoIdentifyLead(props.emailAddress, props.countryCode, props.provinceCode, props.firstName, props.lastName);
  }, [ props.emailAddress, props.countryCode, props.provinceCode, props.firstName, props.lastName, props.ipAddress, props.leadId, props.conversionId ]);

  return null;
};
