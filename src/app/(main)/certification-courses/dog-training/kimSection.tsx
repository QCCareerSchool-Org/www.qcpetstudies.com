import Image from 'next/image';

import Kim from './kim.jpg';

export const KimSection = () => (
  <section className="bg-light">
    <div className="container">
      <div className="row justify-content-center g-4">
        <div className="col-12 col-lg-6">
          <h2 className="mb-3">Learn from an <strong>Industry-Leading Dog Trainer</strong></h2>
          <p>QC's dog training course was developed in collaboration with renowned professional trainer <strong>Kim Cooper</strong>, owner and senior instructor of Best Friends Dog Training.</p>
          <p className="mb-0">With 35 years of training experience, Kim competes in obedience, agility, tracking, and other sports with her own dogs—all using motivational, reward-based training methods. In particular, Kim loves to foster the special partnership that exists between a working dog and its handler, and specializes in training search-and-rescue dogs. Kim and her dogs have earned many search-and-rescue certifications as well as obedience and agility titles.</p>
        </div>
        <div className="col-12 col-lg-6 text-center">
          <Image src={Kim} alt="" className="img-fluid" style={{ width: 480 }} />
        </div>
      </div>
    </div>
  </section>
);
