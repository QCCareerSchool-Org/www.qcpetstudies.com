import { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { DefaultLayout } from '../../../components/DefaultLayout';
import { SEO } from '../../../components/SEO';
import DogTrainingResourcesBackground from '../../../images/backgrounds/dt-resources.jpg';
import DogTrainingCareer from '../../../images/cards/dog-training-career.jpg';
import LearningInClassOnline from '../../../images/cards/learning-in-class-online.jpg';
import StudentGrad from '../../../images/cards/student-grad.jpg';

const DogTrainingResourcesPage: NextPage = () => {
  return (
    <DefaultLayout>
      <SEO
        title="Dog Training Resources"
        description="Learn about how to become a professional dog trainer with QC’s online courses."
        canonical="/dog-training-courses/resources"
      />
      <section id="firstSection" className="bg-dark">
        <Image src={DogTrainingResourcesBackground} layout="fill" objectFit="cover" objectPosition="center" alt="Dog Training Resources" />
        <div className="container text-center">
          <div className="row">
            <div className="col-12 col-lg-10 offset-lg-1">
              <h1>Dog Training Resources</h1>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container text-center">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-6">
              <h2>Useful <strong>Links</strong></h2>
              <p>Learn more about QC Pet Studies and how your dog training course will help you achieve your goals!</p>
            </div>
          </div>
          <div className="row mb-5 justify-content-center">
            <div className="col-12 col-sm-8 offset-sm-2 col-lg-4 offset-lg-0 mb-4 mb-lg-0 d-flex align-items-stretch">
              <div className="card">
                <Image className="card-img-top" src={DogTrainingCareer} alt="Your Dog Grooming Career" />
                <div className="card-body">
                  <h3 className="card-title">Your Dog Training Career</h3>
                  <p className="card-text">Find out how you can launch a successful full-time or part-time career as a professional dog trainer. Read about salary expectations, time commitment, and more.</p>
                  <Link href="/dog-grooming-courses/how-it-works"><a className="link-primary">Learn More</a></Link>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-8 offset-sm-2 col-lg-4 offset-lg-0 mb-4 mb-lg-0 d-flex align-items-stretch">
              <div className="card">
                <Image src={StudentGrad} alt="Dog Training Course Outline" className="card-img-top" />
                <div className="card-body">
                  <h3 className="card-title">Dog Training Course Outline</h3>
                  <p className="card-text">Read a detailed outline of the online dog training course. Find out what you&apos;ll need to be successful, and how long the course will take you to complete.</p>
                  <Link href="/category/student-features"><a className="link-primary">Learn More</a></Link>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-8 offset-sm-2 col-lg-4 offset-lg-0 d-flex align-items-stretch">
              <div className="card">
                <Image src={LearningInClassOnline} alt="Learning in-class vs Online<" className="card-img-top" />
                <div className="card-body">
                  <h3 className="card-title">Learning In Class vs Online</h3>
                  <p className="card-text">Is learning dog training online as effective as learning it in a classroom? It might even be better! Read about the pros and cons of online learning to decide if it&apos;s right for you.</p>
                  <Link href="/dog-grooming-courses/resources/learning-in-class-vs-online"><a className="link-primary">Learn More</a></Link>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <h3>Additional links</h3>
            <div className="col-6">
              <ul className="text-start">
                <li><Link href="/dog-grooming-courses/how-it-works"><a className="link-primary">Frequently Asked Questions about the Dog Training Course</a></Link></li>
                <li><Link href="/dog-grooming-courses/how-it-works"><a className="link-primary">Information about QC&apos;s 21-day guarantee</a></Link></li>
                <li><Link href="/dog-grooming-courses/how-it-works"><a className="link-primary">Preview the Dog Training Course for free</a></Link></li>
                <li><Link href="/dog-grooming-courses/how-it-works"><a className="link-primary">QUIZ: Do you know your calming signals? (blog link)</a></Link></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
};

export default DogTrainingResourcesPage;
