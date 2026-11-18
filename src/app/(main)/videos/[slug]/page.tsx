import { notFound } from 'next/navigation';
import type { FC } from 'react';
import type { VideoObject, WithContext } from 'schema-dts';

import { getVideo } from '..';
import { Player } from './player';
import { Transcript } from './transcript';
import type { GenerateMetadata } from '@/serverComponent';

export const generateMetadata: GenerateMetadata<{ slug: string }> = async ({ params }) => {
  const p = await params;
  const video = getVideo(p.slug);

  if (!video) {
    return notFound();
  }

  return {
    title: video.title,
    description: video.description,
    alternates: { canonical: video.player_loc },
    openGraph: {
      images: [
        { url: video.thumbnail_loc },
      ],
    },
  };
};

const VideoPlayerPage: FC<PageProps<'/videos/[slug]'>> = async ({ params }) => {
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
      <section className="bg-light pt-4">
        <div className="container">
          <h1 className="mb-3">{video.title}</h1>
          <div className="ratio ratio-16x9 mb-3">
            <Player video={video} />
          </div>
          <p className="lead mb-0">{video.description}</p>
          {video.transcript && (
            <Transcript>
              {video.transcript.map((t, i) => <p key={i}>{t}</p>)}
            </Transcript>
          )}
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
