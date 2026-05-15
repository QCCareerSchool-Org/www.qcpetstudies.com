import Image from 'next/image';

import Kim from './kim.jpg';

export const KimSection = () => (
  <section className="bg-light">
    <div className="container">
      <div className="row">
        <div className="col">
          <h2> Learn from an <strong>Industry-Leading Dog Trainer</strong></h2>
          <p>QC's dog training course was developed in collaboration with renowned professional trainer <strong>Kim Cooper</strong>, owner and senior instructor of Best Friends Dog Training. </p>
          <p>With 35 years of training experience, Kim competes in obedience, agility, tracking, and other sports with her own dogs—all using motivational, reward-based training methods. In particular, Kim loves to foster the special partnership that exists between a working dog and its handler, and specializes in training search-and-rescue dogs. Kim and her dogs have earned many search-and-rescue certifications as well as obedience and agility titles.</p>
        </div>
        <div className="col d-flex align-items-center">
          <Image src={Kim} alt="" className="img-fluid" width={500} />
        </div>
      </div>
    </div>
  </section>
);
