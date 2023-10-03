import type { FC } from 'react';
import { useId } from 'react';

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

type Props = {
  formId: number;
};

export const ActiveCampaignDirectForm: FC<Props> = props => {
  const id = useId();
  const location = useLocation();

  return (
    <form method="POST" action={action}>
      <input type="hidden" name="f" value={props.formId} />

      {/* <input type="hidden" name="u" value="1" /> */}
      {/* <input type="hidden" name="s" /> */}
      {/* <input type="hidden" name="c" value="0" /> */}
      {/* <input type="hidden" name="m" value="0" /> */}
      <input type="hidden" name="act" value="sub" />
      {/* <input type="hidden" name="v" value="2" /> */}
      {/* <input type="hidden" name="or" value="71ca6b76745eb7936fc8ee610d28f904" /> */}

      <input type="hidden" name={`field[${activeCampaignFieldIds.countryCode}]`} value={location?.countryCode} />
      <input type="hidden" name={`field[${activeCampaignFieldIds.provinceCode}]`} value={location?.provinceCode ?? undefined} />
      <div className="mb-3">
        <label htmlFor={`name${id}`} className="form-label">Name</label>
        <input type="text" id={`fullname${id}`} className="form-control" name="fullname" autoComplete="given-name" />
      </div>
      <div className="mb-3">
        <label htmlFor={`emailAddress${id}`} className="form-label">Email Address <span className="text-danger">*</span></label>
        <input type="email" id={`emailAddress${id}`} className="form-control" name="email" autoComplete="email" required />
      </div>
      <div className="mb-3 form-check">
        <input type="checkbox" id={`optin${id}`} className="form-check-input" />
        <label htmlFor={`optin${id}`} className="form-check-label fst-italic small">I agree to receive additional emails from QC, including news and offers. Unsubscribe anytime!</label>
      </div>
      <button type="submit" className="btn btn-primary">Get the Catalog</button>
    </form>
  );
};
