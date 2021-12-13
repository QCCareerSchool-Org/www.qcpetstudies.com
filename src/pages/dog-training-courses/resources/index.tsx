import { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import { DefaultLayout } from '../../../components/DefaultLayout';
import { SEO } from '../../../components/SEO';
import DogTrainingResourcesBackground from '../../../images/backgrounds/working-at-home-office-with-dog.jpg';
import DogTrainingCareer from '../../../images/cards/dog-training-career.jpg';
import LearningInClassOnline from '../../../images/cards/learning-in-class-online.jpg';
import StudentGrad from '../../../images/cards/student-grad.jpg';

const DogTrainingResourcesPage: NextPage = () => (
  <DefaultLayout>
    <SEO
      title="Dog Training Resources"
      description="Use these resources to decide if a career in dog training is right for you!"
      canonical="/dog-training-courses/resources"
    />

    <section id="top" className="bg-dark">
      <Image src={DogTrainingResourcesBackground} layout="fill" objectFit="cover" objectPosition="center" placeholder="blur" alt="dog with tongue out" />
      <div className="container text-center">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10">
            <h1 className="fw-normal mb-0">Dog Training<br /><strong>Resources</strong></h1>
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
        <div className="row justify-content-center mb-5">
          <div className="col-12 col-sm-8 col-lg-4 mb-4 mb-lg-0 d-flex">
            <div className="card">
              <Image className="card-img-top" src={DogTrainingCareer} alt="your dog grooming career" />
              <div className="card-body">
                <h3 className="card-title">Dog Training Course Outline</h3>
                <p className="card-text">Read a detailed outline of the online dog training course. Find out what you'll need to be successful, and how long the course will take you to complete.</p>
                <Link href="/dog-training-courses/dog-training/course-outline"><a className="link-primary">Learn More</a></Link>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-8 col-lg-4 mb-4 mb-lg-0 d-flex">
            <div className="card">
              <Image src={StudentGrad} alt="Dog Training Course Outline" className="card-img-top" />
              <div className="card-body">
                <h3 className="card-title">Frequently Asked Questions</h3>
                <p className="card-text">Do you have questions about taking the online dog training course? Read this list of FAQs to lear more about your tuition options, how the online course works, and more.</p>
                <Link href="/about/faq/"><a className="link-primary">Learn More</a></Link>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-8 col-lg-4 d-flex">
            <div className="card">
              <Image src={LearningInClassOnline} alt="Learning in Class vs. Online" className="card-img-top" />
              <div className="card-body">
                <h3 className="card-title">How the Dog Training Course Works</h3>
                <p className="card-text">Learning online is much more convenient than learning in the classroom, but is it as effective? It can be! Find out more about how the online Dog Training course works. </p>
                <Link href="/dog-training-courses/how-it-works/"><a className="link-primary">Learn More</a></Link>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-12 col-lg-6 text-start">
            <h3>Additional links</h3>
            <ul>
              <li><Link href="/about/about-qc-pet-studies#guarantee"><a className="link-primary">Information about QC's 21-day guarantee</a></Link></li>
              <li><Link href="/dog-training-courses/dog-training/course-preview/"><a className="link-primary">Preview the Dog Training Course for free</a></Link></li>
              <li><Link href="/2021/07/dog-training-quiz-do-you-know-your-calming-signals/"><a className="link-primary">Quiz: Do you know your calming signals? (blog link)</a></Link></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </DefaultLayout>
);

export default DogTrainingResourcesPage;
