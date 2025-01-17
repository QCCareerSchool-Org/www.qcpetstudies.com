import type { Metadata } from 'next';
import Image from 'next/image';

import Dachshund from './dachshund-sitting-grey-background.png';
import HandReachingTowardDog from './hand-reaching-toward-dog.jpg';
import ManAndDogWalking from './man-and-white-dog-walking-in-a-field.jpg';
import PuppyOnBack from './puppy-lying-on-back.jpg';
import type { PageComponent } from '@/app/serverComponent';
import { BackgroundImage } from '@/components/backgroundImage';
import { Bar } from '@/components/bar';
import GraduationCertificateImage from '@/components/certifications/IDTP-certification-gold.svg';

export const metadata: Metadata = {
  title: 'How QC\'s Online Courses Work',
  alternates: { canonical: '/certification-courses/how-it-works' },
  description: 'Learn how QC\'s online professional courses work!',
};

const HowItWorksPage: PageComponent = () => (
  <>
    <section className="bg-dark">
      <BackgroundImage src={HandReachingTowardDog} priority />
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-10 col-lg-8">
            <h1 className="fw-normal mb-0">How QC's<br /><strong>Online Courses Work</strong></h1>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-12 col-sm-10 col-md-8 col-lg-4 col-xl-3 mb-4 mb-lg-0">
            <Image src={PuppyOnBack} alt="puppy lying on its back" sizes="100vw" style={{ width: '100%', height: 'auto' }} />
          </div>
          <div className="col-12 col-lg-8 col-xl-9">
            <h2>Learning Online</h2>
            <p className="lead">Learning online can be just as effective as learning in a classroom.</p>
            <p>QC has been delivering online courses for over 30 years. You'll benefit from this experience!</p>
            <p>The key to successful online training is to provide you with tons of hands-on experience throughout your course. Combine that with detailed individualized feedback from your tutor and you're guaranteed to receive a well-rounded educational experience.</p>
            <p className="mb-0">Wondering exactly how your education will unfold? Here's a detailed overview of how your course, assignments, grades, and graduation will work.</p>
          </div>
        </div>
      </div>
    </section>

    <section className="bg-light">
      <div className="container text-center">
        <div className="row justify-content-center align-items-center">
          <div className="col-12 col-lg-9 col-xl-9 mb-4 mb-lg-0 text-lg-start">
            <h2>Starting the Course</h2>
            <p>After you enroll online, you'll receive login instructions for your Online Student Center within one business day. Follow the instructions to start your journey!</p>
            <p className="mb-0">Your Online Student Center will contain all your course materials, including interactive lessons and assignments. This is also where you'll review your tutor's audio feedback.</p>
          </div>
          <div className="col-12 col-sm-10 col-md-8 col-lg-3 col-xl-3">
            <div className="d-flex justify-content-center">
              <Image src={Dachshund} alt="Dachshund, sausage dog, sitting" sizes="100vw" style={{ height: 'auto', maxWidth: '120px' }} />
            </div>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div className="container text-center">
        <h2>Your Assignments</h2>
        <div className="row justify-content-center">
          <div className="col-12 col-lg-8 mb-4">
            <p className="mb-0">Throughout the course, you'll complete a variety of theoretical and practical assignments that are designed to test your understanding and develop your skills.</p>
          </div>
          <div className="col-12 col-lg-6 d-flex mb-4 mb-lg-0">
            <div className="card w-100">
              <div className="card-body d-flex flex-column">{/* flex, so that we can align the last element to the bottom */}
                <Bar variant="secondary" />
                <h3>Theory-Based Assignments</h3>
                <p className="card-text">Working with pets requires a high level of theoretical knowledge of a wide range of topics. You have to become an expert in learning theory, stages of development, dog breed characteristics, training methods, and much more.</p>
                <p className="card-text">Through a series of quizzes, short answer assignments and case studies, your knowledge of theory will be put to the test. As you work through your online course, the first few units will focus heavily on theory-based assignments. Your knowledge and skills will improve during this time, and you'll gradually notice a shift toward more and more practical assignments in the later units of the course.</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6 d-flex">
            <div className="card w-100">
              <div className="card-body d-flex flex-column">{/* flex, so that we can align the last element to the bottom */}
                <Bar variant="secondary" />
                <h3>Practical Assignments</h3>
                <p className="card-text">Once you're familiar with fundamentals, you need to practice your skills on actual dogs. Luckily, you can use your own dog(s) to practice methods and skills.</p>
                <p className="card-text">At the start of your course, your practical assignments will focus on interpreting behaviors exhibited by dogs in your household and environment. As you progress through your training, your practical assignments will evolve. You'll take videos of you working with dogs so that your tutor can evaluate your work!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="bg-light py-0">
      <div className="container-fluid text-center text-lg-start">
        <div className="row justify-content-center justify-content-lg-end">
          <div className="col-12 col-lg-8 col-fluid col-fluid-lg-8">
            <div className="section pe-lg-5">
              <h2>Receiving Feedback From <strong>Your Tutor</strong></h2>
              <p className="lead">You'll receive advice and detailed feedback from your tutor after every unit you complete.</p>
              <p className="mb-0">Your tutor truly cares about your success and will encourage you to submit your very best work. After each unit, you'll receive an audio file where your tutor explains what you did well, and where you should focus to improve your skills even further. See how your skills and confidence improve as you work your way through the course!</p>
              {/* <p className="mb-0"><Link href="/certification-courses/dog-training#tutors" className="btn btn-outline-secondary">Meet Your Tutor</Link></p> */}
            </div>
          </div>
          <div className="col-lg-4 d-none d-lg-block" style={{ position: 'relative' }}>
            <Image src={ManAndDogWalking} placeholder="blur" alt="a man and a dog walking in a field" fill sizes="100vw" style={{ objectFit: 'cover', objectPosition: 'right', maxWidth: '100%' }} />
          </div>
        </div>
      </div>
    </section>

    <section>
      <div className="container text-center">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-8">
            <div className="mb-2">
              <GraduationCertificateImage alt="IDTP™ Certification logo" height="180" width="180" style={{ maxWidth: '100%', height: 'auto' }} />
            </div>
            <h2>Your <strong>Graduation</strong></h2>
            <p>Once you've completed your course and your tuition has been paid in full, you'll be all set to graduate. Your professional certificate will be sent straight to your home!</p>
            <p className="lead mb-0">Please keep in touch. We'd love to hear how you're doing!</p>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default HowItWorksPage;
