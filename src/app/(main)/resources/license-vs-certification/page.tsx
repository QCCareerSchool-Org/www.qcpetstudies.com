import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import AprilCostigan from './april-costigan-300x300.jpg';
import DogDriedOffByTowel from './dog-dried-off-by-towel.jpg';
import DogStaircase from './dog-on-staircase.jpg';
import DogSittingOnTowel from './dog-sitting-on-towel.jpg';
import DogToy from './dog-toy.jpg';
import GroomerDemattingBackground from './license-vs-certification-bg.jpg';
import styles from './page.module.scss';
import type { PageComponent } from '@/app/serverComponent';
import { BackgroundImage } from '@/components/backgroundImage';

export const metadata: Metadata = {
  title: 'Dog Grooming License vs. Certification',
  alternates: { canonical: '/resources/license-vs-certification' },
};

const LicenseVsCertification: PageComponent = () => (
  <>
    <section className="bg-dark">
      <BackgroundImage src={GroomerDemattingBackground} priority />
      <div className="image-overlay-gradient" />
      <div className="container text-center">
        <h1>Dog Grooming License vs. Certification</h1>
        <p className="lead">What's the difference between a dog grooming license and a dog grooming certificate?</p>
      </div>
    </section>

    <section>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-lg-6">
            <h2 className="mb-4">Is Training Required to Be a <strong>Dog Groomer?</strong></h2>
            <p>In many places, there are no formal licensing or training requirements to be a professional dog groomer. It all depends on where you live and varies from region to region. Some places require a license or certification in order to operate a grooming business. Others will require nothing at all.</p>
            <p>Be sure to research local regulations to best determine what is required in order to start a dog grooming career in your city or town.</p>
            <p className="lead">Even if education is not required, discover the many <Link href="/2020/11/el-paso-requires-dog-groomer-certification-as-of-january-1st">advantages of getting professionally trained and certified</Link>!</p>
          </div>
          <div className="col-6 d-none d-lg-block">
            <Image src={DogToy} alt="a dog toy" sizes="100vw" style={{ width: '100%', height: 'auto', objectPosition: 'center' }} />
          </div>
        </div>
      </div>
    </section>

    <section className="bg-light py-0">{/* override padding */}
      <div className="container-fluid">
        <div className="row justify-content-center justify-content-lg-end">
          <div className="col-12 col-lg-6 col-fluid col-fluid-lg-6">
            <div className="section py-lg-5 pe-lg-4">{/* re-add section padding, but override on lg or greater, and add right padding on lg or greater */}
              <h2>Dog Grooming <strong>License</strong></h2>
              <p>There is no international standard that defines what a dog grooming license is. However, it's considered a reputable document that proves you're fit to groom dogs.</p>
              <p>In certain areas, a freelance groomer running their own business will require a Pet Grooming Facility License or regional certification for their facility. The groomer themselves might not need that license, but their <em>business </em>will.</p>
              <p>Obtaining a dog grooming license varies by location. It might be as simple as sending in an application or taking a written exam. To know for sure, call your local government to find out the regulations in your area!</p>
              <p className="lead"><strong>Keep in mind:</strong> a dog grooming license won't teach you <em>how</em> to be a groomer. It's strongly recommended that you pair your license with a professional certification course.</p>
              <p className="mb-0"><Link href="/learning-online/class-vs-online-dog-grooming-schools">Discover the difference between in-person and online certification courses here!</Link></p>
            </div>
          </div>
          <div className="col-6 d-none d-lg-block">
            <BackgroundImage src={DogDriedOffByTowel} />
          </div>
        </div>
      </div>
    </section>

    <section>
      <div className="container text-center">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10">
            <h2>Dog Grooming <strong>Certification</strong></h2>
            <p>A certification is earned after successfully completing a professional dog grooming certification course. Unlike a dog grooming license, a certification represents the training, education, and knowledge you have in the field of dog grooming.</p>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-5 mb-4 mb-md-0">
            <Image src={DogSittingOnTowel} alt="a dog sitting on a towel" sizes="100vw" style={{ width: '100%', height: 'auto', objectPosition: 'center' }} />
          </div>
          <div className="col-sm-12 col-md-6 col-lg-5">
            <div className="text-start">
              <p className="lead">Dog grooming certification courses will teach you</p>
              <ul className="mb-4">
                <li>Breed standards</li>
                <li>Grooming techniques</li>
                <li>Dog anatomy</li>
                <li>How to create various haircuts and styles</li>
                <li>How to use and sanitize equipment</li>
                <li>Dog behavior</li>
                <li>First aid training</li>
                <li>Business training</li>
                <li>And more!</li>
              </ul>
              <p>To truly be the best dog groomer you can be, proper training from a certification course is essential!</p>
              <Link href="/certification-courses/dog-grooming" className="btn btn-primary">View The Dog Grooming Course</Link>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="bg-dark py-0">{/* override padding */}
      <div className="container-fluid">
        <div className="row justify-content-center justify-content-lg-end">
          <div className="col-12 col-lg-8 col-xl-9 col-fluid col-fluid-lg-8 col-fluid-xl-9">
            <div className="section pe-lg-5">{/* re-add section padding, and add right padding on lg or greater */}
              <div className={`d-flex align-items-center ${styles.quoteWrapper}`}>
                <div>
                  <p className="lead mb-4">&quot;QC Pet Studies offered exactly what I wanted! There were lots of instructional videos that I could watch over and over again and the practical assignments offered lots of hands-on training. The valuable tutor feedback I received throughout the course was the most important thing to me...&quot;</p>
                  <div className="d-flex mb-4">
                    <div className="me-4">
                      <Image
                        src={AprilCostigan}
                        className="rounded-circle"
                        width={50}
                        height={50}
                        alt="April Costigan"
                        style={{ maxWidth: '100%', height: 'auto' }}
                      />
                    </div>
                    <p>April Costigan<br /><span className="text-muted">QC Graduate</span></p>
                  </div>
                  <p className="lead mb-0"><Link href="/2021/01/qc-pet-studies-graduate-feature-april-costigan">Read April's full Graduate Feature on QC's blog!</Link></p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-xl-3 d-none d-lg-block" style={{ position: 'relative' }}>
            <Image src={DogStaircase} alt="a dog sitting on a staircase" fill sizes="100vw" style={{ objectFit: 'cover', objectPosition: 'center' }} />
          </div>
        </div>
      </div>
    </section>
  </>
);

export default LicenseVsCertification;
