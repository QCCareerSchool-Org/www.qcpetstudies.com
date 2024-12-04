'use client';

import type { FC, ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export const CardBody: FC<Props> = ({ children }) => (
  <>
    <div id="formCardBody" className="card-body">{children}</div>
    <style jsx>{`
    @media only screen and (max-width: 575px) {
      #formCardBody {
        padding: 1.25rem;
      }
    }
    `}</style>
  </>
);
