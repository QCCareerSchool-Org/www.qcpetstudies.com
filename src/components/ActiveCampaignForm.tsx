import { useRouter } from 'next/router';
import type { FC, FormEventHandler } from 'react';
import { useId, useRef, useState } from 'react';

import { Spinner } from '../components/Spinner';
import { useLocation } from '../hooks/useLocation';

const action = 'https://qccareerschool77419.activehosted.com/proc.php';

const activeCampaignFieldIds = {
  countryCode: 1,
  provinceCode: 2,
  courses: {
    MZ: 3,
    HS: 4,
    EP: 5,
  },
};

const submit = async (formId: number, name: string, emailAddres: string, optIn: boolean, countryCode: string, provinceCode: string | null): Promise<void> => {
  const body = {
    fullname: name,
    email: emailAddres,
    [`field[${activeCampaignFieldIds.countryCode}]`]: countryCode,
    [`field[${activeCampaignFieldIds.provinceCode}]`]: provinceCode ?? '',
    f: formId.toString(),
    act: 'sub',
  };

  await fetch(action, {
    method: 'POST',
    body: new URLSearchParams(body),
    mode: 'no-cors',
    credentials: 'include',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
  });
};

type Props = {
  formId: number;
  onSubmit: string | (() => void);
};

export const ActiveCampaignForm: FC<Props> = props => {
  const id = useId();
  const router = useRouter();
  const [ submitting, setSubmitting ] = useState(false);
  const location = useLocation();

  const nameRef = useRef<HTMLInputElement>(null);
  const emailAddressRef = useRef<HTMLInputElement>(null);
  const optInRef = useRef<HTMLInputElement>(null);

  const handleSubmit: FormEventHandler<HTMLFormElement> = e => {
    e.preventDefault();

    if (!nameRef.current || !emailAddressRef.current || !optInRef.current) {
      return;
    }

    const name = nameRef.current.value;
    const emailAddress = emailAddressRef.current.value;
    const optIn = optInRef.current.checked;

    setSubmitting(true);
    submit(props.formId, name, emailAddress, optIn, location?.countryCode ?? 'US', location?.provinceCode ?? null)
      .then(async () => {
        if (typeof props.onSubmit === 'string') {
          return router.push(props.onSubmit);
        }
        props.onSubmit();
      })
      .catch(console.error)
      .finally(() => setSubmitting(false));
  };

  return (
    <form onSubmit={handleSubmit} method="POST" action={action}>
      <div className="mb-3">
        <label htmlFor={`name${id}`} className="form-label">Name</label>
        <input ref={nameRef} type="text" id={`fullname${id}`} className="form-control" name="name" autoComplete="given-name" />
      </div>
      <div className="mb-3">
        <label htmlFor={`emailAddress${id}`} className="form-label">Email Address <span className="text-danger">*</span></label>
        <input ref={emailAddressRef} type="email" id={`emailAddress${id}`} className="form-control" name="emailAddress" autoComplete="email" required />
      </div>
      <div className="mb-3 form-check">
        <input ref={optInRef} type="checkbox" id={`optin${id}`} className="form-check-input" />
        <label htmlFor={`optin${id}`} className="form-check-label fst-italic small">I agree to receive additional emails from QC, including news and offers. Unsubscribe anytime!</label>
      </div>
      <div className="d-flex align-items-center">
        <button type="submit" className="btn btn-primary">Get the Catalog</button>
        {submitting && <div className="ms-2"><Spinner /></div>}
      </div>
    </form>
  );
};
