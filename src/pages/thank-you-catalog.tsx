import { NextPage } from 'next';
import Image from 'next/image';
import { FaPaw } from 'react-icons/fa';

import { DefaultLayout } from '../components/DefaultLayout';
import { SEO } from '../components/SEO';
import { useScreenWidth } from '../hooks/useScreenWidth';
import CatalogBackground from '../images/backgrounds/white-bichon-frisee-circle-cut.jpg';

const ThankYouCatalogPage: NextPage = () => {
  const screenWidth = useScreenWidth();
  const mdOrGreater = screenWidth >= 768;

  return (
    <DefaultLayout>
      <SEO
        title="Here's Your Course Catalog"
        description="Here's Your Course Catalog"
        canonical="/thank-you-catalog"
      />

      <section id="firstSection" className="bg-black">
        {mdOrGreater && <Image src={CatalogBackground} layout="fill" objectFit="cover" objectPosition="right" placeholder="blur" alt="white Bichon Frisee with circle cut" />}
        <div className="container text-center text-md-start">
          <div className="row">
            <div className="col-12 col-md-6 col-lg-7 col-xl-8">
              <h1>Your Course Catalog</h1>
              <h2>Thank You for Your Interest!</h2>
              <p className="lead">Find out what a career in dog grooming can do for you, and how you can get started with QC&apos;s Dog Grooming course.</p>
              <h4 className="mb-4">Download your course catalog here:</h4>
              <a href="" className="btn btn-outline-secondary btn-lg">Download&nbsp;&nbsp;<FaPaw style={{ position: 'relative', top: -2 }} /></a>
            </div>
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
};

export default ThankYouCatalogPage;
