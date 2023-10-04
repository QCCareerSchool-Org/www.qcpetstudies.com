import type { FC } from 'react';
import { useId } from 'react';

import { useLocation } from '../hooks/useLocation';

type Props = {
  action: string;
};

export const BrevoDirectForm: FC<Props> = ({ action }) => {
  const id = useId();
  const location = useLocation();

  return (
    <section>
      <div className="container">
        <form method="POST" action={action}>
          <input type="hidden" name="COUNTRY_CODE" value={location?.countryCode ?? 'US'} />
          <div className="mb-3">
            <label htmlFor={`name${id}`} className="form-label">Name</label>
            <input type="text" id={`name${id}`} className="form-control" name="FIRSTNAME" autoComplete="given-name" />
          </div>
          <div className="mb-3">
            <label htmlFor={`emailAddress${id}`} className="form-label">Email Address <span className="text-danger">*</span></label>
            <input type="email" id={`emailAddress${id}`} className="form-control" name="EMAIL" autoComplete="email" required />
          </div>
          <div className="mb-3 form-check">
            <input type="checkbox" id={`optin${id}`} className="form-check-input" name="OPT_IN" />
            <label htmlFor={`optin${id}`} className="form-check-label fst-italic small">I agree to receive additional emails from QC, including news and offers. Unsubscribe anytime!</label>
          </div>
          <button type="submit" className="btn btn-primary">Get the Catalog</button>
        </form>
      </div>
    </section>
  );
};
