import { NextPage } from 'next';
import Image from 'next/legacy/image';
import Link from 'next/link';

import { SEO } from '../../components/SEO';
import { useScreenWidth } from '../../hooks/useScreenWidth';
import AprilCostigan from '../../images/april-costigan-300x300.jpg';
import GroomerDemattingBackground from '../../images/backgrounds/license-vs-certification-bg.jpg';
import DogDriedOffByTowel from '../../images/dog-dried-off-by-towel.jpg';
import DogStaircase from '../../images/dog-on-staircase.jpg';
import DogSittingOnTowel from '../../images/dog-sitting-on-towel.jpg';
import DogToy from '../../images/dog-toy.jpg';

const LicenseVsCertification: NextPage = () => {
  const screenWidth = useScreenWidth();
  const lgOrGreater = screenWidth >= 992;

  return (
    <>
      <SEO
        title="Dog Grooming License vs. Certification"
        description="Dog Grooming License vs. Certification"
        canonical="/resources/license-vs-certification"
      />

      <section id="top" className="bg-dark">
        <Image src={GroomerDemattingBackground} layout="fill" objectFit="cover" objectPosition="center" placeholder="blur" alt="groomer dematting a dog" priority />
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
              <p className="lead">Even if education is not required, discover the many <Link href="/2020/11/el-paso-requires-dog-groomer-certification-as-of-january-1st" className="link-primary">advantages of getting professionally trained and certified</Link>!</p>
            </div>
            {lgOrGreater && <div className="col-6">
              <Image src={DogToy} layout="responsive" objectPosition="center" alt="a dog toy" />
            </div>}
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
                <p className="mb-0"><Link href="/learning-online/class-vs-online-dog-grooming-schools" className="link-primary">Discover the difference between in-person and online certification courses here!</Link></p>
              </div>
            </div>
            {lgOrGreater && <div className="col-6" style={{ position: 'relative' }}>{/* need relative position for background image */}
              <Image src={DogDriedOffByTowel} layout="fill" objectFit="cover" objectPosition="center" alt="a dog being dried off with a towel" />
            </div>}
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
              <Image src={DogSittingOnTowel} layout="responsive" objectPosition="center" alt="a dog sitting on a towel" />
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
                <div id="quoteWrapper" className="d-flex align-items-center">
                  <div>
                    <p className="lead mb-4">&quot;QC Pet Studies offered exactly what I wanted! There were lots of instructional videos that I could watch over and over again and the practical assignments offered lots of hands-on training. The valuable tutor feedback I received throughout the course was the most important thing to me...&quot;</p>
                    <div className="d-flex mb-4">
                      <div className="me-4">
                        <Image src={AprilCostigan} className="rounded-circle" width={50} height={50} alt="April Costigan" />
                      </div>
                      <p>April Costigan<br /><span className="text-muted">QC Graduate</span></p>
                    </div>
                    <p className="lead mb-0"><Link href="/2021/01/qc-pet-studies-graduate-feature-april-costigan" className="link-primary">Read April's full Graduate Feature on QC's blog!</Link></p>
                  </div>
                </div>
              </div>
            </div>
            {lgOrGreater && (
              <div className="col-lg-4 col-xl-3" style={{ position: 'relative' }}>
                <Image src={DogStaircase} layout="fill" objectFit="cover" objectPosition="center" alt="a dog sitting on a staircase" />
              </div>
            )}
          </div>
        </div>
      </section>

      <style jsx>{`
      @media (min-width: 992px) {
        #quoteWrapper {
          min-height: 400px;
        }
      }
      `}</style>
    </>
  );
};

export default LicenseVsCertification;
