import { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import { DefaultLayout } from '../../components/DefaultLayout';
import { SEO } from '../../components/SEO';
import DogGroomingResourcesBackground from '../../images/backgrounds/dog-grooming-resources.jpg';
import BecomingDogGroomerBookImage from '../../images/books/becoming-a-dog-groomer.png';
import DogGroomingProsAndConsBookImage from '../../images/books/dog-grooming-pros-cons.png';
import DogGroomingToolsBookImage from '../../images/books/dog-grooming-tools.png';
import DogGroomerCareerImage from '../../images/cards/dog-groomer-career.jpg';
import LearningInClassOnlineImage from '../../images/cards/learning-in-class-online.jpg';
import StudentGradFeaturesImage from '../../images/cards/student-grad-features.jpg';

const DogGroomingResourcesPage: NextPage = () => {
  return (
    <DefaultLayout>
      <SEO
        title="Dog Gromming Resources"
        description="Resources and Downloads to help you get through your online dog grooming class."
        canonical="/dog-grooming-courses/resources"
      />

      <section id="top" className="bg-dark">
        <Image src={DogGroomingResourcesBackground} layout="fill" objectFit="cover" objectPosition="center" placeholder="blur" alt="happy dog" />
        <div className="container text-center">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-10">
              <h1 className="fw-normal mb-0">Dog Grooming<br /><strong>Resources</strong></h1>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container text-center">
          <h2>Useful <strong>Links</strong></h2>
          <p>Learn more about QC Pet Studies and how your dog grooming course will help you achieve your goals!</p>
          <div className="row mb-5">
            <div className="col-12 col-sm-8 col-lg-4 mb-4 mb-lg-0 d-flex">
              <div className="card">
                <Image className="card-img-top" src={DogGroomerCareerImage} alt="Your Dog Grooming Career" />
                <div className="card-body">
                  <h5 className="card-title">Your Dog Grooming Career</h5>
                  <p className="card-text">Learn what you can expect from a career in dog grooming including salary expectations, potential career paths and more.</p>
                  <Link href="/resources/your-dog-grooming-career"><a className="link-primary">Learn More</a></Link>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-8 col-lg-4 mb-4 mb-lg-0 d-flex">
              <div className="card">
                <Image src={StudentGradFeaturesImage} alt="Featured Students" className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title">Featured Students</h5>
                  <p className="card-text">Follow in the footsteps of other QC students and graduates who are now enjoying their professional dog grooming careers!</p>
                  <Link href="/blog/category/student-features"><a className="link-primary">Learn More</a></Link>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-8 col-lg-4 d-flex">
              <div className="card">
                <Image src={LearningInClassOnlineImage} alt="Learning in Class vs. Online" className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title">Learning in Class vs. Online</h5>
                  <p className="card-text">Learning dog grooming online is just as effective as learning it in a classroom. Find out how!</p>
                  <Link href="/resources/class-vs-online-dog-grooming-schools"><a className="link-primary">Learn More</a></Link>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-12 col-lg-6 text-start">
              <h3>Additional links</h3>
              <ul>
                <li><Link href="/resources/required-dog-breeds"><a className="link-primary">Required Dog Breeds to Complete Your Course</a></Link></li>
                <li><Link href="/resources/learning-and-working-during-covid"><a className="link-primary">Learning and working during COVID-19</a></Link></li>
                <li><Link href="/about/faq"><a className="link-primary">Frequently Asked Questions</a></Link></li>
                <li><Link href="/about/about-qc-pet-studies#guarantee"><a className="link-primary">Information about QC Pet Studies' Double Guarantee</a></Link></li>
                <li><Link href="/about/student-discounts"><a className="link-primary">Discounts available for QC Pet Studies students and graduates</a></Link></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-light">
        <div className="container">
          <div className="row mb-4 justify-content-center">
            <div className="col-12 col-lg-10 mb-4 text-center">
              <h2>Free <strong>Downloads</strong></h2>
              <p>Download the free ebooks to keep handy during your career as a professional groomer.</p>
            </div>
            <div className="col-6 offset-3 col-md-4 offset-md-0 offset-lg-1 col-xl-3 offset-xl-2">
              <Image src={DogGroomingToolsBookImage} alt="Getting Started Guide book" />
            </div>
            <div className="col-12 col-md-8 col-lg-6 col-xl-5 text-center text-md-start mb-4 mb-lg-0">
              <h3 className="mb-4">Getting Started Guide</h3>
              <p>learn exactly what tools and equipment you'll need to start your dog groomer training with QC.</p>
              <a href="/documents/grooming-what-you-need-to-get-started.pdf" className="link-primary" target="_blank">Download</a>
            </div>
            <div className="col-6 offset-3 col-md-4 offset-md-0 offset-lg-1 col-xl-3 offset-xl-2">
              <Image src={BecomingDogGroomerBookImage} alt="Becoming a Dog Groomer book" />
            </div>
            <div className="col-12 col-md-8 col-lg-6 col-xl-5 text-center text-md-start mb-4 mb-lg-0">
              <h3 className="mb-4">Becoming a Dog Groomer</h3>
              <p>Find out what is required to become a successful dog groomer from start to finish.</p>
              <a href="/documents/becoming-a-dog-groomer.pdf" className="link-primary" target="_blank">Download</a>
            </div>
            <div className="col-6 offset-3 col-md-4 offset-md-0 offset-lg-1 col-xl-3 offset-xl-2">
              <Image src={DogGroomingProsAndConsBookImage} alt="Dog Grooming Certification Pros and Cons book" />
            </div>
            <div className="col-12 col-md-8 col-lg-6 col-xl-5 text-center text-md-start">
              <h3 className="mb-4">Pros &amp; Cons:<br />Your Dog Grooming Certificate</h3>
              <p>Find out how a dog grooming certification can help you succeed in the industry, and ways in which it might hold you back.</p>
              <a href="/documents/dog-grooming-certification-pros-and-cons.pdf" className="link-primary" target="_blank">Download</a>
            </div>
          </div>
        </div>
      </section>

    </DefaultLayout>
  );
};

export default DogGroomingResourcesPage;