'use client';

import { ReactElement, useEffect, useRef, useState } from 'react';
import { FaVideo } from 'react-icons/fa';
import { useCountUp } from 'react-use-count-up';

import { useOnScreen } from '@/hooks/useOnScreen';

const formatter = (value: number): string => `${value.toFixed(0)}+`;

export const MinutesCounter = (): ReactElement => {
  const ref = useRef(null);
  const visible = useOnScreen(ref);
  const [ started, setStarted ] = useState(false);
  const value = useCountUp({ start: 0, end: 900, duration: 2000, started, formatter });

  useEffect(() => {
    if (visible) {
      setStarted(true);
    }
  }, [ visible ]);

  return (
    <>
      <div className="h1 text-primary"><FaVideo /></div>
      <div className="h6"><div className="h1 font-family-open-sans"><div ref={ref}>{value}</div></div>Minutes of Instructional Video</div>
    </>
  );
};
