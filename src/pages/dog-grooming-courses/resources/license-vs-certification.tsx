import { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { DefaultLayout } from '../../../components/DefaultLayout';
import { SEO } from '../../../components/SEO';
import { useScreenWidth } from '../../../hooks/useScreenWidth';
import AprilCostigan from '../../../images/april-costigan-300x300.jpg';
import firstSectionBackgrouround from '../../../images/backgrounds/license-vs-certification-bg.jpg';
import DogTowel1 from '../../../images/dog-towel-2.jpg';
import DogTowel from '../../../images/dog-towel.jpg';
import DogToy from '../../../images/dog-toy.jpg';
import PetTestimonial from '../../../images/pet-testimonial.jpg';

const LicenseVsCertification: NextPage = () => {

  const screenWidth = useScreenWidth();

  const lgOrGreater = screenWidth >= 992;

  return (
    <DefaultLayout>
      <SEO
        title="Dog Grooming License VS Certification"
        description="Dog Grooming License VS Certification"
        canonical="dog-grooming-courses/resources/license-vs-certification"
      />

      <section id="firstSection" className="bg-dark">
        <Image src={firstSectionBackgrouround} layout="fill" objectFit="cover" objectPosition="center" alt="Learning during covid" />
        <div className="image-overlay-gardient"></div>
        <div className="container text-center">
          <div className="row">
            <div className="col-12 col-md-10 offset-md-1 text-white">
              <h1 className="text-white">Dog Grooming License vs. Certification</h1>
              <h4>What&apos;s the difference between a dog grooming license and a dog grooming certificate?</h4>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row mb-5 text-center">
            <div className="col-12 col-md-10 offset-md-1">
              <h2>Is Training Required to be a <strong>Dog Groomer?</strong></h2>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-lg-6 mb-4 mb-lg-0">
              <p>In many places, there are no formal licensing or training requirements to be a professional dog groomer. It all depends on where you live and varies from region to region.
                Some places require a license or certification in order to operate a grooming business. Others will require nothing at all.</p>
              <p className="my-3">Be sure to research local regulations to best determine what is required in order to start a dog grooming career in your city or town.</p>
              <h4>Even if education is not required,
                <Link href="https://www.doggroomingcourse.com/2020/11/el-paso-requires-dog-groomer-certification-as-of-january-1st/"><a className="link-primary">click here</a></Link>
                to discover the many advantages of getting professionally trained and certified!
              </h4>
            </div>
            <div className="col-12 col-lg-6 mb-4 mb-lg-0">
              <Image src={DogToy} objectFit="contain" objectPosition="center" alt="Dog toy" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-light">
        { lgOrGreater && <Image src={DogTowel} layout="fill" objectFit="contain" objectPosition="right" alt="Dog towel" /> }
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-6 mb-4 mb-lg-0">
              <h2>Dog Grooming <strong>License</strong></h2>
              <p>There is no international standard that defines what a dog grooming license is. However, it&apos;s considered a reputable document that proves you&apos;re fit to groom dogs.</p>
              <p>In certain areas, a freelance groomer running their own business will require a Pet Grooming Facility License or regional certification for their facility. The groomer themselves might not need that license, but their <em>business </em>will.</p>
              <p>Obtaining a dog grooming license varies by location. It might be as simple as sending in an application or taking a written exam. To know for sure, call your local government to find out the regulations in your area!</p>
              <h4><strong>Keep in mind:</strong> a dog grooming license won&apos;t teach you <em>how </em>to be a groomer. It&apos;s strongly recommended that you pair your license with a professional certification course.</h4>
              <p>
                <Link href="/learning-online/class-vs-online-dog-grooming-schools/"><a className="link-primary">Discover the difference between in-person and online certification courses here!</a></Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row mb-5 text-center">
            <div className="col-12 col-md-10 offset-md-1">
              <h2>Dog Grooming <strong>Certification</strong></h2>
              <p>A certification is earned after successfully completing a professional dog grooming certification course. Unlike a dog grooming license, a certification represents the training, education, and knowledge you have in the field of dog grooming.</p>
            </div>
          </div>
          <div className="row d-flex align-items-center">
            <div className="col-12 col-lg-6 mb-4 mb-lg-0">
              <Image src={DogTowel1} objectFit="contain" objectPosition="center" alt="Dog towel" />
            </div>
            <div className="col-12 col-lg-6 mb-4 mb-lg-0">
              <h4>Dog grooming certification courses will teach you:</h4>
              <ul className="mb-4">
                <li> Breed standards</li>
                <li> Grooming techniques</li>
                <li> Dog anatomy</li>
                <li> How to create various haircuts and styles</li>
                <li> How to use and sanitize equipment</li>
                <li> Dog behavior</li>
                <li> First Aid training</li>
                <li> Business training</li>
                <li> And more!</li>
              </ul>
              <p>To truly be the best dog groomer you can be, proper training from a certification course is essential!</p>
              <a className="btn btn-primary" target="_blank" href="/online-courses/">VIEW ONLINE COURSES</a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-dark">
        { lgOrGreater && <Image src={PetTestimonial} layout="fill" objectFit="contain" objectPosition="right" alt="Dog towel" /> }
        <div className="container">
          <div className="row justify-content-md-start justify-content-center">
            <div className="col-12 col-lg-9 mb-4 mb-lg-0 py-4 px-5">
              <p>&quot;QC Pet Studies offered exactly what I wanted! There were lots of instructional videos that I could watch over and over again and the practical assignments offered lots of hands-on training. The valuable tutor feedback I received throughout the course was the most important thing to me...&quot; </p>
              <div className="d-flex gap-3 align-items-center mb-4">
                <Image src={AprilCostigan} className="rounded-circle" width="50px" height="50px" alt="April costigan" />
                <span className="d-flex flex-column col-6 col-md-2">
                  <span>April Costigan</span>
                  <span className="small text-light">QC Graduate</span>
                </span>
              </div>
              <p>
                <Link href="/2021/01/qc-pet-studies-graduate-feature-april-costigan/"><a className="link-primary">Read April&apos;s full Graduate Feature on QC&apos;s blog!</a></Link>
              </p>
            </div>
          </div>
        </div>
      </section>

    </DefaultLayout>
  );
};

export default LicenseVsCertification;
