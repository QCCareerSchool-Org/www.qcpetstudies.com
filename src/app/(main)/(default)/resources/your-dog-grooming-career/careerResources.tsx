import type { FC, PropsWithChildren, ReactElement } from 'react';

export type Props = {
  title: string;
  icon: ReactElement;
};

export const CareerResources: FC<PropsWithChildren<Props>> = ({ title, icon, children }) => (
  <div className="row justify-content-center align-items-center mt-5">
    <div className="col-12 col-lg-2">
      <div className="h2 text-secondary mb-3">
        {icon}
      </div>
    </div>
    <div className="col-12 col-lg-8 text-lg-start">
      <h3>{title}</h3>
      {children}
    </div>
  </div>
);
