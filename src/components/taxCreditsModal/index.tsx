'use client';

import type { FC } from 'react';
import { Modal } from 'react-bootstrap';

import styles from './index.module.scss';
import MapleLeafIcon from '@/components/icons/maple-leaf.svg';
import { useTaxCreditPopup } from '@/hooks/useTaxCreditPopup';

export const TaxCreditsModal: FC = () => {
  const [ show, toggle ] = useTaxCreditPopup();

  const handleHide = (): void => {
    toggle();
  };

  return (
    <Modal show={show} onHide={handleHide}>
      <Modal.Header closeButton><strong><MapleLeafIcon height="22" className="me-2" />Canadian Tax Credits</strong></Modal.Header>
      <Modal.Body>
        <p>QC has proudly been in business since 1984.</p>
        <p><strong>As a certified educational institution</strong> with Employment and Social Development Canada (ESDC), we'll be sending you a T2202 tax receipt for the course fees you paid during the year.</p>
        <p>You'll may be eligible to claim back 50% or more of your course fees through:</p>
        <ul className="mb-0">
          <li><span className={styles.red}>The Canada Training Credit</span> and</li>
          <li><span className={styles.red}>The Tuition Tax Credit</span></li>
        </ul>
      </Modal.Body>
      <Modal.Footer>
        <small>Rules for the way the credits work reflect your personal tax situation. Please reach out to your personal accountant for further guidance.</small>
      </Modal.Footer>
    </Modal>
  );
};
