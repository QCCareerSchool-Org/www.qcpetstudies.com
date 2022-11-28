import Image from 'next/legacy/image';
import { ReactElement } from 'react';
import { Modal } from 'react-bootstrap';

import { useScreenWidth } from '../hooks/useScreenWidth';
import { useToggle } from '../hooks/useToggle';
import MasterGroomerLisaImage from '../images/lisa-video-thumbnail.jpg';
import MasterGroomerPaddyImage from '../images/paddy-video-thumbnail.jpg';

type Props = {
  className?: string;
  id?: string;
};

export const DGTutorSection = ({ className, id = 'tutors' }: Props): ReactElement => {
  const screenWidth = useScreenWidth();
  const lgOrGreater = screenWidth >= 992;

  const [ lisaPopupVisible, lisaPopupToggle ] = useToggle();
  const [ paddyPopupVisible, paddyPopupToggle ] = useToggle();

  return (
    <>
      <div id={id} className="sectionAnchor" />
      <section className={className}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-6 mb-4 mb-lg-0">
              <div className="pe-lg-4">
                <h2>Learn from Certified <strong>Master Groomers</strong></h2>
                <p>When you enroll with QC Pet Studies, you'll be matched with an industry professional currently working in the field who will review your work and provide you with in-depth feedback and advice on every assignment. These accomplished tutors are Certified Master Groomers who have decades of experience in the grooming industry and are eager to share their professional insight to help you succeed.</p>
                <p className="mb-0">Your personal tutor will provide you with in-depth audio feedback on each assignment to let you know what you did well and how you could improve. Use this feedback to guide you through the next unit in your course.</p>
              </div>
            </div>
            <div className="col-12 col-lg-6 d-flex flex-column justify-content-around">
              <div className="d-flex flex-column flex-sm-row align-items-center mb-2 mb-sm-0 mb-lg-4">
                <div className="me-sm-4 mb-1 mb-sm-0">
                  <button onClick={lisaPopupToggle} className="btn btn-link"><div className="imageShadowWrapper"><Image src={MasterGroomerLisaImage} alt="Master Groomer Lisa" width="250" height="166" placeholder="blur" /></div></button>
                </div>
                <div className="d-flex flex-column">
                  <h3>Lisa Day</h3>
                  <h4>Certified Master Groomer</h4>
                  <i>40+ Years of Experience</i>
                </div>
              </div>
              {!lgOrGreater && <div className="mb-4" />}
              <div className="d-flex flex-column flex-sm-row align-items-center">
                <div className="me-sm-4 mb-1 mb-sm-0">
                  <button onClick={paddyPopupToggle} className="btn btn-link"><div className="imageShadowWrapper"><Image src={MasterGroomerPaddyImage} alt="Master Groomer Paddy" width="250" height="166" placeholder="blur" /></div></button>
                </div>
                <div className="d-flex flex-column">
                  <h3>Paddy Gaffney</h3>
                  <h4>Certified Master Groomer</h4>
                  <i>20 Years of Experience</i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Modal show={lisaPopupVisible} onHide={lisaPopupToggle} size="lg">
          <Modal.Header closeButton>Lisa Day</Modal.Header>
          <Modal.Body>
            <div className="ratio ratio-16x9">
              <video controls autoPlay>
                <source src="https://89b45d42c17e11dd3d57-62a1fc0bf60a98e1d5e980348a7de3b7.ssl.cf1.rackcdn.com/interview-lisa.mp4" type="video/mp4" />
              </video>
            </div>
          </Modal.Body>
        </Modal>
        <Modal show={paddyPopupVisible} onHide={paddyPopupToggle} size="lg">
          <Modal.Header closeButton>Paddy Gaffney</Modal.Header>
          <Modal.Body>
            <div className="ratio ratio-16x9">
              <video controls autoPlay>
                <source src="https://89b45d42c17e11dd3d57-62a1fc0bf60a98e1d5e980348a7de3b7.ssl.cf1.rackcdn.com/interview-paddy.mp4" type="video/mp4" />
              </video>
            </div>
          </Modal.Body>
        </Modal>
      </section>

      <style jsx>{`
        .imageShadowWrapper {
          padding: 0 0 12px; // to offset the shadow
        }
        @media (min-width: 576px) {
          .imageShadowWrapper {
            padding: 0 12px 0 0; // to offset the shadow
          }
        }
      `}</style>
    </>
  );
};
