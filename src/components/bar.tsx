'use client';

import type { FC } from 'react';
import { useEffect, useRef, useState } from 'react';

import { useOnScreen } from '@/hooks/useOnScreen';

interface Props {
  variant: 'primary' | 'secondary' | 'dark' | 'light';
  align?: 'start' | 'center' | 'end';
}

export const Bar: FC<Props> = ({ variant, align = 'center' }) => {
  const ref = useRef(null);
  const onScreen = useOnScreen(ref);
  const [ onScreenOnce, setOnScreenOnce ] = useState(false);

  useEffect(() => {
    if (onScreen) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setOnScreenOnce(true);
    }
  }, [ onScreen ]);

  const className = `bar ${onScreenOnce ? 'expanded' : 'collapsed'} bg-${variant}`;

  return (
    <>
      <hr ref={ref} className={className} />
      <style jsx>{`
        .bar {
          border: none;
          height: 0.5rem;
          width: 4rem;
          margin: 0 ${align === 'end' ? 0 : 'auto'} 1.5rem ${align === 'start' ? 0 : 'auto'};
          opacity: 1;
          transition: width 1s;
        }
        .bar.collapsed {
          width: 1rem;
        }
      `}</style>
    </>
  );
};
