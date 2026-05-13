'use client';

import type { FC, PropsWithChildren } from 'react';

import { BSAccordion } from './bsaccordion';

interface Props {
  heading: string;
  className?: string;
}

export const AccordionFAQ: FC<PropsWithChildren<Props>> = ({ heading, children, className }) => {
  const schemaHeading = <span itemProp="name" className="lead fw-bold">{heading}</span>;
  return (
    <div itemScope itemType="https://schema.org/Question" itemProp="mainEntity">
      <BSAccordion title={schemaHeading} className={className}>
        <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
          <div itemProp="text">
            {children}
          </div>
        </div>
      </BSAccordion>
    </div>
  );
};
