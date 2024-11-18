import Image from 'next/image';
import Link from 'next/link';
import { PageComponent } from '@/app/serverComponent';

import { SectionBackground } from '@/components/SectionBackground';
import { SEO } from '@/components/SEO';
import DogTrainingResourcesBackground from '@/images/backgrounds/working-at-home-office-with-dog.jpg';
import LearningInClassOnline from '@/images/cards/learning-in-class-online.jpg';
import StudentGrad from '@/images/cards/student-grad.jpg';
import VirtualClassroom from '@/images/cards/virtual-classroom.jpg';

const LearningResourcesPage: PageComponent = () => (
  <>
    <SEO
      title="Learning Resources"
      description="Use these resources to decide if a career in the pet industry is right for you!"
      canonical="/resources"
    />

    <section id="top" className="bg-dark">
      <SectionBackground src={DogTrainingResourcesBackground} priority />
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
            <p>Learn more about QC Pet Studies and how your dog grooming, training or daycare course will help you achieve your goals!</p>
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
                <h3 className="card-title">Virtual Community</h3>
                <p className="card-text">The Virtual Community is a private Facebook group exclusively for QC Pet Studies students. You'll have the opportunity to ask course-related questions, interact with your Teaching Assistant, access supplementary content and be part of an uplifting community alongside other aspiring pet industry professionals.</p>
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
                <p className="card-text">Do you have questions about taking an online course with QC Pet Studies? Read this list of FAQs to learn more about our Dog Grooming, Dog Training and Dog Daycare course options.</p>
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
                <p className="card-text">At QC Pet Studies, we combine the perks of in-person learning with the convenience of studying online. Get hands-on experience, learn from expert feedback and build a professional community all from the comfort of home. Find out more about how QC's online courses work. </p>
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
