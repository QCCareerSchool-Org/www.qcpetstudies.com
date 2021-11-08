import { NextPage } from 'next';
import Image from 'next/image';
import { FaPaw } from 'react-icons/fa';

import { DefaultLayout } from '../components/DefaultLayout';
import { SEO } from '../components/SEO';
import CatalogBackground from '../images/backgrounds/white-poodle-circle-cut.jpg';

const ThankYouCatalogPage: NextPage = () => (
  <DefaultLayout>
    <SEO
      title="Here's Your Course Catalog"
      description="Here's Your Course Catalog"
      canonical="/thank-you-catalog"
    />

    <section id="firstSection" className="bg-dark text-shadow">
      <Image src={CatalogBackground} layout="fill" objectFit="cover" objectPosition="center" placeholder="blur" alt="white poodle with circle cut" />
      <div className="container text-center">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10">
            <h1 className="mb-4">Your course catalog</h1>
            <h2>Thank You for Your Interest!</h2>
            <p className="lead">Find out what a career in dog grooming can do for you, and how you can get started with QC&apos;s Dog Grooming course.</p>
            <h4 className="mb-4">Download your course catalog here:</h4>
            <a href="" className="btn btn-outline-secondary btn-lg">Download&nbsp;&nbsp;<FaPaw /></a>
          </div>
        </div>
      </div>
    </section>
  </DefaultLayout>
);

export default ThankYouCatalogPage;
