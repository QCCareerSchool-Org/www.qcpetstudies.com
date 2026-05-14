'use client';

import type { FC, MouseEventHandler } from 'react';

import { ComparisonModal } from './comparisonModal';
import { PriceSection } from './priceSection';
import { PriceSection as OldPriceSection } from '@/components/priceSection';
import { PriceSectionWithDiscount } from '@/components/priceSectionWithDiscount';
import type { CourseCode } from '@/domain/courseCode';
import type { Price } from '@/domain/price';
import { useToggle } from '@/hooks/useToggle';
import { externship } from '@/lib/externship';

interface Props {
  dtPrice: Price;
  dePrice: Price;
  countryCode: string;
  provinceCode: string | null;
  enrollPath: string;
}

const courses: CourseCode[] = [ 'dt' ];

export const Client: FC<Props> = ({ dtPrice, dePrice, countryCode, provinceCode, enrollPath }) => {
  const [ popup, toggle ] = useToggle();

  const handlePopupLinkClick: MouseEventHandler = e => {
    e.preventDefault();
    toggle();
  };

  const handleHide = toggle;

  return (
    <>
      <section>
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
          {externship(countryCode, provinceCode)
            ? (
              <>
                <div className="row justify-content-center">
                  <div className="col-12 col-lg-8 col-xl-7">
                    <h2>Become a <strong>Certified Professional Dog Trainer</strong></h2>
                    <p className="lead"><strong>International Dog Training Professional&trade;</strong> | <i>IDTP&trade;</i></p>
                    <p>Dog training is a booming industry! Owners need help to turn their dogs into well-behaved members of the family, and they want someone qualified to help them achieve this goal.  Whether you want to work in a training school, launch your own dog training business, or freelance as a private dog trainer, you'll graduate with all the knowledge and skills you need to succeed in the dog training industry!</p>
                  </div>
                </div>
                <div className="row justify-content-center g-5 mb-5">
                  <div className="col-12 col-md-8 col-lg-6">
                    <p className="lead mb-3 fw-bold">Dog Training Online Track</p>
                    <p className="mb-0">Get professional, self-paced online training with personalized feedback from your dog training mentor, entirely online. Master hands-on skills working with dogs from the comfort of home, with guidance from a pro trainer every step of the way. Perfect for aspiring dog trainers looking for comprehensive online training that's flexible and affordable. </p>
                  </div>
                  <div className="col-12 col-md-8 col-lg-6">
                    <p className="lead mb-3 fw-bold"><span className="text-danger">NEW:</span> Dog Training Externship Track</p>
                    <p className="mb-0">Get all the perks of our Dog Training Course PLUS extra practice with a hands-on externship placement with a professional dog trainer. Complete the online track of your course and start your externship placement working alongside an experienced professional dog trainer. You'll build your confidence and graduate with valuable industry connections</p>
                  </div>
                </div>
                <button className="btn btn-primary mb-4" onClick={handlePopupLinkClick}>Compare Course Features</button>
                <div className="row justify-content-center">
                  <div className="col-12 col-lg-8 col-xl-7 mb-5">
                    <p>No matter which option you choose, you'll graduate with the knowledge, skills, and certification you need to succeed in the growing dog training industry.</p>
                    <p className="mb-0 fw-bold">Are you ready to start your amazing new career?</p>
                  </div>
                </div>
              </>
            )
            : (
              <div className="row justify-content-center">
                <div className="col-12 col-lg-8 col-xl-7">
                  <p className="lead text-warning"><strong>International Dog Training Professional&trade;</strong> | <i>IDTP&trade;</i></p>
                  <h2>Become a <strong>Certified Professional Dog Trainer</strong></h2>
                  <p>Dog training is a booming industry! Owners need help to turn their dogs into well-behaved members of the family, and they want someone qualified to help them achieve this goal.  Whether you want to work in a training school, launch your own dog training business, or freelance as a private dog trainer, you'll graduate with all the knowledge and skills you need to succeed in the dog training industry!</p>
                </div>
              </div>
            )}
        </div>
      </section>

      <section>
        {externship(countryCode, provinceCode)
          ? (
            <>
              <ComparisonModal dtPrice={dtPrice} dePrice={dePrice} show={popup} onHide={handleHide} />

              <PriceSection className="bg-light" dtPrice={dtPrice} dePrice={dePrice} onPopupLinkClick={handlePopupLinkClick} countryCode={countryCode} />
            </>
          )
          : (
            <>
              {dtPrice.promoDiscount > 0
                ? <PriceSectionWithDiscount courses={courses} price={dtPrice} doubleGuarantee enrollPath={enrollPath} />
                : <OldPriceSection courses={courses} price={dtPrice} doubleGuarantee enrollPath={enrollPath} />
              }
            </>
          )}
      </section>
    </>
  );
};
