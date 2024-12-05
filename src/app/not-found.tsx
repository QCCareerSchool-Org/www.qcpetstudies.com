import type { Metadata } from 'next';
import Link from 'next/link';

import type { PageComponent } from './serverComponent';
import { BackgroundImage } from '@/components/backgroundImage';
import { SiteLayout } from '@/components/siteLayout';
import DoGInBedWithStick from '@/images/backgrounds/dog-in-bed-with-stick.jpg';
import { getData } from '@/lib/getData';

export const metadata: Metadata = {
  title: 'Page Not Found',
};

const NotFoundPage: PageComponent = () => {
  const date = new Date().getTime();
  const { countryCode } = getData();

  return (
    <SiteLayout date={date} countryCode={countryCode}>
      <section>
        <BackgroundImage src={DoGInBedWithStick} />
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
    </SiteLayout>
  );
};

export default NotFoundPage;
