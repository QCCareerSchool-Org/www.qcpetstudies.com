'use client';

import type { FC } from 'react';
import { useEffect, useRef } from 'react';

import type { Video } from '@/videos';

interface Props {
  video: Video;
}

export const Player: FC<Props> = ({ video }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    const v = videoRef.current;
    if (!v) { return; }

    v.play().catch(() => {
      // Autoplay blocked. Leave the video paused.
    });
  }, []);

  return (
    <video ref={videoRef} src={video.content_loc} poster={video.thumbnail_loc} controls preload="metadata">
      {video.vtt && <track kind="captions" src={video.vtt} srcLang="en" label="English" />}
    </video>
  );
};
