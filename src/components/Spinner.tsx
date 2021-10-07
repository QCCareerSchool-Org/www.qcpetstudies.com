import { ReactElement } from 'react';

export const Spinner = (): ReactElement => (
  <div className="spinner-border" role="status">
    <span className="visually-hidden">Loading...</span>
  </div>
);
