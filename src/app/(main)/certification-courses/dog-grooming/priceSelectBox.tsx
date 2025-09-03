'use client';

import type { FC, PropsWithChildren } from 'react';
import { useId } from 'react';

import styles from './priceSelectBox.module.scss';

type Props = {
  checked: boolean;
  onChecked: () => void;
};

export const PriceSelectBox: FC<PropsWithChildren<Props>> = ({ checked, onChecked, children }) => {
  const id = useId();

  const handleChange = onChecked;

  return (
    <div className={`${styles.box} ${checked ? styles.checked : ''}`}>
      <div className="form-check">
        <input onChange={handleChange} className="form-check-input" type="checkbox" checked={checked} id={id} />
        <label className="form-check-label" htmlFor={id}>
          {children}
        </label>
      </div>
    </div>
  );
};
