'use client';

import 'react-phone-number-input/style.css';
import Link from 'next/link';
import type { ChangeEventHandler, FC, FormEventHandler } from 'react';
import { forwardRef, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import type { Country, Value } from 'react-phone-number-input';
import PhoneInput from 'react-phone-number-input';

import DesktopBackgroundImage from './desktop-bg.jpg';
import MobileBackgroundImage from './mobile-bg.jpg';
import { BackgroundImage } from '@/components/backgroundImage';
import { FormCard } from '@/components/formCard';
import { FormWrapper } from '@/components/formWrapper';
import { Overlay } from '@/components/overlay';

type Props = {
  countryCode?: string;
  leadId: string;
};

type State = 'ready' | 'submitting' | 'success' | 'error';

const brevoListId = 55;

export const TelephoneFormSection: FC<Props> = ({ countryCode, leadId }) => {
  const [ telephoneNumber, setTelephoneNumber ] = useState<Value>();
  const [ state, setState ] = useState<State>('ready');

  const handleChange = (value?: Value): void => {
    setTelephoneNumber(value);
  };

  const handleSubmit: FormEventHandler = e => {
    e.preventDefault();
    const url = 'https://leads.qccareerschool.com/telephoneNumber';
    const body = JSON.stringify({ leadId, telephoneNumber, listId: brevoListId });
    const headers = { 'content-type': 'application/json' };
    setState('submitting');
    fetch(url, { method: 'post', body, headers }).then(async response => {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response.text();
    }).then(responseBody => {
      setState('success');
      console.log(responseBody);
    }).catch(err => {
      setState('error');
      console.error(err);
    });
  };

  const handleRetryClick = (): void => {
    setState('ready');
  };

  return (
    <section>
      <BackgroundImage src={DesktopBackgroundImage} objectPosition="0% 50%" mobile={{ src: MobileBackgroundImage, breakpoint: 'md' }} />
      <Overlay backgroundColor="rgba(0,0,0,0.6)" className="d-md-none" />
      <div className="container text-white">
        <div className="row">
          <div className="col-12 col-sm-10 col-md-8 col-lg-6">
            <FormCard>
              <h1 className="h5 text-navy">Want Special Offers & Course Updates?</h1>
              <p className="mb-3">Enter your phone number below and we'll text you the details.</p>
              <FormWrapper>
                {state === 'ready' && (
                  <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                      <PhoneInput value={telephoneNumber} onChange={handleChange} defaultCountry={countryCode as Country} inputComponent={InputComponent} />
                    </div>
                    <p><small>By providing your phone number, you agree to receive automated promotional messages from QC Pet Studies. Message frequency varies. Message & data rates may apply. Reply STOP to opt out. <Link href="/terms" target="_blank">Terms & Privacy</Link>.</small></p>
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
              </FormWrapper>
            </FormCard>
          </div>
        </div>
      </div>
    </section>
  );
};

type InputProps = {
  value: Value;
  onChange: ChangeEventHandler;
};

const InputComponent = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  return <input ref={ref} type="tel" value={props.value} onChange={props.onChange} className="form-control" placeholder="Telephone Number" required />;
});

InputComponent.displayName = 'InputComponent';
