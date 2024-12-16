'use client';

import type { FC, PropsWithChildren } from 'react';
import { Modal } from 'react-bootstrap';

import { useToggle } from '@/hooks/useToggle';

export const ComparisonBlurb: FC<PropsWithChildren> = ({ children }) => {
  const [ popup, togglePopup ] = useToggle();

  const handleClick = (): void => {
    togglePopup();
  };

  return (
    <div className="row justify-content-center">
      <div className="col-12 col-lg-10 col-xl-8 text-center">
        <p className="lead">Do you need help deciding between the Grooming Technician and Dog Grooming courses? View the benefits of each in the <a onClick={handleClick} href="#">comparison chart</a>.</p>
        <button onClick={handleClick} className="btn btn-primary btn-lg">View Comparison Chart</button>
      </div>
      <Modal size="xl" show={popup} onHide={handleClick}>
        <Modal.Header closeButton>Comparison Chart</Modal.Header>
        <Modal.Body>
          {children}
        </Modal.Body>
      </Modal>
    </div>
  );
};
