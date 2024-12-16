import type { FC } from 'react';

export const Spinner: FC = () => (
  <div className="spinner-border" role="status">
    <span className="visually-hidden">Loading...</span>
  </div>
);
