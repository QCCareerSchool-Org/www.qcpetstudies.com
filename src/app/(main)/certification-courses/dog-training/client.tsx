'use client';

import type { FC, MouseEventHandler } from 'react';

import { ComparisonModal } from './comparisonModal';
import { PriceSection } from './priceSection';
import type { Price } from '@/domain/price';
import { useToggle } from '@/hooks/useToggle';

interface Props {
  dtPrice: Price;
  tePrice: Price;
  countryCode: string;
}

export const Client: FC<Props> = ({ dtPrice, tePrice, countryCode }) => {
  const [ popup, toggle ] = useToggle();

  const handlePopupLinkClick: MouseEventHandler = e => {
    e.preventDefault();
    toggle();
  };

  const handleHide = toggle;

  return (
    <>
      <section className="bg-light">
        <div className="container text-center">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-8 mb-4">
              <div className="ratio ratio-16x9">
                <video controls preload="metadata" poster="https://cdn.qccareerschool.com/pet/dog-training-trailer-poster.png">
                  <source src="https://cdn.qccareerschool.com/pet/dog-training-trailer.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-12 col-lg-8 col-xl-7">
              <h2>Become a <strong>Certified Dog Trainer</strong></h2>
              <p className="lead"><strong>International Dog Training Professional&trade;</strong> | <i>IDTP&trade;</i></p>
              <p>Dog training is a fast-growing industry, with more pet owners seeking professional help to raise well-behaved, confident dogs. Whether you want to work for a training facility, offer private lessons, or start your own dog training business, you'll graduate with the practical skills and industry knowledge needed to build a rewarding career working with dogs.</p>
              <p>Get your <strong>International Dog Trainer Certification</strong> with QC's comprehensive online training - now with two ways to train: </p>
            </div>
          </div>
          <div className="row justify-content-center g-5 mb-5">
            <div className="col-12 col-md-8 col-lg-6">
              <p className="lead mb-3 fw-bold">Dog Training Online Track</p>
              <p className="mb-0">Get professional, self-paced online training with personalized feedback from your dog training mentor, entirely online. Master hands-on skills working with dogs from the comfort of home, with guidance from a pro trainer every step of the way. Perfect for aspiring dog trainers looking for comprehensive online training that's flexible and affordable.</p>
            </div>
            <div className="col-12 col-md-8 col-lg-6">
              <p className="lead mb-3 fw-bold"><span className="text-danger">NEW:</span> Dog Training Externship Track</p>
              <p className="mb-0">Get all the perks of our Dog Training Course PLUS extra practice with a hands-on externship placement with a professional dog trainer. Complete the online track of your course and start your externship placement working alongside an experienced professional dog trainer. You'll build your confidence and graduate with valuable industry connections.</p>
            </div>
          </div>
          <button className="btn btn-primary mb-4" onClick={handlePopupLinkClick}>Compare Course Features</button>
          <div className="row justify-content-center">
            <div className="col-12 col-lg-8 col-xl-7 mb-5">
              <p>No matter which option you choose, you'll graduate with the knowledge, skills, and certification you need to succeed in the growing dog training industry.</p>
              <p className="mb-0 fw-bold">Are you ready to start your amazing new career?</p>
            </div>
          </div>
        </div>
      </section>
      <ComparisonModal dtPrice={dtPrice} dePrice={tePrice} show={popup} onHide={handleHide} />
      <PriceSection dtPrice={dtPrice} dePrice={tePrice} onPopupLinkClick={handlePopupLinkClick} countryCode={countryCode} />
    </>
  );
};
