import { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Bar } from '../../components/Bar';
import { DefaultLayout } from '../../components/DefaultLayout';
import { SEO } from '../../components/SEO';
import DogTrainingHowItWorksBackground from '../../images/backgrounds/how-it-works-dt.jpg';
import DogBlobImage from '../../images/dog-blob.jpg';
import GraduationCertificateImage from '../../images/IDTP-certification-gold.svg';
import CourseStartImage from '../../images/starting-the-course-dt.jpg';
import MeetYourTutorImage from '../../images/where-to-train.jpg';

const DogTrainingHowItWorksPage: NextPage = () => {

  return (
    <DefaultLayout>
      <SEO
        title="How It Works on Dog Training "
        description="Meta Description: Become a certified dog trainer online. Find out how QC’s online professional dog trainer course works!"
        canonical="/dog-training-courses/how-it-works"
      />

      <section id="firstSection" className="bg-dark">
        <Image src={DogTrainingHowItWorksBackground} layout="fill" objectFit="cover" objectPosition="center" alt="How It Works Background On Gog Training" />
        <div className="container">
          <h2 className="text-uppercase">How QC&apos;s Online<br /><strong>Dog training<br />Course works</strong></h2>
        </div>
      </section>

      <section>
        <div className="container text-center">
          <div className="row">
            <div className="col-12 col-lg-6">
              <Image src={DogBlobImage} alt="How It Works Background On Gog Training" height="350" width="350" />
            </div>
            <div className="col-12 col-lg-6 text-lg-start">
              <h3 className="mb-4">Learning to become a dog trainer online can be just as effective as learning in a classroom.</h3>
              <p>QC has been delivering online courses for over 30 years. You&apos;ll benefit from this experience in the Online Dog Training Course!</p>
              <p>The key to successful online training is to provide you with tons of hands-on experience throughout your course. Combine that with detailed individualized feedback from your tutor and you re guaranteed to receive a well-rounded educational experience!</p>
              <p>Wondering exactly how your dog trainer education will unfold? Here&apos;s a detailed overview of how your course, assignments, grades, and graduation will work.</p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container text-center">
          <div className="row text-lg-start">
            <div className="col-12 col-lg-6">
              <h2 className="mb-3">Starting the<br /><strong>Dog Training Course</strong></h2>
              <p>After you enroll online, you&apos;ll receive login instructions for your online student center within one business day. Follow the instructions to start your dog training journey!</p>
              <p>Your online student center will contain all your course materials: Your course guides, lesson texts, assignment templates and video tutorials are all in the student center. This is also where you re going to upload your assignments and review your tutor&apos;s feedback.</p>
              <p>View a <Link href=""><a className="text-primary">detailed course outline</a></Link> to learn more about your dog trainer course.</p>
            </div>
            <div className="col-12 col-lg-6">
              <div className="d-flex justify-content-center">
                <Image src={CourseStartImage} alt="Start your dog training course" width="360" height="360" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container text-center">
          <h2>Your Dog <strong>Training Assignments</strong></h2>
          <div className="row justify-content-center mb-4">
            <div className="col-12 col-lg-8">
              <p>Throughout the course, you&apos;ll complete a variety of theoretical and practical assignments that are designed to test your understanding and develop your training skills.</p>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-lg-6 d-flex mb-4 mb-lg-0">
              <div className="card w-100">
                <div className="card-body">
                  <Bar variant="secondary" />
                  <p className="lead"><strong>Theory-Based Assignments</strong></p>
                  <p>Being a dog trainer requires a high level of theoretical knowledge of a wide range of topics. You have to become an expert in learning theory, stages of development, dog breed characteristics, training methods, and much more.</p>
                  <p>Through a series of quizzes, short answer assignments and case studies, your knowledge of dog training theory will be put to the test. As you work through your online course, the first few units will focus heavily on theory-based assignments. Your knowledge and skills will improve during this time, and you ll gradually notice a shift toward more and more practical assignments in the later units of the course.</p>
                  <Link href=""><a className="link-primary text-uppercase">View Sample Assignment</a></Link>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-6 d-flex">
              <div className="card w-100">
                <div className="card-body">
                  <Bar variant="secondary" />
                  <p className="lead"><strong>Practical Assignments</strong></p>
                  <p>Once you re familiar with dog training fundamentals, you need to practice your skills on actual live dogs. Luckily in dog training, you can use your own dog(s) to practice methods and skills.</p>
                  <p>At the start of your course, your practical assignments will focus on interpreting behaviors exhibited by dogs in your household and environment. As you progress through your training, your practical assignments will evolve to teaching dogs new behaviors using different methods and techniques, and modifying common unwanted behaviors. You ll take videos of you working with dogs so that your tutor can evaluate your work!</p>
                  <Link href=""><a className="link-primary text-uppercase">View Sample Assignment</a></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-light py-0">
        <div className="container-fluid">
          <div className="row justify-content-center justify-content-lg-end">
            <div className="col-12 col-lg-8 col-xl-8 col-fluid col-fluid-lg-8 col-fluid-xl-8">
              <div className="section pe-lg-5">
                <h2>Receiving Feedback<br />From <strong>Your Tutor</strong></h2>
                <p className="lead"><strong>You ll receive advice and detailed feedback from your tutor after every unit you complete.</strong></p>
                <p>Your tutor truly cares about your success and will encourage you to submit your very best work. After each unit of the dog training course, you&apos;ll receive an audio file where your tutor explains what you did well, and where you should focus to improve your skills even further. See how your skills and confidence improve as you work your way through the course!</p>
                <a href=""><button className="btn btn-outline-secondary">Meet Your Tutor</button></a>
              </div>
            </div>
            <div className="col-lg-4 col-xl-4" style={{ position: 'relative' }}>
              <Image src={MeetYourTutorImage} layout="fill" objectFit="cover" objectPosition="center" alt="Dog playing" />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container text-center">
          <div className="mb-3">
            <Image src={GraduationCertificateImage} alt="Graduation Certificate" height="100px" width="100px" />
          </div>
          <h2>Your <strong>Graduation</strong></h2>
          <div className="row justify-content-center">
            <div className="col-12 col-lg-6">
              <p>Once you&apos;ve completed your dog training course and your tuition has been paid in full, you&apos;ll be all set to graduate. Your professional dog trainer certificate will be sent straight to your home!</p>
            </div>
          </div>
          <p className="lead"><strong>Please keep in touch, we&apos;d love to hear how you re doing!</strong></p>
        </div>
      </section>
    </DefaultLayout>
  );
};

export default DogTrainingHowItWorksPage;
