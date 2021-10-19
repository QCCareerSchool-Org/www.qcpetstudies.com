import { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { DefaultLayout } from '../../../components/DefaultLayout';
import { SEO } from '../../../components/SEO';
import DogGroomingResourcesBackground from '../../../images/backgrounds/dog-grooming-resources.jpg';
import BecomingDogGroomerImage from '../../../images/cards/becoming-a-dog-groomer.png';
import DogGroomerCareerImage from '../../../images/cards/dog-groomer-career.jpg';
import DogGroomingProsAndConsImage from '../../../images/cards/dog-grooming-pros-cons.png';
import DogGroomingToolsImage from '../../../images/cards/dog-grooming-tools.png';
import LearningInClassOnlineImage from '../../../images/cards/learning-in-class-online.jpg';
import StudentGradFeaturesImage from '../../../images/cards/student-grad-features.jpg';

const DogGroomingResourcesPage: NextPage = () => {
  return (
    <DefaultLayout>
      <SEO
        title="Dog Gromming Resources"
        description="Dog Gromming Resources"
        canonical="/dog-grooming-courses/resources/dog-grooming-resources"
      />

      <section id="firstSection" className="bg-dark">
        <Image src={DogGroomingResourcesBackground} layout="fill" objectFit="cover" objectPosition="center" alt="Learning during covid" />
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-10 offset-lg-1">
              <h1>Dog <br /> Grooming  <br /> <strong>Resources</strong></h1>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row text-center mb-4">
            <h2>Useful <strong>Links</strong></h2>
            <p>Learn more about QC Pet Studies and how your dog grooming course will help you achieve your goals!</p>
            <div className="d-flex flex-column flex-md-row gap-3 gap-md-4">
              <div className="card col-md-4">
                <Image className="card-img-top" src={DogGroomerCareerImage} alt="Your Dog Grooming Career" />
                <div className="card-body">
                  <h5 className="card-title"><strong>Your Dog Grooming Career</strong></h5>
                  <p className="card-text">Learn what you can expect from a career in dog grooming including salary expectations, potential career paths and more.</p>
                  <Link href="/dog-grooming-courses/how-it-works/"><a className="link-primary">Learn More</a></Link>
                </div>
              </div>
              <div className="card col-md-4">
                <Image src={StudentGradFeaturesImage} alt="Student and Graduate Features" className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title">Student and Graduate Features</h5>
                  <p className="card-text">Follow in the footsteps of other QC students and graduates who are now enjoying their professional dog grooming careers!</p>
                  <Link href="https://www.doggroomingcourse.com/category/student-features/"><a className="link-primary">Learn More</a></Link>
                </div>
              </div>
              <div className="card col-md-4">
                <Image src={LearningInClassOnlineImage} alt="Learning in-class vs. Online<" className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title">Learning in-class vs. Online</h5>
                  <p className="card-text">Learning dog grooming online is just as effective as learning it in a classroom. <br /> Find out how!</p>
                  <Link href="/dog-grooming-courses/resources/learning-in-class-vs-online/"><a className="link-primary">Learn More</a></Link>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-10 offset-md-2">
              <h3>Additional links</h3>
              <ul>
                <li><Link href="/dog-grooming-courses/how-it-works/"><a className="link-primary">Required Dog Breeds</a></Link></li>
                <li><Link href="/dog-grooming-courses/how-it-works/"><a className="link-primary">Learning and working during COVID-19</a></Link></li>
                <li><Link href="/dog-grooming-courses/how-it-works/"><a className="link-primary">Frequently Asked Questions about QC Pet Studies, Dog Grooming, and More</a></Link></li>
                <li><Link href="/dog-grooming-courses/how-it-works/"><a className="link-primary">Information about QC Pet Studies&apos; Double Guarantee</a></Link></li>
                <li><Link href="/dog-grooming-courses/how-it-works/"><a className="link-primary">Discounts available for QC Pet Studies students and graduates</a></Link></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-light">
        <div className="container">
          <div className="row text-center mb-4">
            <h2>Free <strong>Downloads</strong></h2>
            <p>Download the free ebooks to keep handy during your career as a professional groomer.</p>
          </div>
          <div className="row">
            <div className="col-md-10 offset-md-2 mb-4">
              <div className="d-flex flex-column flex-md-row  gap-3 gap-md-4 align-items-center">
                <div className="col-md-4 d-flex justify-content-center">
                  <Image src={DogGroomingToolsImage} alt="Practicum1" />
                </div>
                <div className="col-md-4">
                  <h3 className="mb-4">Getting Started Guide</h3>
                  <p>learn exactly what tools and equipment you&apos;ll need to start your dog groomer training with QC.</p>
                  <Link href="https://drive.google.com/file/d/1Wetomwtaa2sQKgdvq70KnqhQqgGs3SCe/view?usp=sharing"><a className="link-primary" target="_blank">Download</a></Link>
                </div>
              </div>
            </div>
            <div className="col-md-10 offset-md-2 mb-4">
              <div className="d-flex flex-column flex-md-row gap-3 gap-md-4 align-items-center">
                <div className="col-md-4 d-flex justify-content-center">
                  <Image src={BecomingDogGroomerImage} alt="Practicum1" />
                </div>
                <div className="col-md-4">
                  <h3 className="mb-4">Becoming a Dog Groomer</h3>
                  <p> Find out what is required to become a successful dog groomer from start to finish.</p>
                  <Link href="https://drive.google.com/file/d/1WXrYPlrII3s87DSO9LswtjLzx3wxmre9/view?usp=sharing"><a className="link-primary" target="_blank">Download</a></Link>
                </div>
              </div>
            </div>
            <div className="col-md-10 offset-md-2 mb-4">
              <div className="d-flex flex-column flex-md-row gap-3 gap-md-4 align-items-center">
                <div className="col-md-4 d-flex justify-content-center">
                  <Image src={DogGroomingProsAndConsImage} alt="Practicum1" />
                </div>
                <div className="col-md-4">
                  <h3 className="mb-4">Pros & Cons: <br /> Your Dog Grooming Certificate</h3>
                  <p> Find out how a dog grooming certification can help you succeed in the industry, and ways in which it might hold you back.</p>
                  <Link href="https://drive.google.com/file/d/1H0aLms93EOrmw4pS9s7o5FXctP2o6hs2/view?usp=sharing"><a className="link-primary" target="_blank">Download</a></Link>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-10 offset-md-2">
              <h3>Additional Downloads</h3>
              <ul>
                <li>
                  <Link href="https://drive.google.com/file/d/1H0aLms93EOrmw4pS9s7o5FXctP2o6hs2/view?usp=sharing">
                    <a className="link-primary" target="_blank">10 Commandments of Dog Grooming</a>
                  </Link>
                </li>
                <li>
                  <Link href="https://drive.google.com/file/d/1H0aLms93EOrmw4pS9s7o5FXctP2o6hs2/view?usp=sharing">
                    <a className="link-primary" target="_blank">Quick Guide: Dog Coat Types</a>
                  </Link>
                </li>
                <li>
                  <Link href="https://drive.google.com/file/d/1GPUNASf8_trTPNGvPMRAGkbJ7DEcqBPD/view?usp=sharing">
                    <a className="link-primary" target="_blank">Pet Grooming Checklist</a>
                  </Link>
                </li>
                <li>
                  <Link href="https://drive.google.com/file/d/1I2VxMo1sVHaCSz8qGyigAWWo9es-jdJ0/view?usp=sharing">
                    <a className="link-primary" target="_blank">Quick Guide: Dog Breed Groups</a>
                  </Link>
                </li>
                <li>
                  <Link href="https://drive.google.com/file/d/1P2zZtP7bCdibb1ZjcPxsGDnKWk6jQqhK/view?usp=sharing">
                    <a className="link-primary" target="_blank">Quick Guide: Grooming Tools</a>
                  </Link>
                </li>
                <li>
                  <Link href="https://drive.google.com/file/d/15pXEemCDfDQvuRsHibAm9Q74CQU1PMzm/view?usp=sharing">
                    <a className="link-primary" target="_blank">Dog Behavior: Cheat Sheet</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

    </DefaultLayout>
  );
};

export default DogGroomingResourcesPage;
