import { NextPage } from 'next';
import Image from 'next/image';
import { DefaultLayout } from '../../components/DefaultLayout';
import { SEO } from '../../components/SEO';
import StudentDiscountBackground from '../../images/backgrounds/student-discounts-bg.jpg';
import DirectLogo from '../../images/directLogo.jpg';
import EpiPetLogo from '../../images/EpiPet.jpg';
import MasonCompanyLogo from '../../images/MasonCo_logo.jpg';
import MyTimeLogo from '../../images/mytime_logo.jpg';
import PetSoftwareLogo from '../../images/pet-software-logo.jpg';
import SenseiWhiteLogo from '../../images/SenseiWhiteBGLog.jpg';
import SharkFinLogo from '../../images/SharkFinLogo.jpg';
import ZenDogLogo from '../../images/zendog.jpg';

const StudentDiscountsPage: NextPage = () => {

  return (
    <DefaultLayout>
      <SEO
        title="Student Discount"
        description="This is Student Discount page"
        canonical="/student-discount"
      />

      <section id="firstSection" className="bg-dark">
        <Image src={StudentDiscountBackground} layout="fill" objectFit="cover" objectPosition="center" alt="student discount background" />
        <div className="container">
          <h1>QC Student<br />Discounts</h1>
        </div>
      </section>

      <section>
        <div className="container text-center">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-10">
              <p className="lead"><strong>QC partners with top quality vendors to provide amazing discounts for our students</strong></p>
              <p>Below you&apos;ll find a list of QC&apos;s preferred partners who offer special discounts to QC Pet Studies&apos; students and graduates. In most cases, these offers are available to you as soon as you enroll!</p>
            </div>
          </div>

          <h2 className="my-5">Pet Business <strong>Discounts</strong></h2>

          <div className="row mb-4 align-items-center">
            <div className="col-12 col-lg-3 mb-3">
              <Image src={PetSoftwareLogo} alt="123Pet software logo" height="130px" width="170px" />
            </div>
            <div className="col-12 col-lg-9 text-lg-start">
              <p className="lead"><strong>123Pet Software</strong></p>
              <p>123Pet Software develops, delivers, and supports powerful business management software that runs thousands of pet businesses around the world. You&apos;ll be able to run your dog grooming business efficiently and grow your business with unique software features!</p>
              <em>QC Pet Studies students receive a 50% off discount for 2 months</em>
            </div>
          </div>

          <div className="row mb-4 align-items-center">
            <div className="col-12 col-lg-3">
              <Image src={MyTimeLogo} alt="My time logo" objectFit="none" />
            </div>
            <div className="col-12 col-lg-9 text-lg-start">
              <p className="lead"><strong>MyTime</strong></p>
              <p>MyTime is the leading cloud based scheduling and marketing application for local businesses. Features include online booking, automated email and SMS marketing, full point of sale, reputation management, reports and analytics, and real time messaging with clients. Use MyTime to engage and retain customers, drive operational efficiency and grow your business!</p>
              <em>QC Pet Studies students receive 30% off their purchase</em>
            </div>
          </div>
          <div className="row mb-4 align-items-center">
            <div className="col-12 col-lg-3">
              <Image src={MasonCompanyLogo} alt="Mason company logo" objectFit="none" />
            </div>
            <div className="col-12 col-lg-9 text-lg-start">
              <p className="lead"><strong>Mason Company</strong></p>
              <p>Mason Company is unique in its ability to design and build any size animal housing solution for dogs, cats and other animals. Their exclusive focus on animal enclosure solutions since 1892 means they deliver high quality animal enclosure solutions for even the toughest environments. They have installed more kennel systems than any other company in the world!</p>
              <em>QC Pet Studies students and graduates receive 15% off their purchase</em>
            </div>
          </div>
          <hr />
        </div>
      </section>

      <section className="py-0">
        <div className="container text-center">
          <h2 className="mb-5">Grooming Tool <strong>Discounts</strong></h2>
          <div className="row mb-4 align-items-center">
            <div className="col-12 col-lg-3">
              <Image src={SharkFinLogo} alt="Shark fin logo" objectFit="none" />
            </div>
            <div className="col-12 col-lg-9 text-lg-start">
              <p className="lead"><strong>Shark Fin</strong></p>
              <p>The Shark Fin Shear Company aims to offer you the most technologically advanced shears in the world. Their patented technology has been tested for over 17 years throughout the world and is proven to dramatically help you with your scissor work.</p>
              <em>QC Pet Studies students receive a 20% off discount on shears</em>
            </div>
          </div>
          <div className="row mb-4 align-items-center">
            <div className="col-12 col-lg-3 text-lg-start">
              <Image src={SenseiWhiteLogo} alt="Sensei logo" objectFit="none" />
            </div>
            <div className="col-12 col-lg-9 text-lg-start">
              <p className="lead"><strong>Sensei</strong></p>
              <p>Sensei consistently designs and manufactures extremely ergonomic professional shears. With over thirty years of high performance blade technology, Sensei continues to strive to be an innovative force in the industry. They offer a vast collection of high quality Japanese shears including neutral grip crane handle shears, swivel shears, texture thinning shears and seamless blending shears that leave no line and comb out with zero drag.</p>
              <em>QC Pet Studies students receive $25 or 10-15% (whichever is greater) off any shears purchased online, as well as free shipping within the USA. Students also receive an additional discount if they purchase multiple shears</em>
            </div>
          </div>
          <div className="row mb-4 align-items-center">
            <div className="col-12 col-lg-3 text-lg-start">
              <Image src={EpiPetLogo} alt="Epi pet logo" objectFit="none" />
            </div>
            <div className="col-12 col-lg-9 text-lg-start">
              <p className="lead"><strong>Epi Pet</strong></p>
              <p>Epi Pet offers a variety of products that can help the professional groomer provide a complete and healthy groom and promote overall health for their clients&apos; pets. The Epi Pet Shampoo is multifunctional and promotes healthy skin and coat. The Epi Pet Ear Cleaner cleanses, enriches and refreshes the ear by gently removing dirt, grime and wax.</p>
              <em>QC Pet Studies students receive 50% off products purchased on the Epi-Pet website</em>
            </div>
          </div>
          <div className="row mb-4 align-items-center">
            <div className="col-12 col-lg-3 text-lg-start">
              <div className="d-flex justify-content-around">
                <Image src={DirectLogo} alt="Direct animal product logo" height="150px" width="180px" objectPosition="right" />
              </div>
            </div>
            <div className="col-12 col-lg-9 text-lg-start">
              <p className="lead"><strong>Direct Animal Products</strong></p>
              <p>Direct Animal Products supplies tubs, grooming tables and cages that minimize back, neck and shoulder strain. They understand that proper body mechanics along with ergonomic grooming equipment is absolutely essential to the longevity of a pet stylist. Their equipment promises to perform well and is designed with your comfort in mind.</p>
              <em>QC Pet Studies students receive 10% off their online purchase</em>
            </div>
          </div>
          <div className="row align-items-center mb-5">
            <div className="col-12 col-lg-3 text-lg-start my-4">
              <div className="d-flex justify-content-around">
                <Image src={ZenDogLogo} alt="Zendog logo" height="170px" width="170px" />
              </div>
            </div>
            <div className="col-12 col-lg-9 text-lg-start">
              <p className="lead"><strong>ZenDog</strong></p>
              <p>ZenDog sells earthly inspired aromatherapy shampoos, sprays, and gels that never contain synthetic fragrances, colors, bleaches, or dyes. They&apos;re formulated exclusively with 100% pure, therapeutic class essential oils. Their products are created by professional groomers for professional groomers.</p>
              <em>QC Pet Studies students receive an Aromatherapy Package worth $160 for only $99. The package includes 10 different aromatherapy healing shampoos, sprays and gels</em>
            </div>
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
};

export default StudentDiscountsPage;
