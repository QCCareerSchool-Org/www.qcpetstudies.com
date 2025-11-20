'use client';

import { type FC, useEffect } from 'react';
import { toast } from 'react-toastify';

import styles from './index.module.scss';

interface Props {
  emailAddress: string;
  firstName?: string;
}

export const EmailSentToast: FC<Props> = ({ emailAddress, firstName }) => {
  useEffect(() => {
    const message = (
      <div className="mx-1">
        Your email was sent to <strong>{emailAddress}</strong>. If you don't find it in your inbox, please <strong className="text-danger">check your junk mail folder</strong>.
      </div>
    );
    toast.success(message, { delay: 1500, autoClose: 12_000, className: styles.toast });
  }, [ emailAddress, firstName ]);

  return null;
};
