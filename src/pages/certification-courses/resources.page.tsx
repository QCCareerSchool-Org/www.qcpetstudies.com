import { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import { SEO } from '../../components/SEO';
import DogTrainingResourcesBackground from '../../images/backgrounds/working-at-home-office-with-dog.jpg';
import LearningInClassOnline from '../../images/cards/learning-in-class-online.jpg';
import StudentGrad from '../../images/cards/student-grad.jpg';
import VirtualClassroom from '../../images/cards/virtual-classroom.jpg';

const LearningResourcesPage: NextPage = () => (
  <>
    <SEO
      title="Dog Training Resources"
      description="Use these resources to decide if a career in dog training is right for you!"
      canonical="/certification-courses/resources"
    />

    <section id="top" className="bg-dark">
      <Image
        src={DogTrainingResourcesBackground}
        placeholder="blur"
        alt="dog with tongue out"
        priority
        fill
        sizes="100vw"
        style={{ objectFit: 'cover', objectPosition: 'center' }}
      />
      <div className="container text-center">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10">
            <h1 className="mb-0">Learning Resources</h1>
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
              <Image
                src={VirtualClassroom}
                className="card-img-top"
                alt="smiling lady at a laptop"
                sizes="100vw"
                style={{ width: '100%', height: 'auto' }}
              />
              <div className="card-body">
                <h3 className="card-title">Virtual Classroom</h3>
                <p className="card-text">The Virtual Classroom is a private Facebook group exclusively for QC Pet Studies&apos; students. You&apos;ll have the opportunity to ask course-related questions, interact with your Teaching Assistant, access supplementary content and build a sense of community with other aspiring pet-industry professionals.</p>
                <a href="https://www.facebook.com/groups/qcpetstudiesvirtualclassroom" className="link-primary" target="_blank" rel="noreferrer">Learn More</a>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-8 col-lg-4 mb-4 mb-lg-0 d-flex">
            <div className="card">
              <Image
                src={StudentGrad}
                className="card-img-top"
                alt="smiling man crouched down, petting a dog"
                sizes="100vw"
                style={{ width: '100%', height: 'auto' }}
              />
              <div className="card-body">
                <h3 className="card-title">Frequently Asked Questions</h3>
                <p className="card-text">Do you have questions about taking the online dog training course? Read this list of FAQs to learn more about your tuition options, how the online course works, and more.</p>
                <Link href="/about/faq" className="link-primary">Learn More</Link>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-8 col-lg-4 d-flex">
            <div className="card">
              <Image
                src={LearningInClassOnline}
                className="card-img-top"
                alt="dog resting his chin on a laptop"
                sizes="100vw"
                style={{ width: '100%', height: 'auto' }}
              />
              <div className="card-body">
                <h3 className="card-title">How It Works</h3>
                <p className="card-text">Learning online is much more convenient than learning in the classroom, but is it as effective? It can be! Find out more about how QC&apos;s online courses work. </p>
                <Link href="/certification-courses/how-it-works" className="link-primary">Learn More</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-12 text-start">
            <h3>Additional links</h3>
            <ul>
              <li><Link href="/about/about-qc-pet-studies#guarantee" className="link-primary">Information about QC's 21-day guarantee</Link></li>
              <li><Link href="/certification-courses/dog-training/course-preview" className="link-primary">Preview the Dog Training Course for free</Link></li>
              <li><Link href="/certification-courses/dog-grooming/course-outline" className="link-primary">Dog Grooming Course Outline</Link></li>
              <li><Link href="/certification-courses/dog-training/course-outline" className="link-primary">Dog Training Course Outline</Link></li>
              <li><Link href="/certification-courses/dog-daycare/course-outline" className="link-primary">Dog Daycare Course Outline</Link></li>
              <li><Link href="/blog/2021/07/dog-training-quiz-do-you-know-your-calming-signals" className="link-primary">Quiz: Do you know your calming signals? (blog link)</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default LearningResourcesPage;
