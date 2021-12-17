import { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { FaPaw } from 'react-icons/fa';

import { DefaultLayout } from '../components/DefaultLayout';
import { SEO } from '../components/SEO';
import { useScreenWidth } from '../hooks/useScreenWidth';
import CatalogBackground from '../images/backgrounds/white-bichon-frise-circle-cut.jpg';

const ThankYouCatalogPage: NextPage = () => {
  const screenWidth = useScreenWidth();
  const mdOrGreater = screenWidth >= 768;

  return (
    <DefaultLayout>
      <SEO
        title="Here's Your Course Preview"
        description="Get your Dog Grooming Course Preview Now"
        canonical="/thank-you-dog-grooming-course-preview"
      />

      <section id="top" className="bg-black">
        {mdOrGreater && <Image src={CatalogBackground} layout="fill" objectFit="cover" objectPosition="right" placeholder="blur" alt="white Bichon Frise with circle cut" />}
        <div className="container text-center text-md-start">
          <div className="row">
            <div className="col-12 col-md-6 col-lg-7 col-xl-8">
              <h1>Your Course Preview</h1>
              <h2>Thank You for Your Interest!</h2>
              <p className="lead">Find out what a career in dog grooming can do for you, and how you can get started with QC's Dog Grooming course.</p>
              <h4 className="mb-4">Access your free course preview here:</h4>
              <Link href="/dog-grooming-courses/dog-grooming/course-preview"><a className="btn btn-outline-secondary btn-lg">Get Preview&nbsp;&nbsp;<FaPaw style={{ position: 'relative', top: -2 }} /></a></Link>
            </div>
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
};

export default ThankYouCatalogPage;
