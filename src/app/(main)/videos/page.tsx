import type { Metadata } from 'next';
import Link from 'next/link';

import { siteVideos } from '@/app/videos';
import type { PageComponent } from '@/serverComponent';

export const metadata: Metadata = {
  title: 'Videos',
  description: 'A list of QC Pet Studies\' videos',
  alternates: { canonical: '/videos' },
};

const VideosIndexPage: PageComponent = () => {
  return (
    <section>
      <div className="container">
        <h1 className="mb-3">Videos</h1>
        {siteVideos.map(s => <p key={s.slug}><Link href={s.player_loc}>{s.title}</Link></p>)}
      </div>
    </section>
  );
};

export default VideosIndexPage;
