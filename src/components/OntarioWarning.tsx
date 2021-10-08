import { useEffect } from 'react';
import { useLocation } from '../hooks/useLocation';

const ontarioWarningMessage = 'Please note that QC Pet Studies courses are not yet available to Ontario residents.';

/**
 * Displays a warning message to Ontario visitors
 *
 * This needs needs to be on every page, but it can't be a hook on <App /> because it needs to be inside a <LocationProvider />
 *
 * @returns null
 */
export const OntarioWarning = (): null => {
  const location = useLocation();

  useEffect(() => {
    if (location?.countryCode === 'CA' && location?.provinceCode === 'ON') {
      if (window.sessionStorage) {
        // this way we won't show the message a second time if the user refreshes the page
        if (!sessionStorage.getItem('ontarioWarning')) {
          sessionStorage.setItem('ontarioWarning', '1');
          alert(ontarioWarningMessage);
        }
      } else {
        alert(ontarioWarningMessage);
      }
    }
  }, [ location ]);

  return null;
};
