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
  dgPrice: Price;
  dePrice: Price;
  countryCode: string;
  provinceCode: string | null;
  enrollPath: string;
}

const courses: CourseCode[] = [ 'dg' ];

export const Client: FC<Props> = ({ dgPrice, dePrice, countryCode, provinceCode, enrollPath }) => {
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
          {externship(countryCode, provinceCode)
            ? (
              <>
                <div className="row justify-content-center">
                  <div className="col-12 col-lg-8 col-xl-7">
                    <h2>Become a <strong>Certified Professional Dog Groomer</strong></h2>
                    <p className="lead"><strong>International Dog Grooming Professional&trade;</strong> | <i>IDGP&trade;</i></p>
                    <p className="mb-5">There's never been a better time to start a career as a professional dog groomer. Across the country, grooming salons and pet stylists have waiting lists—or are turning away new clients entirely. It's the perfect opportunity to launch a rewarding and in-demand career you'll love. Get your <strong>International Dog Groomer Certification</strong> with QC's comprehensive online training&mdash;now with two ways to train:</p>
                  </div>
                </div>
                <div className="row justify-content-center g-5 mb-5">
                  <div className="col-12 col-md-8 col-lg-6">
                    <p className="lead mb-3 fw-bold">Dog Grooming Online Track</p>
                    <p className="mb-0">Get professional, self-paced online training with personalized feedback from your grooming mentor with the online-only track. Master hands-on grooming skills from the comfort of home, with guidance from a pro groomer every step of the way. Perfect for aspiring groomers looking for comprehensive online training that's flexible and affordable.</p>
                  </div>
                  <div className="col-12 col-md-8 col-lg-6">
                    <p className="lead mb-3 fw-bold"><span className="text-danger">NEW:</span> Dog Grooming Externship Track</p>
                    <p className="mb-0">Get all the perks of our Dog Grooming Course PLUS extra practice with a hands-on externship placement at a professional grooming salon. Complete the online track of your course and start your externship placement working alongside experienced groomers. You'll build your confidence and graduate with valuable industry connections.</p>
                  </div>
                </div>
                <button className="btn btn-primary mb-4" onClick={handlePopupLinkClick}>Compare Course Features</button>
                <div className="row justify-content-center">
                  <div className="col-12 col-lg-8 col-xl-7 mb-5">
                    <p>No matter which option you choose, you'll graduate with the knowledge, skills, and certification you need to succeed in the growing dog grooming industry.</p>
                    <p className="mb-0 fw-bold">Are you ready to start your amazing new career?</p>
                  </div>
                </div>
              </>
            )
            : (
              <div className="row justify-content-center">
                <div className="col-12 col-lg-8 col-xl-7">
                  <h2>Become a <strong>Certified Professional Dog Groomer</strong></h2>
                  <p className="lead"><strong>International Dog Grooming Professional&trade;</strong> | <i>IDGP&trade;</i></p>
                  <p className="mb-5">There's never been a better time to start a career as a professional dog groomer. Across the country, grooming salons and pet stylists have waiting lists—or are turning away new clients entirely. It's the perfect opportunity to launch a rewarding and in-demand career you'll love. Get your <strong>International Dog Groomer Certification</strong> with QC's comprehensive online training.</p>
                </div>
              </div>
            )}
          <div className="row justify-content-center">
            <div className="col-12 col-lg-10">
              <div className="ratio ratio-16x9">
                <video controls poster="https://89b45d42c17e11dd3d57-62a1fc0bf60a98e1d5e980348a7de3b7.ssl.cf1.rackcdn.com/dog-grooming-teaser.jpg">
                  <source src="https://89b45d42c17e11dd3d57-62a1fc0bf60a98e1d5e980348a7de3b7.ssl.cf1.rackcdn.com/dog-grooming-teaser.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
        </div>
      </section>

      {externship(countryCode, provinceCode)
        ? (
          <>
            <ComparisonModal dgPrice={dgPrice} dePrice={dePrice} show={popup} onHide={handleHide} />

            <PriceSection className="bg-light" dgPrice={dgPrice} dePrice={dePrice} onPopupLinkClick={handlePopupLinkClick} countryCode={countryCode} />
          </>
        )
        : (
          <>
            {dgPrice.promoDiscount > 0
              ? <PriceSectionWithDiscount courses={courses} price={dgPrice} doubleGuarantee enrollPath={enrollPath} />
              : <OldPriceSection courses={courses} price={dgPrice} doubleGuarantee enrollPath={enrollPath} />
            }
          </>
        )}
    </>
  );
};
