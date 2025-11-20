import { notFound } from 'next/navigation';
import type { VideoObject, WithContext } from 'schema-dts';

import { getVideo } from '..';
import type { GenerateMetadata, PageComponent } from '@/app/serverComponent';

interface Props {
  slug: string;
}

export const generateMetadata: GenerateMetadata<Props> = async ({ params }) => {
  const p = await params;
  const video = getVideo(p.slug);

  if (!video) {
    return notFound();
  }

  return {
    title: video.title,
    description: video.description,
    alternates: { canonical: video.player_loc },
  };
};

const VideoPlayerPage: PageComponent<Props> = async ({ params }) => {
  const p = await params;
  const video = getVideo(p.slug);

  if (!video) {
    return notFound();
  }

  const videoSchema: WithContext<VideoObject> = {
    '@context': 'https://schema.org',
    '@id': `#${video.slug}`,
    '@type': 'VideoObject',
    'name': video.title,
    'description': video.description,
    'thumbnailUrl': video.thumbnail_loc,
    'uploadDate': typeof video.publication_date === 'string' ? video.publication_date : video.publication_date.toISOString(),
    'duration': ISODuration(video.duration),
    'contentUrl': video.content_loc,
    'embedUrl': video.player_loc,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(videoSchema) }} />
      <section className="bg-light py-4">
        <div className="container">
          <div className="ratio ratio-16x9">
            <video src={video.content_loc} poster={video.thumbnail_loc} controls preload="metadata" />
          </div>
        </div>
      </section>
    </>
  );
};

export default VideoPlayerPage;

const ISODuration = (totalSeconds: number): string => {
  const seconds = Math.floor(totalSeconds % 60);
  const minutes = Math.floor((totalSeconds / 60) % 60);
  const hours = Math.floor(totalSeconds / 3600);

  return `PT${hours}H${minutes}M${seconds}S`;
};
