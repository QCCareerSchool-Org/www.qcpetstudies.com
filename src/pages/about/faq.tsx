import { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ReactElement, ReactNode } from 'react';
import Accordion from 'react-bootstrap/Accordion';

import { AccordionSection } from '../../components/AccordionSection';
import { AccordionToggle } from '../../components/AccordionToggle';
import { DefaultLayout } from '../../components/DefaultLayout';
import { SEO } from '../../components/SEO';

import FaqBgImage from '../../images/backgrounds/faq-background.jpg';

const secondaryNavLinks = [
  { name: 'About QC Pet Studies', url: '#about' },
  { name: 'Dog Grooming FAQ', url: '#grooming' },
  { name: 'Dog Training FAQ', url: '#training' },
];

const FAQPage: NextPage = () => {
  let i = 0;

  return (
    <DefaultLayout secondaryTitle="FAQ" secondaryNavLinks={secondaryNavLinks}>
      <SEO
        title="FAQ"
        description="If you have any questions about QC's online programs in dog grooming or dog training, find your answers here!"
        canonical="/about/faq"
      />

      <section id="firstSection" className="bg-dark">
        <Image src={FaqBgImage} layout="fill" objectFit="cover" objectPosition="center" placeholder="blur" alt="dog in a dog bed, holding a stick" />
        <div className="container text-center">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-10 text-white">
              <h1>Frequently Asked Questions about QC Pet Studies</h1>
            </div>
          </div>
        </div>
      </section>

      <section id="about">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-10">
              <h2 className="text-center mb-4">Questions About QC Pet Studies</h2>
              <Accordion>
                <QuestionAnswer question="Is QC Pet Studies an accredited online school?" index={i++}>
                  <p className="mb-0">Yes. QC Pet Studies is a faculty of QC Career School, which is an accredited business with the Better Business Bureau. QC holds the <a href="https://www.bbb.org/ottawa/business-reviews/correspondence-schools/qc-career-school-in-ottawa-on-4175" className="link-primary">highest possible consumer satisfaction standing (A+) with the BBB</a>.</p>
                </QuestionAnswer>
                <QuestionAnswer question="What type of payment plans does QC offer?" index={i++}>
                  <p className="mb-0">When you enroll with QC, you can choose to either receive a discount to pay your tuition in full OR opt for a tuition payment plan. On a payment plan, you pay an initial deposit to enroll, then regular monthly payments. Monthly payments are withdrawn on the date of your choosing so you can schedule your payments to coincide with your budget.</p>
                </QuestionAnswer>
                <QuestionAnswer question="How does the money back guarantee work?" index={i++}>
                  <p>QC&apos;s 21-day guarantee is there to help you make an informed decision about your education. From the day you receive your online student center login, you have a full three weeks to review the course guides, books, and assignments in order to decide whether your course is right for you. If you decide that it&apos;s not a good fit, simply contact the school to arrange a refund of your tuition. You&apos;ll be asked to return any course material you have to the school, and these must be unused.</p>
                  <p className="mb-0"><em>Note: that since the 21-day guarantee is made for you to decide whether to take the course or not. A full tuition refund cannot be granted if you&apos;ve already completed and submitted course work to your tutor.</em></p>
                </QuestionAnswer>
                <QuestionAnswer question="What if I miss a tuition payment?" index={i++}>
                  <p>Sometimes life gets in the way, and that&apos;s okay! If you know in advance that you won&apos;t be able to make a tuition payment, simply contact your student advisor who will be happy to work with you to update your payment schedule. </p>
                  <p>If you need to take a break from tuition payments for a month or two, that&apos;s perfectly fine! Again, just call your student advisor to make those arrangements ahead of time.</p>
                  <p>If you forget and an attempted monthly payment doesn&apos;t go through, a student advisor will contact you to make arrangements to get you back on track.</p>
                  <p className="mb-0"><em>Note: students can only access their online student center if their account is in good standing. If payments are missed, the student center is placed &ldquo;on hold&rdquo; until payments are caught up. While you won&apos;t lose any work, you won&apos;t be able to submit assignments to your tutor during this time.</em></p>
                </QuestionAnswer>
                <QuestionAnswer question="Are there any technology requirements to complete my online courses with QC?" index={i++}>
                  <p>To complete any online course with QC Pet Studies, you must have access to the following:</p>
                  <ul className="mb-0">
                    <li>A desktop computer, laptop, or tablet</li>
                    <li>A smart phone and/or camera with photograph and video capability</li>
                    <li>An up-to-date web browser</li>
                    <li>An up-to-date PDF reader, such as <a href="https://get.adobe.com/reader" className="link-primary">Adobe Reader</a></li>
                  </ul>
                </QuestionAnswer>
                <QuestionAnswer question="What do I do if I get stuck on a course assignment?" index={i++}>
                  <p className="mb-0">You may be learning from home but you are in no way alone! You can contact your Student Support Team by phone, email or Live Chat whenever you need to. The team will always be happy to answer questions about your course or assignments, and if they don&apos;t have an answer for you, they&apos;ll get one from your tutor! You can also get help and advice from your peers on the QC student forum, or from the QC Pet Studies community on Facebook. Learn more about QC&apos;s <Link href="/student-experience"><a className="link text-primary">student support services</a></Link>.</p>
                </QuestionAnswer>
                <QuestionAnswer question="How will QC help me start my career once I’ve finished the online course?" index={i++}>
                  <p>QC Pet Studies hosts a variety of free career resources for students and graduates in the Online Student Center. Students also receive free business training that prepares you to run your own business.</p>
                  <p className="mb-0">Even long after you have completed your course, you&apos;re always welcome to reach out to QC&apos;s support team who will be happy to offer you continued support and guidance throughout your career.</p>
                </QuestionAnswer>
                <QuestionAnswer question="I'm not interested in starting a business. Do I still have to complete the business training in my online course?" index={i++}>
                  <p className="mb-0">No. The business unit in QC courses is always optional. You may choose whether or not you&apos;d like to complete this component of the course.</p>
                </QuestionAnswer>
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      <section id="grooming" className="bg-light">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-10">
              <h2 className="text-center mb-4">Questions About Dog Grooming</h2>
              <Accordion>
                <QuestionAnswer question="Is it possible to learn dog grooming online?" index={i++}>
                  <p>Absolutely! As a QC grooming student, you&apos;ll receive the tools you need to learn the theoretical knowledge and practical skills of a dog groomer. Through hands-on assignments and practicum units, you&apos;ll get to develop your skills in real-life scenarios. Learn more about <Link href="/learning-online"><a className="link text-primary">QC&apos;s online learning system</a></Link>.</p>
                  <p>As a student of QC&apos;s Dog Grooming School, you&apos;ll enjoy the flexibility of online dog grooming classes because they&apos;ll fit into your own schedule and lifestyle. Remember, just because you&apos;re learning from home doesn&apos;t mean you&apos;re learning alone! You&apos;ll work with a personal <Link href="/tutors"><a className="link text-primary">dog grooming tutor </a></Link> who will guide you through the course and review all your work, so you&apos;ll receive the same feedback as you would in a classroom-based dog grooming school.</p>
                  <p className="mb-0">QC&apos;s Student Support Specialists are also available to answer your questions before, during, and after your online dog grooming course! <Link href="/contact-us"><a className="link text-primary">Contact QC Pet Studies</a></Link> by phone, email, or Live Chat.</p>
                </QuestionAnswer>
                <QuestionAnswer question="Do I need prior training or experience as a dog groomer before taking this course?" index={i++}>
                  <p className="mb-0">No, you do not need any previous experience in the dog grooming industry to succeed in the QC Pet Studies courses. The online dog grooming course is comprehensive and will teach you all the fundamentals of dog grooming before moving on to more advanced techniques. To learn more, visit the <Link href="/online-courses/dog-grooming"><a className="link text-primary">dog grooming course overview</a></Link> page.</p>
                </QuestionAnswer>
                <QuestionAnswer question="Will I need to purchase anything else to complete the dog groomer course?" index={i++}>
                  <p className="mb-0">Yes. You will need some additional tools and products to complete your practical assignments, all of which will be valuable investments for your career. Find a list of all the items you need in the <Link href="https://www.doggroomingcourse.com/wp-content/uploads/2017/03/What-You-Need-to-Get-Started.pdf"><a className="link text-primary">Getting Started Guide</a></Link>.</p>
                </QuestionAnswer>
                <QuestionAnswer question="How long will it take to complete my online dog grooming class?" index={i++}>
                  <p>With QC&apos;s online courses, you work at your own pace. You decide how much time per week you want to spend developing your grooming skills. QC&apos;s flexible dog groomer training has no deadlines for completing course assignments. Typically, students who work on their grooming assignments for a short period each week will complete their online course within six months to a year.</p>
                  <p className="mb-0">Keep in mind that you have a full two years to complete your dog grooming course, so you can schedule your groomer training around your lifestyle!</p>
                </QuestionAnswer>
                <QuestionAnswer question="How exactly do the hands-on grooming assignments and practicum dog grooming units work?" index={i++}>
                  <p>You will complete the practical grooming assignments and practicum units by working with real dogs. Your course materials contain guidelines for finding dogs to work with. In order to get the most out of your dog groomer education, you are encouraged to work on as many different dogs as you can find!</p>
                  <p className="mb-0">To groom these dogs, you will need to set up an at-home grooming workspace. Your course will guide you through setting up your workspace, and your tutor will advise you on your workspace before you start grooming dogs, to make sure the space is safe and practical for both you and your furry clients!</p>
                </QuestionAnswer>
                <QuestionAnswer question="Do I need a state or provincial dog grooming license to work in the industry?" index={i++}>
                  <p>Dog Grooming is an unregulated field in most states and provinces. You should always double-check local regulations, but odds are you do not need any kind of dog groomer license or specific education (including a minimum number of training hours) in order to become a dog groomer.</p>
                  <p className="mb-0">There are a number of dog grooming associations that you can usually join by paying an annual membership fee. In most cases, these associations also have their own certification/qualification exams or requirements. QC&apos;s online dog grooming course was written to meet the requirements of the National Dog Groomers Association of America. Completing the online dog grooming course will not only train you to become a successful professional dog groomer but will also prepare you to take the NDGAA Certification Exam, should you choose to take it.</p>
                </QuestionAnswer>
                <QuestionAnswer question="Will I be able to receive discounts toward dog grooming tools and equipment as a student or graduate?" index={i++}>
                  <p className="mb-0">Yes! QC Pet Studies students and graduates are eligible to receive discounts from a variety of pet retailers. Find a full list of preferred dog grooming suppliers <Link href="https://www.doggroomingcourse.com/your-dog-grooming-career/discounts-for-grooming-students/"><a className="link text-primary">here</a></Link>.</p>
                </QuestionAnswer>
                <QuestionAnswer question="How much can you earn as a professional dog groomer?" index={i++}>
                  <p>A professional dog groomer&apos;s salary varies depending on the level of experience, skill, location, and the number of dogs groomed per day. A dog groomer can expect to earn between $25,000 and $45,000 US per year.</p>
                  <p className="mb-0">If you decide to work in a dog grooming salon, you&apos;ll have a regular salary. If you choose a freelance dog grooming career, your salary will be less steady but you&apos;ll be able to set your own rates and hours. A dog groomer working at a large-scale pet retailer will typically make a stable hourly wage, usually with the potential for commissions and tips.</p>
                </QuestionAnswer>
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      <section id="training">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-10">
              <h2 className="text-center mb-4">Questions About Dog Training</h2>
              <Accordion>
                <QuestionAnswer question="Is it possible to learn to become a professional dog trainer online?" index={i++}>
                  <p>Absolutely! As a QC dog training student, you&apos;ll receive the tools you need to learn the theoretical knowledge and practical skills of a dog trainer. Through hands-on assignments and hands-on learning, you&apos;ll get to develop your skills in real-life scenarios.</p>
                  <p>As a student of QC&apos;s Dog Training Course, you&apos;ll enjoy the flexibility of online dog training classes because they&apos;ll fit into your own schedule and lifestyle. Remember, just because you&apos;re learning from home doesn&apos;t mean you&apos;re learning alone! You&apos;ll work with a personal dog training tutor who will guide you through the course and review all your work, so you&apos;ll receive the same feedback as you would in a classroom-based dog training program.</p>
                  <p className="mb-0">QC&apos;s Student Support Specialists are also available to answer your questions before, during, and after your online dog training course! <Link href="/contact-us"><a className="link text-primary">Contact QC Pet Studies</a></Link> by phone, email, or Live Chat.</p>
                </QuestionAnswer>
                <QuestionAnswer question="Do I need prior training or experience as a dog trainer before taking this course?" index={i++}>
                  <p className="mb-0">Not at all! The online dog training course will teach you everything you need to know about becoming a professional dog trainer from the ground up. While it always helps to have experience training your own dog(s), it&apos;s definitely not a requirement to take this course!</p>
                </QuestionAnswer>
                <QuestionAnswer question="Will I need to purchase anything else to complete the dog groomer course?" index={i++}>
                  <p className="mb-0">If you have a dog at home, odds are you already have the basics like dog treats, a crate, a treat pouch and probably a clicker. If not, you&apos;ll want to obtain these tools for your dog training class. You might also want to invest in different types of leashes, collars, harnesses, and more, however these are not required to complete the course.</p>
                </QuestionAnswer>
                <QuestionAnswer question="How long will it take to complete my online dog training class?" index={i++}>
                  <p>With QC&apos;s online courses, you work at your own pace. You decide how much time per week you want to spend developing your training skills. QC&apos;s flexible dog trainer course has no deadlines for completing course assignments. Typically, students who work on their training assignments for a short period each week will complete their online course within about three months.</p>
                  <p className="mb-0">Keep in mind that you have a full two years to complete your course, so you can schedule your training around your lifestyle!</p>
                </QuestionAnswer>
                <QuestionAnswer question="What methods do you teach as part of the dog training class?" index={i++}>
                  <p>QC&apos;s dog training program was developed using science-based training methods. QC&apos;s experts do not believe in using force or coercion to teach a dog new behaviors or to correct unwanted behaviors. Rather, students are taught to analyze a dog&apos;s behavior to determine the best method suited for each dog individually. Once you understand how a dog learns, teaching it becomes a piece of cake!</p>
                  <p className="mb-0">As a general rule, QC follows the &ldquo;Least Invasive, Minimally Aversive&rdquo; approach to dog training. You&apos;ll learn how to encourage a dog to make good choices, and how to encourage a handler to develop a bond of trust and respect with their dog.</p>
                </QuestionAnswer>
                <QuestionAnswer question="Do I need a state or provincial dog training license to work in the industry?" index={i++}>
                  <p>Dog training is an unregulated field in most states and provinces. You should always double-check local regulations, but odds are you do not need any kind of dog training license or specific education (including a minimum number of training hours) in order to become a dog trainer.</p>
                  <p>The Certification Council for Professional Dog Trainers (CCPDT) is an independent certifying organization for professional dog trainers and is highly regarded as the gold standard in dog training. There are two certifications most trainers aspire to achieve in their career: The CPDT-KA (Certified Professional Dog Trainer - Knowledge Assessed) and CPDT-KSA (Certified Professional Dog Trainer - Knowledge and Skills Assessed).</p>
                  <p className="mb-0">The online dog training course provided by QC was developed to prepare students for the CPDT-KA exam. You can learn more about obtaining your CPDT certification <Link href="https://www.ccpdt.org/certification/dog-trainer-certification/about-the-examination/"><a className="link text-primary">here</a></Link>.</p>
                </QuestionAnswer>
                <QuestionAnswer question="Will I be able to receive discounts toward dog training tools and equipment as a student or graduate?" index={i++}>
                  <p className="mb-0">Yes! QC Pet Studies students and graduates are eligible to receive discounts from a variety of pet retailers. Find a full list of preferred suppliers <Link href=" https://www.doggroomingcourse.com/your-dog-grooming-career/discounts-for-grooming-students/"><a className="link text-primary">here</a></Link>.</p>
                </QuestionAnswer>
                <QuestionAnswer question="How much can you earn as a professional dog trainer?" index={i++}>
                  <p>A professional dog trainer&apos;s salary varies depending on the level of experience, skill, location, and the type of services you offer. A dog trainer can expect to earn between $21,550 and $62,040 US per year.</p>
                  <p className="mb-0">If you decide to work in a dog training school, you&apos;ll have a regular salary. If you choose a freelance dog training career, your salary will be less steady but you&apos;ll be able to set your own rates and hours. Launching your own dog training school has the highest salary potential since you can hire other trainers at an hourly rate and make a profit off their training courses, too!</p>
                </QuestionAnswer>
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        #grooming { background-color: #f7f7f7 !important; }
      `}</style>
    </DefaultLayout>
  );
};

type QuestionAnswerProps = {
  question: string;
  index: number;
  children: ReactNode;
};

const QuestionAnswer = ({ question, index, children }: QuestionAnswerProps): ReactElement => (
  <>
    <AccordionToggle title={question} eventKey={index.toString()} />
    <AccordionSection eventKey={index.toString()}>
      {children}
    </AccordionSection>
  </>
);

export default FAQPage;
