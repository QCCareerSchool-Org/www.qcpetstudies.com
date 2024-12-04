import type { FC } from 'react';

export const CertificationSection: FC = () => (
  <section>
    <div className="container text-center">
      <div className="row justify-content-center">
        <div className="col-12 col-lg-8 mb-4">
          <div className="ratio ratio-16x9">
            <video controls preload="metadata" poster="https://89b45d42c17e11dd3d57-62a1fc0bf60a98e1d5e980348a7de3b7.ssl.cf1.rackcdn.com/dog-training-trailer-poster.png">
              <source src="https://89b45d42c17e11dd3d57-62a1fc0bf60a98e1d5e980348a7de3b7.ssl.cf1.rackcdn.com/dog-training-trailer.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
        <div className="col-12 col-lg-10">
          <h2>Become a <strong>Certified Dog Trainer</strong></h2>
          <p className="lead"><strong>International Dog Training Professional&trade;</strong> | <i>IDTP&trade;</i></p>
          <p>Dog training is a booming industry! Owners need help to turn their dogs into well-behaved members of the family, and they want someone qualified to help them achieve this goal.  Whether you want to work in a training school, launch your own dog training business, or freelance as a private dog trainer, you'll graduate with all the knowledge and skills you need to succeed in the dog training industry!</p>
          <p className="lead mb-0">Are you ready to start an amazing career?</p>
        </div>
      </div>
    </div>
  </section>
);
