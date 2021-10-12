import { NextPage } from 'next';
import Image from 'next/image';
import React from 'react';
import stopwatch from '../../images/time.svg';
import assignment from '../../images/assignment.svg';
import find from '../../images/find.svg';
import direction from '../../images/direction.svg';
import feedback from '../../images/feedback.svg';
import checked from '../../images/checked.svg';
import { DefaultLayout } from '../../components/DefaultLayout';
import { SEO } from '../../components/SEO';

const DogGroomingHowItWorksPage: NextPage = () => {
    return (
        <DefaultLayout >
            <SEO
                title="How Does Online Dog Groomer Training Work? - QC Pet Studies"
                description=""
                canonical="/dog-grooming-courses/how-it-works"
            />
            <section id="firstSection">

                <div className="mt-5" >
                    <div className="container pt-5 text-center">
                        <div className="row">
                            <div className="col-12 col-lg-10 offset-lg-1">
                                <h1>How QC’s Online Dog<br />
                                    Groomer Training Works</h1>
                            </div>
                        </div>
                    </div>
                </div>

                <section>
                    <div className="container text-center">
                        <div className="row">
                            <div className="col-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2">
                                <p>Online dog groomer training can be just as effective as in-className training. QC has over 30 years of experience in online education, and has now applied that expertise to the <a href="/online-courses/dog-grooming/">online dog grooming course</a>! The key is to provide students with plenty of hands-on training and feedback every step of the way. Remember, just because you’re learning dog grooming online doesn’t mean you’re learning alone!</p>
                                <p>Wondering exactly how your online dog groomer education will unfold? Here’s a detailed overview of how your course, assignments, grades, and graduation will work.</p>
                                <Image src={stopwatch} width={50} height={50} alt="timer" />
                                <h2>Starting the Dog Grooming Course</h2>
                                <p>The first thing you’ll do after enrolling is log in to your personal account in the Online Student Center. From there you’ll be able to access your dog grooming course guides, lesson texts, assignment templates and video tutorials. Within 7-10 business days of enrolling, you’ll also receive hard copy versions of your course materials along with your grooming tools.</p>
                                <h4>View a <a href="https://www.doggroomingcourse.com/online-courses/dog-grooming/course-outline/">detailed&nbsp;course outline</a> to learn more about your dog groomer training.</h4>
                            </div>
                        </div>
                    </div>
                </section>


                <section className="row-bg-overlay">
                    <div className="container text-center">
                        <Image src={assignment} width={50} height={50} alt="assignment" />
                        <h2 className="mb-5">Your Dog Grooming Assignments</h2>
                        <div className="text-center mb-5 d-flex justify-content-center">
                            <p className="max-w-800">Throughout your course, you’ll complete a variety of theoretical and practical assignments that are&nbsp;designed to test your knowledge and develop your dog grooming techniques.</p>
                        </div>
                        <div className="row">
                            <div className="col-12 col-lg-6 mb-5 mb-lg-0 d-flex flex-column align-items-center">
                                <div>
                                    <h2>Theory-Based Assignments</h2>
                                </div>
                                <div className="divider-wrap" >
                                    <div
                                        className="divider-small-border completed">
                                    </div>
                                </div>
                                <div className="text-center max-w-400">
                                    <p>In order to be a qualified professional groomer, you need to master dog grooming theory. Throughout your online grooming course you’ll learn&nbsp;everything from grooming&nbsp;tools, to dog behavior and temperaments, to the unique challenges of working with puppies, seniors, and other dogs who have special needs, and <a href="https://www.doggroomingcourse.com/online-courses/dog-grooming/">much more</a>.</p>
                                    <p>Your knowledge in these areas will be tested with quizzes, case studies and other theoretical assignments, which will all be graded by your personal tutor. As you progress through the course, you’ll become more and more comfortable with dog grooming theory, and you’ll shift your focus&nbsp;to your practical grooming assignments.</p>
                                </div>
                            </div>
                            <div className="col-12 col-lg-6 d-flex flex-column align-items-center">
                                <div className="mb-4">
                                    <h2>Practical Assignments</h2>
                                </div>
                                <div className="divider-wrap" >
                                    <div
                                        className="divider-small-border completed">
                                    </div>
                                </div>
                                <div className="text-center max-w-400">
                                    <p>Getting a chance to practice your skills on real dogs is an essential part of any good dog grooming program, and QC’s online course is no exception. At the start of your course, practical assignments will focus on getting comfortable with dogs and the grooming environment, and you’ll progress to completing partial grooms focusing on specific elements. During&nbsp;your <a href="https://www.doggroomingcourse.com/online-courses/dog-grooming/#outline">practicum units</a>,&nbsp;you’ll be&nbsp;completing several start-to-finish breed standard grooms.</p>
                                    <p>You’ll take step-by-step&nbsp;pictures or videos of your work as you go, and upload them to your online student center. Your tutor will evaluate your work and provide you with detailed feedback on what you did well and where you could improve.</p>
                                </div>
                            </div>
                        </div>

                        <div className="divider-wrap"><div className="divider"></div></div>

                        <h3 className="mb-5">View sample assignments from QC’s dog grooming course!</h3>
                        <a className="nectar-button large regular accent-color  regular-button" href="/your-grooming-assignments/" data-hover-text-color-override="#fff"><span>VIEW ASSIGNMENTS</span></a>
                    </div>
                </section>

                <div className="mt-5 find-dog-bg d-flex flex-column align-items-center" >
                    <div className="inner-wrap d-flex flex-column">
                        <Image src={find} width={50} height={50} alt="assignment" />
                        <div className="divider-wrap" data-alignment="default"><div className="divider"></div></div>
                        <div className="wpb_wrapper">
                            <h2>Finding Dogs for Grooming Assignments</h2>
                        </div>
                        <div className="divider-wrap" data-alignment="default"><div className="divider"></div></div>
                        <div className="wpb_wrapper d-flex flex-column align-items-center">
                            <p className="max-w-500 text-center">Throughout your dog groomer training you’ll have the chance to work with many different dogs. You can work with your own dog, your friends’ or family members’ dogs, or you can reach out to your local animal shelter or a nearby rescue. After all, it’s never too hard to find people who will be happy to have their dogs groomed for free! If you get stuck, just contact the student support team:<br />
                                <b>they’re ready to provide you with additional suggestions.</b></p>
                        </div>
                        <div className="divider-wrap" ><div className="divider-m"></div></div>
                        <div className="wpb_wrapper">
                            <h3 className="text-center">Wondering how online dog grooming schools<br />
                                differ from in-className programs? <a href="https://www.doggroomingcourse.com/learning-online/className-vs-online-dog-grooming-schools/">Find out here</a>!</h3>
                        </div>
                        <div className="divider-wrap" data-alignment="default"><div className="divider-l"></div></div>
                    </div>
                </div>

                <div className="row-bg-overlay d-flex flex-column align-items-center" >
                    <div className="divider-wrap" data-alignment="default"><div className="divider-m"></div></div>
                    <div className="inner-wrap d-flex flex-column align-items-center px-5 text-center">
                        <Image src={direction} width={50} height={50} alt="assignment" />
                        <div className="divider-wrap" data-alignment="default"><div className="divider"></div></div>
                        <div className="wpb_wrapper">
                            <h2>Where to Groom Dogs for Assignments</h2>
                        </div>
                        <div className="divider-wrap" data-alignment="default"><div className="divider"></div></div>
                        <div className="wpb_wrapper w-50 d-flex flex-column align-items-center">
                            <p className="text-ccenter">You will need to set up an at-home workspace to groom dogs and develop your practical skills. Your course materials include step-by-step instructions for setting up a safe and functional grooming workspace at home. You will submit a photograph of your workspace so your tutor can provide you with feedback and ensure your setup is secure before starting practical assignments.</p>
                        </div>
                        <div className="wpb_wrapper w-50 d-flex flex-column align-items-center">
                            <p>You will also need an area to bathe dogs before you groom them. Students typically use their own bathtub or shower, work outside, or visit a self-serve wash station. Your tutor will work with you to ensure your setup is safe and practical.</p>
                        </div>
                        <div className="divider-wrap" ><div className="divider"></div></div>
                        <a className="nectar-button large regular accent-color  regular-button" target="_blank" href="/wp-content/uploads/2017/03/What-You-Need-to-Get-Started.pdf" data-hover-text-color-override="#fff"><span>DOWNLOAD YOUR GUIDE TO GETTING STARTED</span></a>
                        <div className="divider-wrap" data-alignment="default"><div className="divider-m"></div></div>
                        <div className="img-with-aniamtion-wrap center" data-max-width="100%" data-border-radius="none">
                            <div className="inner">
                                <img className="img-with-animation skip-lazy animated-in" data-shadow="none" data-shadow-direction="middle" data-delay="0" height="auto" data-animation="fade-in" src="https://www.doggroomingcourse.com/wp-content/uploads/2017/02/where-groom-bg-1.jpg" alt="" srcset="https://www.doggroomingcourse.com/wp-content/uploads/2017/02/where-groom-bg-1.jpg 1300w, https://www.doggroomingcourse.com/wp-content/uploads/2017/02/where-groom-bg-1-300x99.jpg 300w, https://www.doggroomingcourse.com/wp-content/uploads/2017/02/where-groom-bg-1-768x253.jpg 768w, https://www.doggroomingcourse.com/wp-content/uploads/2017/02/where-groom-bg-1-1024x338.jpg 1024w" sizes="100vw" />
                            </div>
                        </div>
                    </div>
                </div>


                <div className="d-flex flex-column align-items-center" >
                    <div className="divider-wrap" data-alignment="default"><div className="divider-m"></div></div>
                    <div className="inner-wrap d-flex flex-column align-items-center px-5 text-center">
                        <Image src={feedback} width={50} height={50} alt="assignment" />
                        <div className="divider-wrap" data-alignment="default"><div className="divider"></div></div>
                        <div className="wpb_wrapper">
                            <h2>Receiving Feedback from your Tutor</h2>
                        </div>
                        <div className="divider-wrap" data-alignment="default"><div className="divider"></div></div>
                        <div className="wpb_wrapper max-w-800">
                            <p>Your tutor truly cares about your success and will encourage you to submit your very best work. After each unit of the dog grooming course, you’ll receive an audio file where your tutor explains what you did well, and where you should focus to improve your skills even further. See how your skills and confidence improve as you work your way through the course!</p>
                        </div>
                        <div className="divider-wrap" ><div className="divider"></div></div>
                        <a className="nectar-button large regular accent-color  regular-button" href="/tutors/" data-color-override="false" data-hover-color-override="false" data-hover-text-color-override="#fff"><span>MEET QC'S TUTORS</span></a>
                        <div className="divider-wrap" data-alignment="default"><div className="divider-m"></div></div>
                    </div>
                </div>

                <div className="mt-5 graduate-bg d-flex row-bg-overlay flex-column align-items-center" >
                    <div className="divider-wrap" data-alignment="default"><div className="divider-m"></div></div>

                    <div className="inner-wrap d-flex flex-column align-items-center px-5 text-center">
                        <Image src={checked} width={50} height={50} alt="assignment" />
                        <div className="divider-wrap" data-alignment="default"><div className="divider"></div></div>
                        <div className="wpb_wrapper">
                            <h2>Graduation</h2>
                        </div>
                        <div className="divider-wrap" data-alignment="default"><div className="divider"></div></div>
                        <div className="wpb_wrapper w-50">
                            <p>Once you’ve completed your dog groomer training and your tuition has been paid in full, you’ll be all set to graduate. Your professional dog groomer certificate of completion will be sent straight to your home.</p>
                        </div>

                        <div className="divider-wrap" ><div className="divider"></div></div>

                        <div className="wpb_wrapper">
                            <h4>Please keep in touch, we’d love to hear how you’re doing!</h4>
                        </div>
                        <div className="divider-wrap" data-alignment="default"><div className="divider-m"></div></div>
                    </div>
                </div>

                <div className="container text-white">
                    <div className="col-12 py-5 left d-flex flex-column flex-lg-row justify-content-around">
                        <div className="col-sm-3 wpb_column column_container column_container col no-extra-padding instance-11" data-t-w-inherits="default" data-border-radius="none" data-shadow="none" data-border-animation="" data-border-animation-delay="" data-border-width="none" data-border-style="solid" data-border-color="" data-bg-cover="" data-padding-pos="all" data-has-bg-color="false" data-bg-color="" data-bg-opacity="1" data-hover-bg="" data-hover-bg-opacity="1" data-animation="" data-delay="0"><div className="column-bg-overlay"></div>
                            <div className="column-inner bg-img student-experience">
                                <div className="wpb_wrapper">
                                    <div className="nectar-fancy-box using-img ">
                                        <div className="box-bg" >
                                            <div className="inner" >
                                                <div className="divider-wrap" data-alignment="default">
                                                    <div className="divider"></div></div>
                                                <h2>Student<br />
                                                    Experience</h2>
                                                <p>Find out what it’s like to be a student at QC Pet Studies. You may be learning from home, but you won’t be learning alone!</p>
                                                <div className="divider-wrap" data-alignment="default"><div className="divider"></div></div>
                                                <p className="text-center ">
                                                    <a className=" border border-white p-2 border-2 nectar-button n-sc-button medium see-through-3"
                                                        href="/student-experience/">
                                                        <span className="text-white">LEARN MORE</span>
                                                    </a>
                                                </p>
                                            </div>
                                            <a href="/student-experience/" className="box-link">

                                            </a>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-3 mr-5 wpb_column column_container column_container col no-extra-padding instance-12" data-t-w-inherits="default" data-border-radius="none" data-shadow="none" data-border-animation="" data-border-animation-delay="" data-border-width="none" data-border-style="solid" data-border-color="" data-bg-cover="" data-padding-pos="all" data-has-bg-color="false" data-bg-color="" data-bg-opacity="1" data-hover-bg="" data-hover-bg-opacity="1" data-animation="" data-delay="0"><div className="column-bg-overlay"></div>
                            <div className="column-inner bg-img tutor-btn">
                                <div className="wpb_wrapper">
                                    <div className="nectar-fancy-box using-img " data-style="default" data-animation="" data-border="" data-box-color-opacity="1" data-delay="" data-alignment="left" data-color="accent-color"><div className="box-bg" ></div> <div className="inner" ><div className="divider-wrap" data-alignment="default"><div className="divider"></div></div>
                                        <h2>Meet QC’s<br />
                                            Tutors</h2>
                                        <p>Learn about QC’s tutors, Certified Master Groomers Paddy Gaffney and Lisa Day. They will guide you through the course!</p>
                                        <div className="divider-wrap" data-alignment="default"><div className="divider"></div></div>
                                        <p className="text-center"><a className="nectar-button border border-white p-2 border-2 n-sc-button medium see-through-3" href="/tutors/" data-color-override="#FFFFFF" data-hover-color-override="false" data-hover-text-color-override="#fff" ><span className="text-white">TUTOR PROFILES</span></a>
                                        </p></div> <a href="/tutors" className="box-link"></a> </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-3 wpb_column column_container column_container col no-extra-padding instance-13" data-t-w-inherits="default" data-border-radius="none" data-shadow="none" data-border-animation="" data-border-animation-delay="" data-border-width="none" data-border-style="solid" data-border-color="" data-bg-cover="" data-padding-pos="all" data-has-bg-color="false" data-bg-color="" data-bg-opacity="1" data-hover-bg="" data-hover-bg-opacity="1" data-animation="" data-delay="0"><div className="column-bg-overlay"></div>
                            <div className="column-inner enroll-now-bg bg-img">
                                <div className="wpb_wrapper">
                                    <div className="nectar-fancy-box using-img " data-style="default" data-animation="" data-border="" data-box-color-opacity="1" data-delay="" data-alignment="left" data-color="accent-color"><div className="box-bg"></div> <div className="inner" ><div className="divider-wrap" data-alignment="default"><div className="divider"></div></div>
                                        <h2><b>Enroll</b><br />
                                            Now</h2>
                                        <p>Join QC Pet Studies and take the first step towards a career you’ll love. QC accepts new students 365 days a year!</p>
                                        <div className="divider-wrap" data-alignment="default"><div className="divider"></div></div>
                                        <p className="text-center"><a className=" border border-white p-2 border-2 nectar-button n-sc-button medium see-through-3" href="https://enroll.doggroomingcourse.com/course.php?c%5B%5D=dg&amp;c%5B%5D=fa" data-color-override="#FFFFFF" data-hover-color-override="false" data-hover-text-color-override="#fff" ><span className="text-white">ENROLL ONLINE</span></a>
                                        </p>
                                    </div>
                                        <a href="https://enroll.doggroomingcourse.com/" className="box-link"></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <style jsx>{`
            
            .find-dog-bg {
                background-image: url(https://www.doggroomingcourse.com/wp-content/uploads/2017/02/find-dog-bg.jpg);
                background-repeat: no-repeat;
                background-position: left;
           }
            .graduate-bg{
                background-image: url(https://www.doggroomingcourse.com/wp-content/uploads/2017/02/graduate-bg-1.jpg);
                background-position: right;
                background-repeat: no-repeat;
                background-color: #ffffff;
           }
            .bg-img{
                background-repeat: no-repeat;
                transition: all 3s ease-in-out;
                background-size: cover;
                text-align: center;
                background-position: center;
           }
            // .bg-img:hover {
                // background-size: 200%;
                // transition: all 3s ease-in-out;
                // 
           }
            .student-experience{
                background-image: url('https://www.doggroomingcourse.com/wp-content/uploads/2017/02/student-experience-btn-1.jpg');
           }
            .tutor-btn{
                background-image: url('https://www.doggroomingcourse.com/wp-content/uploads/2017/02/tutor-btn.jpg');
           }
            .enroll-now-bg{
                background-image: url('https://www.doggroomingcourse.com/wp-content/uploads/2017/02/enroll-now-bg.jpg');
           }
            .divider-small-border{
                margin-top: 20px;
               width: 50px;
                height: 6px;
               margin-bottom: 20px;
               transform: scale(1, 1);
               visibility: visible;
                background-color: #57c3d7!important;
           }
            .inner{
                min-height:350px;
                position: relative;
                text-align: left;
                color: #fff;
                z-index: 10;
           }
            .inner h2{
                color:#fff !important;
           }
            .nectar-fancy-box {
                overflow: hidden;
                position: relative;
                padding: 13%;
           }
           a{
            color: #57c3d7;
            text-decoration: none;
            transition: color .2s;
            -webkit-transition: color .2s;
       }
        .row-bg-overlay{
            background: #eaeaea;
            background: linear-gradient(to bottom, #f5f5f5 0%, #d9d9d9 100%);
       }
        .row-bg-wrap{
            margin-left: -50vw;
            left: 50%;
            width: 100vw;
       }
        .max-w-400{
            max-width: 400px;
       }
        .max-w-500{
            max-width: 500px;
       }
        .max-w-800{
            max-width: 800px;
       }
        .divider{
            height: 24px;
       }
        .divider-m{
            height: 50px;
       }
        .divider-l{
            height: 100px;
       }
        .nectar-button.large {
            font-size: 14px;
            padding: 15px 22px;
            background-color: #57c3d7!important;
            color:#fff;
       }  
            `}</style>
        </DefaultLayout>
    );

};

export default DogGroomingHowItWorksPage;
