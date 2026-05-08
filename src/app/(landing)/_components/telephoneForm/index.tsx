'use client';

import 'react-phone-number-input/style.css';
import Link from 'next/link';
import type { ChangeEventHandler, FC, SubmitEventHandler } from 'react';
import { forwardRef, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import type { Country, Value } from 'react-phone-number-input';
import PhoneInput from 'react-phone-number-input';

interface Props {
  countryCode: string;
  leadId: string;
  telephoneListId: number;
}

type State = 'ready' | 'submitting' | 'success' | 'error';

export const TelephoneForm: FC<Props> = ({ countryCode, leadId, telephoneListId }) => {
  const [ telephoneNumber, setTelephoneNumber ] = useState<Value>();
  const [ state, setState ] = useState<State>('ready');

  const handleChange = (value?: Value): void => {
    setTelephoneNumber(value);
  };

  const handleSubmit: SubmitEventHandler = e => {
    e.preventDefault();
    const url = 'https://leads.qccareerschool.com/telephoneNumber';
    const body = JSON.stringify({ leadId, telephoneNumber, listId: telephoneListId });
    const headers = { 'content-type': 'application/json' };
    fetch(url, { method: 'post', body, headers }).then(async response => {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response.text();
    }).then(() => {
      setState('success');
    }).catch(() => {
      setState('error');
    });
  };

  const handleRetryClick = (): void => {
    setState('ready');
  };

  return (
    <>
      <p className="mb-3">Enter your phone number below and we'll text you the details.</p>
      {state === 'ready' && (
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <PhoneInput value={telephoneNumber} onChange={handleChange} defaultCountry={countryCode as Country} inputComponent={InputComponent} />
          </div>
          <p><small>By providing your phone number, you agree to receive automated promotional messages from QC Event School. Message frequency varies. Message & data rates may apply. Reply STOP to opt out. <Link href="/terms" target="_blank">Terms & Privacy</Link>.</small></p>
          <button type="submit" className="btn btn-primary">Stay Connected</button>
        </form>
      )}
      {state === 'submitting' && <div className="mt-4"><Spinner /></div>}
      {state === 'error' && (
        <>
          <p className="text-danger mb-2">Sorry. Something went wrong. Please contact the School for help.</p>
          <button className="btn btn-sm btn-primary" onClick={handleRetryClick}>Retry</button>
        </>
      )}
      {state === 'success' && <div className="text-success">Please keep an eye out for special offers!</div>}
    </>
  );
};

interface InputProps {
  value: Value;
  onChange: ChangeEventHandler;
}

const InputComponent = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  return <input ref={ref} type="tel" value={props.value} onChange={props.onChange} className="form-control" placeholder="Telephone Number" required />;
});

InputComponent.displayName = 'InputComponent';
