import { useContext } from 'react';

import { TaxCreditPopupContext } from '@/providers/taxCreditPopupProvider';

export const useTaxCreditPopup = (): [ show: boolean, toggle: () => void ] => {
  const context = useContext(TaxCreditPopupContext);
  if (context === undefined) {
    throw Error('useTaxCreditPopup must be used within a TaxCreditPopupProvider');
  }
  return context;
};
