import Image, { StaticImageData } from 'next/image';
import { ReviewSection } from '../learning-and-working-during-covid/ReviewSection';
import { CertificationSection } from './CertificationSection';
import { LicenseSection } from './LicenseSection';
import { TrainingRequiredSection } from './TrainingRequiredSection';
import { PageComponent } from '@/app/serverComponent';

import { SEO } from '@/components/SEO';
import GroomerDemattingBackground from '@/images/backgrounds/license-vs-certification-bg.jpg';

const LicenseVsCertification: PageComponent = () => {

  return <>
    <SEO
      title="Dog Grooming License vs. Certification"
      description="Dog Grooming License vs. Certification"
      canonical="/resources/license-vs-certification"
    />

    <section id="top" className="bg-dark">
      <Image
        src={GroomerDemattingBackground as StaticImageData}
        placeholder="blur"
        alt="groomer dematting a dog"
        priority
        fill
        sizes="100vw"
        style={{ objectFit: 'cover', objectPosition: 'center' }}
      />
      <div className="image-overlay-gradient" />
      <div className="container text-center">
        <h1>Dog Grooming License vs. Certification</h1>
        <p className="lead">What's the difference between a dog grooming license and a dog grooming certificate?</p>
      </div>
    </section>

    <TrainingRequiredSection />

    <LicenseSection />

    <CertificationSection />

    <ReviewSection />

  </>;
};

export default LicenseVsCertification;
