import type { FC, PropsWithChildren, ReactNode } from 'react';
import { Accordion as BootstrapAccordion } from 'react-bootstrap';

interface Props {
  title: string | ReactNode;
  open?: boolean;
  className?: string;
}

export const BSAccordion: FC<PropsWithChildren<Props>> = ({ title, children, open, className }) => (
  <BootstrapAccordion className={className} defaultActiveKey={open ? '0' : undefined}>
    <BootstrapAccordion.Item eventKey="0">
      <BootstrapAccordion.Header>{title}</BootstrapAccordion.Header>
      <BootstrapAccordion.Body>
        {children}
      </BootstrapAccordion.Body>
    </BootstrapAccordion.Item>
  </BootstrapAccordion>
);
