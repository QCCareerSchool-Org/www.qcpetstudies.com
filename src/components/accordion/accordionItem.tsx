'use client';

import type { FC, PropsWithChildren, ReactNode } from 'react';
import { Accordion } from 'react-bootstrap';

type Props = {
  eventKey: number;
  heading: ReactNode;
  isFAQ?: boolean;
};

export const AccordionItem: FC<PropsWithChildren<Props>> = ({ eventKey, heading, children, isFAQ }) => (
  <Accordion.Item eventKey={eventKey.toString()} itemScope={isFAQ ? true : undefined} itemType={isFAQ ? 'https://schema.org/Question' : undefined} itemProp={isFAQ ? 'mainEntity' : undefined}>
    <Accordion.Header>
      <div itemProp={isFAQ ? 'name' : undefined}>
        {heading}
      </div>
    </Accordion.Header>
    <Accordion.Body className="bg-white">
      <div itemScope={isFAQ ? true : undefined} itemType={isFAQ ? 'https://schema.org/Answer' : undefined} itemProp={isFAQ ? 'acceptedAnswer' : undefined}>
        <div itemProp={isFAQ ? 'text' : undefined}>
          {children}
        </div>
      </div>
    </Accordion.Body>
  </Accordion.Item>
);
