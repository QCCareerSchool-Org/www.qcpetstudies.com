import Image from 'next/image';
import Link from 'next/link';

import { PageComponent } from '@/app/serverComponent';
import DoGInBedWithStick from '@/images/backgrounds/dog-in-bed-with-stick.jpg';

const Custom404: PageComponent = () => (
  <>
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
            <h1>Whoops!</h1>
            <p className="lead">We couldn't find the page you were looking for.</p>
            <p>Try our <Link href="/" className="link-primary">homepage</Link> or <Link href="/blog/sniffin-around-blog" className="link-primary">blog</Link> instead.</p>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default Custom404;
