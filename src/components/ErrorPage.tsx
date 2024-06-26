import Image from 'next/image';
import { ReactElement } from 'react';

import DoGInBedWithStick from '../images/backgrounds/dog-in-bed-with-stick.jpg';

export const ErrorPage = (): ReactElement => (
  <section id="top" className="bg-dark">
    <Image
      src={DoGInBedWithStick}
      placeholder="blur"
      alt="dog in a dog bed, holding a stick"
      priority
      fill
      sizes="100vw"
      style={{ objectFit: 'cover', objectPosition: 'right' }}
    />
    <div className="container text-center text-shadow">
      <div className="row">
        <div className="col-12 col-lg-10 offset-lg-1">
          <h1>Whoops! Something Went Wrong</h1>
          <p className="lead">We encountered an unexpected error.</p>
          { /* eslint-disable-next-line @next/next/no-html-link-for-pages */ }
          <p>Try our <a href="/" className="link-primary">homepage</a> or <a href="/blog/sniffin-around-blog" className="link-primary">blog</a> instead.</p>
        </div>
      </div>
    </div>
  </section>
);
