import { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { BsBook } from 'react-icons/bs';

import { Bar } from '../../../components/Bar';
import { DefaultLayout } from '../../../components/DefaultLayout';
import { SEO } from '../../../components/SEO';
import { useScreenWidth } from '../../../hooks/useScreenWidth';

import AssignmentBackground from '../../../images/backgrounds/your-career-bg.jpg';
import CameraIcon from '../../../images/camera.svg';
import CheckedIcon from '../../../images/checked.svg';
import RedDesktopIcon from '../../../images/desktop-red.svg';

const GroomingAssignment: NextPage = () => {
  const screenWidth = useScreenWidth();
  const mdOrLarger = screenWidth >= 768;
  const lgOrLarger = screenWidth >= 992;
  const xlOrLarger = screenWidth >= 1200;
  const md = mdOrLarger && !lgOrLarger;
  const lg = lgOrLarger && !xlOrLarger;

  return (
    <DefaultLayout>
      <SEO
        title="Your Grooming Assignments"
        description="Your Grooming Assignments"
        canonical="/dog-grooming-courses/your-grooming-assignment"
      />

      <section id="firstSection" className="bg-dark">
        <Image src={AssignmentBackground} layout="fill" objectFit="cover" objectPosition="center" alt="Assignment background" />
        <div className="image-overlay-gradient" />
        <div className="container text-center">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-10">
              <BsBook className="h1 mb-3" />
              <h1 className="mb-4">Your Grooming Assignments</h1>
              <p className="h2 mb-4">Complete Your Dog Groomer Training</p>
              <p className="lead mb-0">View sample assignments from your online dog grooming course, and find out how you&apos;ll put your theory work into practice. Discover how you&apos;ll develop skills as a groomer by building up to your practicum units.</p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container text-center">
          <div className="row justify-content-center">
            <div className="col-12 col-md-10 col-lg-7 mb-4">
              <h2>Learn Online with<br />Hands-On Training</h2>
              <Bar variant="primary" />
              <p>Become a dog groomer with online learning combined with practical hands-on assignments. you&apos;ll perform your practical assignments at home, and submit photos and videos of your work.</p>
              <p>From there, your personal tutor will evaluate your grooming techniques and provide you with detailed feedback. you&apos;ll gain insight into where your skills lie, and what you need to improve on for the next unit of your <Link href="/dog-grooming-courses/dog-grooming"><a className="link-primary">dog grooming course</a></Link>.</p>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-12 col-md-4 mb-4 mb-md-0">
              <div className="mb-2">
                <Image src={RedDesktopIcon} objectFit="cover" objectPosition="center" alt="Desktop icon" />
              </div>
              <h3>Study{md ? <br /> : ' '}Online</h3>
              <p className="mb-0">Study your material online, or use your physical course texts. Master the course theory and develop an understanding of proper practices, techniques, and industry knowledge.</p>
            </div>
            <div className="col-12 col-md-4 mb-4 mb-md-0">
              <div className="mb-2">
                <Image src={CameraIcon} objectFit="cover" objectPosition="center" alt="Camera icon" />
              </div>
              <h3>Complete{md ? <br /> : ' '}Assignments</h3>
              <p className="mb-0">Your theory assignments are completed online by simply filling out the assignment template. For practical assignments, you&apos;ll submit clear photos and videos of your work.</p>
            </div>
            <div className="col-12 col-md-4">
              <div className="mb-2">
                <Image src={CheckedIcon} objectFit="cover" objectPosition="center" alt="Checked icon" />
              </div>
              <h3>Receive{md ? <br /> : ' '}Feedback</h3>
              <p className="mb-0">Your tutor reviews your work and provides detailed feedback, which you&apos;ll use to improve on your next unit. you&apos;ll receive a letter grade for each unit based on your knowledge and technical skills.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-light">
        <div className="container text-center">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-10 mb-4">
              <h2>Assignment Samples</h2>
              <Bar variant="primary" />
              <p>View the assignment samples below to find out more about how you&apos;ll learn dog grooming online. Your practicum assignments are completed near the end of your grooming course after you&apos;ve mastered the theory and skills taught in earlier units.</p>
              <p className="mb-4">As a student of QC Pet Studies, you&apos;ll have access to the interactive assignment templates on the Online Student Center. you&apos;ll download PDFs and fill out the templates on your computer by choosing from drop-down lists, typing directly on the assignment, and then uploading your completed version to submit!</p>
              <p><em><strong>Please Note:</strong> Only students of QC Pet Studies can access the interactive PDF assignment templates. These assignment samples are to demonstrate what your assignments will look like and are non-functional.</em></p>
            </div>
            <div className="col-10 col-sm-9 col-md-7 col-lg-4 mb-4 mb-lg-0 d-flex">{/* d-flex so all columns will be the same size */}
              <div className="card">
                <div className="card-body d-flex flex-column">{/* d-flex so the buttons at the bottom of each card can be aligned */}
                  <h3>Theory{lg ? <br /> : ' '}Assignment</h3>
                  <Bar variant="secondary" />
                  <h4><em>Topical Structure</em></h4>
                  <p className="small">In this assignment, you&apos;ll use your knowledge of topical structure to correctly label the given breed&apos;s topical features.</p>
                  <div className="flex-fill d-flex align-items-end justify-content-center">{/* flex-fill to use all remaining space */}
                    <a href="/wp-content/uploads/2017/09/A3-Flat.pdf" target="_blank" className="btn btn-outline-secondary">View Assignments</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-10 col-sm-9 col-md-7 col-lg-4 mb-4 mb-lg-0 d-flex">{/* d-flex so all columns will be the same size */}
              <div className="card">
                <div className="card-body d-flex flex-column">{/* d-flex so the buttons at the bottom of each card can be aligned */}
                  <h3>Preparatory{lg ? <br /> : ' '}Assignment</h3>
                  <Bar variant="secondary" />
                  <h4><em>Clipping White Nails</em></h4>
                  <p className="small">In this assignment, you&apos;ll prepare for your practicum units by practicing clipping the nails of a dog with white nails.</p>
                  <div className="flex-fill d-flex align-items-end justify-content-center">{/* flex-fill to use all remaining space */}
                    <a href="/wp-content/uploads/2017/09/A3-Flat.pdf" target="_blank" className="btn btn-outline-secondary">View Assignments</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-10 col-sm-9 col-md-7 col-lg-4 d-flex">{/* d-flex so all columns will be the same size */}
              <div className="card">
                <div className="card-body d-flex flex-column">{/* d-flex so the buttons at the bottom of each card can be aligned */}
                  <h3>Practicum{lg ? <br /> : ' '}Assignment</h3>
                  <Bar variant="secondary" />
                  <h4><em>Preparation for a Teddy Bear Cut</em></h4>
                  <p className="small">In this practicum assignment, you&apos;ll prepare a dog to receive a classic teddy bear cut. Show the dog fully prepared by following the instructions provided.</p>
                  <div className="flex-fill d-flex align-items-end justify-content-center">{/* flex-fill to use all remaining space */}
                    <a href="/wp-content/uploads/2017/09/A3-Flat.pdf" target="_blank" className="btn btn-outline-secondary">View Assignments</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container text-center">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-10 mb-4">
              <h2 className="mb-4">Your Grooming Instructions</h2>
              <p>In your online dog grooming class, you&apos;ll have access to interactive PDF assignment templates. For practical assignments, your templates contain videos clips to demonstrate proper framing to capture your work.</p>
              <p className="mb-4">Since QC&apos;s interactive assignments are only available to current students and graduates, you can view the video clip below to see how you&apos;ll film your work.</p>
              <div className="card">
                <div className="card-body">
                  <h3 className="mb-4">Preparation for a Groom</h3>
                  <p className="mb-4"><em>The video below is a sample from QC&apos;s dog grooming course assignments. Students can watch these clips on their assignment templates in the Online Student Center.</em></p>
                  <div className="ratio ratio-16x9">
                    <video className="mb-4" controls>
                      <source src="https://www.doggroomingcourse.com/wp-content/uploads/2017/09/Practicum_optimized_smaller_1.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </DefaultLayout>
  );
};

export default GroomingAssignment;
