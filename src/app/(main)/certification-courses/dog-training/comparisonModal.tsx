'use client';

import type { FC } from 'react';
import { Modal, ModalBody, ModalHeader, ModalTitle } from 'react-bootstrap';

import type { Price } from '@/domain/price';
import { formatPrice } from '@/lib/formatPrice';

interface Props {
  show: boolean;
  onHide: () => void;
  dtPrice: Price;
  dePrice: Price;
}

export const ComparisonModal: FC<Props> = props => {
  return (
    <Modal show={props.show} onHide={props.onHide} size="lg">
      <ModalHeader closeButton>
        <ModalTitle><h3 className="mb-0">Course Comparison</h3></ModalTitle>
      </ModalHeader>
      <ModalBody>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Feature</th>
              <th className="text-center">Online Track</th>
              <th className="text-center">Externship Track</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>International Dog Training Professional (IDTP) Certificate</td>
              <td className="text-center">✅</td>
              <td className="text-center">✅</td>
            </tr>
            <tr>
              <td>Learning Theory</td>
              <td className="text-center">✅</td>
              <td className="text-center">✅</td>
            </tr>
            <tr>
              <td>Safe Dog Handling</td>
              <td className="text-center">✅</td>
              <td className="text-center">✅</td>
            </tr>
            <tr>
              <td>Hands-On Practice with Dogs at Home</td>
              <td className="text-center">✅</td>
              <td className="text-center">✅</td>
            </tr>
            <tr>
              <td>Support from Student Advisors</td>
              <td className="text-center">✅</td>
              <td className="text-center">✅</td>
            </tr>
            <tr>
              <td>Mentor Feedback from a Professional Trainer</td>
              <td className="text-center">✅</td>
              <td className="text-center">✅</td>
            </tr>
            <tr>
              <td>Business & Career Training</td>
              <td className="text-center">✅</td>
              <td className="text-center">✅</td>
            </tr>
            <tr>
              <td>Training to Lead a Group Class</td>
              <td className="text-center">✅</td>
              <td className="text-center">✅</td>
            </tr>
            <tr>
              <td className="fw-bold">In-Person Experience Running a Class</td>
              <td className="text-center">-</td>
              <td className="text-center">✅</td>
            </tr>
            <tr>
              <td className="fw-bold">Real Client Interactions</td>
              <td className="text-center">-</td>
              <td className="text-center">✅</td>
            </tr>
            <tr>
              <td className="fw-bold">Real-Time Coaching in a Professional Setting</td>
              <td className="text-center">-</td>
              <td className="text-center">✅</td>
            </tr>
            <tr>
              <td className="fw-bold">One-on-One Support from an Externship Facilitator</td>
              <td className="text-center">-</td>
              <td className="text-center">✅</td>
            </tr>
            <tr>
              <td className="fw-bold">Additional Externship Certificate</td>
              <td className="text-center">-</td>
              <td className="text-center">✅</td>
            </tr>
            <tr>
              <td className="fw-bold">Tuition</td>
              <td className="text-center fw-bold">{props.dtPrice.currency.symbol}{formatPrice(props.dtPrice.plans.full.total)}</td>
              <td className="text-center fw-bold">{props.dePrice.currency.symbol}{formatPrice(props.dePrice.plans.full.total)}</td>
            </tr>
          </tbody>
        </table>
      </ModalBody>
    </Modal>
  );
};
