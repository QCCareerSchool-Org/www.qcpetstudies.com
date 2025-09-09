'use client';

import type { FC } from 'react';
import { Modal, ModalBody, ModalHeader, ModalTitle } from 'react-bootstrap';

import type { Price } from '@/domain/price';
import { formatPrice } from '@/lib/formatPrice';

type Props = {
  show: boolean;
  onHide: () => void;
  dgPrice: Price;
  dePrice: Price;
};

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
              <td>International Dog Grooming Professional (IDGP) Certificate</td>
              <td className="text-center">✅</td>
              <td className="text-center">✅</td>
            </tr>
            <tr>
              <td>First Aid Training</td>
              <td className="text-center">✅</td>
              <td className="text-center">✅</td>
            </tr>
            <tr>
              <td>Theory Component</td>
              <td className="text-center">✅</td>
              <td className="text-center">✅</td>
            </tr>
            <tr>
              <td>Safe Dog Handling</td>
              <td className="text-center">✅</td>
              <td className="text-center">✅</td>
            </tr>
            <tr>
              <td>Hands-On Practice with Dogs (at home)</td>
              <td className="text-center">✅</td>
              <td className="text-center">✅</td>
            </tr>
            <tr>
              <td>Support from Student Advisors (7 days a week)</td>
              <td className="text-center">✅</td>
              <td className="text-center">✅</td>
            </tr>
            <tr>
              <td>Mentor Feedback from a Professional Groomer</td>
              <td className="text-center">✅</td>
              <td className="text-center">✅</td>
            </tr>
            <tr>
              <td>Business Training</td>
              <td className="text-center">✅</td>
              <td className="text-center">✅</td>
            </tr>
            <tr>
              <td>Salon Operations Training</td>
              <td className="text-center">-</td>
              <td className="text-center">✅</td>
            </tr>
            <tr>
              <td className="fw-bold">In-Person Salon Experience</td>
              <td className="text-center">-</td>
              <td className="text-center">✅</td>
            </tr>
            <tr>
              <td className="fw-bold">Real Client Interactions</td>
              <td className="text-center">-</td>
              <td className="text-center">✅</td>
            </tr>
            <tr>
              <td className="fw-bold">Real-Time Feedback in a Salon Setting</td>
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
              <td className="text-center fw-bold">{props.dgPrice.currency.symbol}{formatPrice(props.dgPrice.plans.full.total)}</td>
              <td className="text-center fw-bold">{props.dePrice.currency.symbol}{formatPrice(props.dePrice.plans.full.total)}</td>
            </tr>
          </tbody>
        </table>
      </ModalBody>
    </Modal>
  );
};
