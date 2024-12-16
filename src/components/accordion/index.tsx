'use client';

import type { FC, PropsWithChildren } from 'react';
import { Accordion as BsAccordion } from 'react-bootstrap';

type Props = {
  defaultActiveKey?: number;
};

export const Accordion: FC<PropsWithChildren<Props>> = ({ defaultActiveKey, children }) => (
  <BsAccordion defaultActiveKey={defaultActiveKey?.toString()}>
    {children}
  </BsAccordion>
);
