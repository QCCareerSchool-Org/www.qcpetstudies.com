import type { FC } from 'react';
import Modal from 'react-bootstrap/Modal';

import Guarantee1Year from './1-year-guarantee-outlined.svg';
import Guarantee21Days from './21-day-guarantee-outlined.svg';
import Image from 'next/image';

interface Props {
  show: boolean;
  doubleGuarantee?: boolean;
  onToggle: () => void;
}

export const GuaranteeModal: FC<Props> = props => (
  <Modal show={props.show} onHide={props.onToggle} size={props.doubleGuarantee ? 'lg' : undefined}>
    <Modal.Header closeButton>
      <Modal.Title>{props.doubleGuarantee ? 'The Double Guarantee' : '21-Day Money-Back Guarantee!'}</Modal.Title>
    </Modal.Header>

    <Modal.Body>
      {props.doubleGuarantee
        ? (
          <div className="row text-center">
            <div className="col-12 col-md-6">
              <p><Image src={Guarantee21Days} alt="21-day guarantee" style={{ maxWidth: '100%', height: 'auto' }} /></p>
              <h3 className="text-dark">21-Day Guarantee</h3>
              <p>Try the course risk-free for 21 days. This gives you time to receive your course materials and evaluate whether the dog grooming course is right for you.  If you decide it's not a good fit, simply contact QC to arrange a return of your course materials for a refund. It's that easy! Note: For sanitary reasons, the clippers and attachment combs provided with the course cannot be refunded (value $200 US)</p>
            </div>
            <div className="col-12 col-md-6">
              <p><Image src={Guarantee1Year} alt="1-year guarantee" style={{ maxWidth: '100%', height: 'auto' }} /></p>
              <h3 className="text-dark">1-Year Guarantee</h3>
              <p>This course will pay for itself within two years. That's a promise. If after two years of receiving your certificate of completion, you haven't earned the equivalent of your tuition fees in dog grooming fees or salary, your dog grooming course tuition will be refunded in full. All you have to do is provide proof that you've made a reasonable effort to find work as a dog groomer.</p>
            </div>
          </div>
        )
        : (
          <div className="text-center">
            <p><Image src={Guarantee21Days} alt="21-day guarantee" style={{ maxWidth: '100%', height: 'auto' }} /></p>
            <h3 className="text-dark">21-Day Guarantee</h3>
            <p>Once your enrollment has been processed, you have 21 days to review the course materials and decide whether you want to take the course. If you decide this course isn't the right course for you, simply contact the school for a refund! As long as you haven't submitted any work to your tutor yet, your tuition will be refunded in full!</p>
          </div>
        )
      }
    </Modal.Body>

    <Modal.Footer>
      <button type="button" className="btn btn-secondary" onClick={props.onToggle}>Close</button>
    </Modal.Footer>
  </Modal>
);
