import type { Video } from '@/videos';
import { siteVideos } from '@/videos';

export const getVideo = (slug: string): Video | undefined => {
  return siteVideos.find(v => v.slug === slug);
};
