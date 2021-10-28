import { ReactElement, ReactNode } from 'react';
import Accordion from 'react-bootstrap/Accordion';

type Props = {
  eventKey: string;
  children: ReactNode;
};

export const AccordionSection = ({ eventKey, children }: Props): ReactElement => (
  <>
    <Accordion.Collapse eventKey={eventKey}>
      <div className="accordionWrapper">
        {children}
      </div>
    </Accordion.Collapse>
    <style jsx>{`
      .accordionWrapper {
        padding: 1.625rem;
        border-left: 1px solid #ddd;
        border-bottom: 1px solid #ddd;
        border-right: 1px solid #ddd;
        background-color: white;
      }
    `}</style>
  </>
);
