import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import { FaInstagram, FaLaptop, FaMedkit, FaPaw, FaPencilAlt, FaTruck } from 'react-icons/fa';
import { HowToGroomSection } from './HowToGroomSection';
import { KeepingSafeSection } from './KeepingSafeSection';
import { ReviewSection } from './ReviewSection';
import { PageComponent } from '@/app/serverComponent';

import { SEO } from '@/components/SEO';
import LearningAndWorkingBackground from '@/images/backgrounds/groomer-wearing-face-mask.jpg';

const LearningDuringCovidPage: PageComponent = () => {

  return <>
    <SEO
      title="Learning &amp; Working During COVID-19"
      description="Starting a new career during a pandemic can be challenging! Find out how online training can help."
      canonical="/resources/learning-and-working-during-covid"
    />

    <section id="top" className="bg-dark">
      <Image
        src={LearningAndWorkingBackground as StaticImageData}
        placeholder="blur"
        alt="groomer wire brushing a dog"
        priority
        fill
        sizes="100vw"
        style={{ objectFit: 'cover', objectPosition: 'center' }}
      />
      <div className="image-overlay-gradient" />
      <div className="container text-center">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10">
            <h1>Learning &amp; Working During COVID</h1>
            <h2 className="mb-4">Dog Grooming in a Pandemic</h2>
            <p className="lead">See how you can earn your certification and run your dog grooming business during COVID-19!</p>
            <p className="mb-0">Learn from the safety of home with QC&apos;s online dog grooming courses</p>
          </div>
        </div>
      </div>
    </section>

    <HowToGroomSection />
    <ReviewSection />

    <section>
      <div className="container text-center">
        <div className="row">
          <div className="col-12 col-lg-10 offset-lg-1">
            <h2 className="mb-4">You Can Still Earn an Income for Your Dog Grooming Business During COVID-19</h2>
            <p className="lead mb-5">Continue to book clients and make a profit by adding any of the following services to your business</p>
          </div>
        </div>
        <div className="row justify-content-around mb-4">
          <div className="col-10 col-lg-3 mb-4 mb-lg-0 p-5 border border-light">
            <FaTruck className="h2 text-secondary mb-3" />
            <h4>Mobile Grooming</h4>
            <p>Consider launching a <Link href="/2020/10/dog-grooming-career-pros-and-cons-of-mobile-grooming" className="link-primary">mobile grooming</Link> service</p>
          </div>
          <div className="col-10 col-lg-3 mb-4 mb-lg-0 p-5 border border-light">
            <FaLaptop className="h2 text-secondary mb-3" />
            <h4>Virtual Services</h4>
            <p>Introduce virtual services to your business, such as consultations and at-home grooming lessons</p>
          </div>
          <div className="col-10 col-lg-3 p-5 border border-light">
            <FaMedkit className="h2 text-secondary mb-3" />
            <h4>Protection</h4>
            <p>Insist that everyone (staff and clients) wear masks at all times</p>
          </div>
        </div>

        <div className="row justify-content-around mb-4">
          <div className="col-10 col-lg-3 mb-4 mb-lg-0 p-5 border border-light">
            <FaPencilAlt className="h2 text-secondary mb-3" />
            <h4>Blogging</h4>
            <p>Write for a dog grooming blog/vlog or start your own</p>
          </div>
          <div className="col-10 col-lg-3 mb-4 mb-lg-0 p-5 border border-light">
            <FaInstagram className="h2 text-secondary mb-3" />
            <h4>Social Media</h4>
            <p>Become an authority on dog grooming on social media</p>
          </div>
          <div className="col-10 col-lg-3 p-5 border border-light bg-primary text-white">
            <FaPaw className="h2 text-secondary mb-3" />
            <h4 className="text-white">Sniffin&apos; Around</h4>
            <p>Visit QC&apos;s blog for articles and tips for working and expanding business in 2021</p>
          </div>
        </div>
      </div>
    </section>

    <KeepingSafeSection />
  </>;
};

export default LearningDuringCovidPage;
