import { ReactElement, useContext } from 'react';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import AccordionContext from 'react-bootstrap/AccordionContext';
import { FaMinusCircle, FaPlusCircle } from 'react-icons/fa';

type Variant = 'primary' | 'secondary';

type Props = {
  eventKey: string;
  title: string;
  variant?: Variant;
};

export const AccordionToggle = ({ title, eventKey, variant = 'secondary' }: Props): ReactElement => {
  const { activeEventKey } = useContext(AccordionContext);
  const decoratedOnClick = useAccordionButton(eventKey);
  const isOpen = activeEventKey === eventKey;

  return (
    <>
      <button className="btn btn-link toggleWrapper" onClick={decoratedOnClick}>
        <div className="d-flex align-items-center justify-content-between">
          <h3 className="m-0">{title}</h3>
          <div className={`text-${variant}`}>
            {isOpen ? <FaMinusCircle /> : <FaPlusCircle />}
          </div>
        </div>
      </button>
      <style jsx>{`
        .toggleWrapper {
          width: 100%;
          background-color: #ededed;
          border-left: 1px solid #ddd;
          border-bottom: 1px solid #ddd;
          border-right: 1px solid #ddd;
          text-transform: none;
          padding: 1rem 1.625rem;
        }
        .toggleWrapper:first-of-type {
          border-top: 1px solid #ddd;
        }
      `}</style>
    </>
  );
};
