'use client';

import type { FC, PropsWithChildren, ReactNode } from 'react';
import { Accordion } from 'react-bootstrap';

type Props = {
  eventKey: number;
  heading: ReactNode;
};

export const AccordionItem: FC<PropsWithChildren<Props>> = ({ eventKey, heading, children }) => (
  <Accordion.Item eventKey={eventKey.toString()}>
    <Accordion.Header>{heading}</Accordion.Header>
    <Accordion.Body className="bg-white">
      {children}
    </Accordion.Body>
  </Accordion.Item>
);
