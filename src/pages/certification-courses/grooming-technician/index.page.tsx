import { GetServerSideProps } from 'next';
import Image, { StaticImageData } from 'next/image';

import { DefaultLayout } from '../../../components/layouts/DefaultLayout';
import { SectionBackground } from '../../../components/SectionBackground';
import { SEO } from '../../../components/SEO';
import GuaranteeIcon from '../../../images/course-overview-icons/guarantee.svg';
import OutlineIcon from '../../../images/course-overview-icons/outline.svg';
import TutorIcon from '../../../images/course-overview-icons/tutor.svg';
import { formatPrice } from '../../../lib/formatPrice';
import { getLocation } from '../../../lib/getLocation';
import { lookupPrices } from '../../../lib/lookupPrices';
import { Location } from '../../../models/location';
import { PriceResult } from '../../../models/price';
import { NextPageWithLayout } from '../../_app.page';
import CertificationGoldImage from './cgt-light-gold.svg';
import { ComparisonTable } from './comparisonTable';
import GroomingTechnicianBackground from './hero.jpg';

const courseCodes = [ 'gt' ];
const headerIconSize = 20;

type Props = {
  location: Location;
  price: PriceResult;
  dgPrice: PriceResult;
};

const GroomingTechnicianPage: NextPageWithLayout<Props> = ({ location, price, dgPrice }) => (
  <>
    <SEO
      title="Grooming Technician Course"
      description="Become a Certified Grooming Technician with interactive online training!"
      canonical="/certification-courses/grooming-technician"
    />

    <section id="top" className="bg-dark">
      <SectionBackground src={GroomingTechnicianBackground} priority objectPosition="right" />
      <div className="container text-center">
        <div className="row mb-4">
          <div className="mb-4">
            <Image
              src={CertificationGoldImage as StaticImageData}
              alt="Certified Grooming Technician CGT"
              height="125"
              width="125"
              style={{ maxWidth: '100%', height: 'auto' }}
            />
          </div>
          <h1>Grooming Technician Course</h1>
          {price && price.plans.part.deposit > 0 && <h4>Get Started for Only <strong>{price.currency.symbol}{formatPrice(price.plans.part.deposit)}</strong></h4>}
          <p><em><a href="#tuition" className="text-white">See tuition details</a></em></p>
          <a href="https://enroll.qcpetstudies.com?c=gt"><button className="btn btn-secondary btn-lg">Enroll Online</button></a>
        </div>
        <div className="row justify-content-center">
          <div className="col-12 col-md-6 d-flex">
            <div className="col text-uppercase">
              <a href="#outline"><Image
                src={OutlineIcon as StaticImageData}
                alt="outline"
                width={headerIconSize}
                height={headerIconSize}
                style={{ maxWidth: '100%', height: 'auto' }}
              /></a>
              <p><strong>Outline</strong></p>
            </div>
            <div className="col text-uppercase">
              <a href="#guarantee"><Image
                src={GuaranteeIcon as StaticImageData}
                alt="play button"
                width={headerIconSize}
                height={headerIconSize}
                style={{ maxWidth: '100%', height: 'auto' }}
              /></a>
              <p><strong>Guarantee</strong></p>
            </div>
            <div className="col text-uppercase">
              <a href="#tutors"><Image
                src={TutorIcon as StaticImageData}
                alt="play button"
                width={headerIconSize}
                height={headerIconSize}
                style={{ maxWidth: '100%', height: 'auto' }}
              /></a>
              <p><strong>Tutors</strong></p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div className="container">
        <h2>Become a Certified Professional Dog Groomer</h2>
        <p className="lead">International Dog Grooming Professional™ | IDGP™</p>
      </div>
    </section>
    <section>
      <div className="container">
        <ComparisonTable gtPrice={price} dgPrice={dgPrice} />
      </div>
    </section>
  </>
);

GroomingTechnicianPage.getLayout = page => <DefaultLayout footerCTAType="grooming">{page}</DefaultLayout>;

export const getServerSideProps: GetServerSideProps<Props> = async context => {
  const location = await getLocation(context);
  const [ price, dgPrice ] = await Promise.all([
    lookupPrices(courseCodes, location.countryCode, location.provinceCode),
    lookupPrices([ 'dg' ], location.countryCode, location.provinceCode),
  ]);
  return { props: { location, price, dgPrice } };
};

export default GroomingTechnicianPage;
