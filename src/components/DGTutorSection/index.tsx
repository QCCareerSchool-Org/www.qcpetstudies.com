import Image, { StaticImageData } from 'next/image';
import { FC, ReactElement } from 'react';
import { Modal } from 'react-bootstrap';

import { useToggle } from '../../hooks/useToggle';
import IconPlay from '../../images/circle-play-regular.svg';
import { ImageCircle } from './../ImageCircle';
import { lisaDay, mariKusanagi, paddyGaffney, Tutor } from './tutors';

type Props = {
  className?: string;
  id?: string;
};

export const DGTutorSection = ({ className, id = 'tutors' }: Props): ReactElement => (
  <>
    <div id={id} className="sectionAnchor" />
    <section className={className}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-8 text-center">
            <h2>Learn from Certified <strong>Master Groomers</strong></h2>
            <p>When you enroll with QC Pet Studies, you'll be paired with an expert groomer who will review your work and provide detailed audio feedback on each assignment. With decades of industry experience, your tutor will offer valuable advice to help you succeed and improve as you progress through the course.</p>
          </div>
        </div>
        <div className="row mt-2 g-5">
          <MasterIcon {...mariKusanagi} />
          <MasterIcon {...lisaDay} />
          <MasterIcon {...paddyGaffney} />
        </div>
      </div>
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

const MasterIcon: FC<Tutor> = ({ ...tutor }) => {
  const [ modalOpened, toggleModal ] = useToggle();

  return (
    <div className="col-12 col-lg-4">
      <ImageCircle src={tutor.image} alt="" size={200} />
      <div className="mt-4">
        <div className="d-flex align-items-center justify-content-between mb-3">
          <div className="">
            <h3>{tutor.name}</h3>
            <h4>Certified Master Groomer</h4>
            <p className="my-0"><i>{tutor.yearsExperience}+ Years of Experience</i></p>
          </div>
          {tutor.video && <Image src={IconPlay as StaticImageData} alt="Play Button" onClick={toggleModal} width={40} className="btn btn-link" />}
        </div>
        <p>{tutor.description}</p>
      </div>

      <Modal show={modalOpened} onHide={toggleModal} size="lg">
        <Modal.Header closeButton>{tutor.name}</Modal.Header>
        <Modal.Body>
          <div className="ratio ratio-16x9">
            <video controls autoPlay>
              <source src={tutor.video} type="video/mp4" />
            </video>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};
