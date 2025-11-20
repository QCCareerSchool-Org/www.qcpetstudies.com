import type { Video } from '@/app/videos';
import { siteVideos } from '@/app/videos';

export const getVideo = (slug: string): Video | undefined => {
  return siteVideos.find(v => v.slug === slug);
};
