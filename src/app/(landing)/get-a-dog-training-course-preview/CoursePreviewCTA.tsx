'use client';

import { FC } from 'react';
import { useScreenWidth } from '@/hooks/useScreenWidth';

export const CoursePreviewCTA: FC = () => {

  const screenWidth = useScreenWidth();
  const smOrGreater = screenWidth >= 576;

  return (
    <p className="text-center lead">Get Started with a{smOrGreater ? ' ' : <br />}<strong>Free Course Preview</strong></p>
  );
};
