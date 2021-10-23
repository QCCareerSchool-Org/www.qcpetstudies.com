import { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Ratio } from 'react-bootstrap';
import { BsBook } from 'react-icons/bs';
import { Bar } from '../../components/Bar';
import { DefaultLayout } from '../../components/DefaultLayout';
import { SEO } from '../../components/SEO';
import AssignmentBackground from '../../images/backgrounds/your-career-bg.jpg';
import CameraIcon from '../../images/camera.svg';
import CheckedIcon from '../../images/checked.svg';
import RedDesktopIcon from '../../images/desktop-red.svg';
const GroomingAssignment: NextPage = () => {

  return (
    <DefaultLayout>
      <SEO
        title="Your Grooming Assignments"
        description="Your Grooming Assignments"
        canonical="/dog-grooming-courses/your-grooming-assignment"
      />

      <section id="firstSection" className="bg-dark">
        <Image src={AssignmentBackground} layout="fill" objectFit="cover" objectPosition="center" alt="Assignment background" />
        <div className="image-overlay-gradient"></div>
        <div className="container text-center">
          <BsBook className="h1 mb-3" />
          <h1 className="mb-4">Your Grooming Assignments</h1>
          <h2>Complete Your Dog Groomer Training</h2>
          <div className="row justify-content-center">
            <div className="col-10 col-sm-8 mb-4">
              <p>View sample assignments from your online dog grooming course, and find out how you&apos;ll put your theory work into practice. Discover how you&apos;ll develop skills as a groomer by building up to your practicum units.</p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container text-center">
          <h2>Learn Online&nbsp;With</h2>
          <h2>Hands-On Training</h2>
          <Bar variant="primary"></Bar>
          <div className="row justify-content-center">
            <div className="col-10 col-sm-8 mb-4">
              <p>&nbsp;Become a dog groomer with online learning combined with practical hands-on assignments. you&apos;ll perform your practical assignments at home, and submit photos and videos of your work.</p>
              <p>From there, your personal tutor will evaluate your grooming techniques and provide you with detailed feedback. you&apos;ll gain insight into where your skills lie, and what you need to improve on for the next unit of your
                <Link href="/online-courses/dog-grooming/"><a className="link-primary">&nbsp;dog grooming course</a></Link>.
              </p>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-12 col-md-4 d-flex align-items-strech">
              <div>
                <Image src={RedDesktopIcon} objectFit="cover" objectPosition="center" alt="Desktop icon" />
                <h3 className="my-3">Study Online</h3>
                <p>Study your material online, or use your physical course texts. Master the course theory and develop an understanding of proper practices, techniques, and industry knowledge.</p>
              </div>
            </div>
            <div className="col-12 col-md-4 d-flex align-items-strech">
              <div>
                <Image src={CameraIcon} objectFit="cover" objectPosition="center" alt="Camera icon" />
                <h3 className="my-3">Complete Assignments</h3>
                <p>Your theory assignments are&nbsp;completed online by simply filling out the&nbsp;assignment template. For practical assignments, you&apos;ll submit clear photos and videos of your work.</p>
              </div>
            </div>
            <div className="col-12 col-md-4 d-flex align-items-strech">
              <div><Image src={CheckedIcon} objectFit="cover" objectPosition="center" alt="Checked icon" />
                <h3 className="my-3">Receive Feedback</h3>
                <p>Your tutor reviews your work and provides detailed feedback, which you&apos;ll use to improve on your next unit. you&apos;ll receive a letter grade for each unit based on your knowledge and technical skills.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-light">
        <div className="container text-center">
          <h2>Assignment Samples</h2>
          <Bar variant="primary"></Bar>
          <div className="row justify-content-center">
            <div className="col-12 col-md-10 mb-4">
              <p>View the assignment samples below to find out more about how you&apos;ll learn dog grooming online. Your practicum assignments are completed near the end of your grooming course after you&apos;ve mastered the theory and skills taught in earlier units.</p>
              <p className="mb-4">As a student of QC Pet Studies, you&apos;ll have access to the interactive assignment templates on the Online Student Center.&nbsp;you&apos;ll download PDFs and fill out the templates on your computer by choosing from drop-down lists, typing directly on the&nbsp;assignment,
                and then uploading your completed version to submit!</p>
              <p><em><strong>Please Note:</strong> Only students of QC Pet Studies can access the interactive PDF assignment templates. These assignment samples are to demonstrate what your assignments will look like and are non-functional.</em></p>
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-10 col-sm-8 col-md-4 mb-4 mb-md-0 d-flex align-items-strech">
              <div className="card">
                <div className="card-body py-5">
                  <h3>Theory&nbsp;Assignment</h3>
                  <hr />
                  <h4><em>Topical Structure</em></h4>
                  <p className="small">In this assignment, you&apos;ll use your knowledge of topical&nbsp;structure to correctly label the given&nbsp;breed&apos;s topical features.</p>
                  <hr />
                  <Link href="/wp-content/uploads/2017/09/A3-Flat.pdf"><a target="_blank" className="btn border-2 border-secondary text-secondary">View Assignments</a></Link>
                </div>
              </div>
            </div>
            <div className="col-10 col-sm-8 col-md-4 mb-4 mb-md-0 d-flex align-items-strech">
              <div className="card">
                <div className="card-body py-5">
                  <h3>Preparatory Assignment</h3>
                  <hr />
                  <h4><em>Clipping White Nails</em></h4>
                  <p className="small">In this assignment, you&apos;ll prepare&nbsp;for your practicum units&nbsp;by practicing clipping the nails of a dog with white nails.</p>
                  <hr />
                  <Link href="/wp-content/uploads/2017/09/A3-Flat.pdf"><a target="_blank" className="btn border-2 border-secondary text-secondary">View Assignments</a></Link>
                </div>
              </div>
            </div>

            <div className="col-10 col-sm-8 col-md-4 mb-4 mb-md-0 d-flex align-items-strech">
              <div className="card">
                <div className="card-body py-5">
                  <h3>Practicum Assignment</h3>
                  <hr />
                  <h4><em>Preparation for a Teddy Bear Cut</em></h4>
                  <p className="small">In this practicum assignment, you&apos;ll prepare a dog to&nbsp;receive a classic Teddy Bear cut. Show the dog fully prepared by following the instructions provided.</p>
                  <hr />
                  <Link href="/wp-content/uploads/2017/09/A3-Flat.pdf"><a target="_blank" className="btn border-2 border-secondary text-secondary">View Assignments</a></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container text-center">
          <h2 className="mb-4">Your Grooming Instructions</h2>
          <div className="row justify-content-center">
            <div className="col-12 col-md-10 mb-4">
              <p>In your online dog grooming class, you&apos;ll have access to interactive PDF assignment templates.&nbsp;For&nbsp;practical assignments, your templates contain videos clips to demonstrate proper framing to capture your work.</p>
              <p className="mb-4">Since QC&apos;s interactive assignments are only available to current students and graduates, you can view the video clip below to see how you&apos;ll film your work.</p>
              <h3>&nbsp;Preparation for a Groom</h3>
              <p><strong><em>The video below is a sample from QC&apos;s dog grooming course assignments. Students can watch these clips on their assignment templates in the Online Student Center.</em></strong></p>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-12 col-md-10 mb-4">
              <Ratio aspectRatio="16x9">
                <video className="mb-4" controls>
                  <source src="https://www.doggroomingcourse.com/wp-content/uploads/2017/09/Practicum_optimized_smaller_1.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </Ratio>
            </div>
          </div>
        </div>
      </section>

    </DefaultLayout>
  );
};

export default GroomingAssignment;
