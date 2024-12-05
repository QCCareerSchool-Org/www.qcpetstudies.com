'use client';

import type { FC } from 'react';
import { useMemo } from 'react';

import styles from './unitStats.module.scss';
import { useScreenWidth } from '@/hooks/useScreenWidth';

type Props = {
  readings: string;
  videos?: string;
  assignments: string;
};

const shorten = (t: string): string => {
  return t.replace(/hours/gu, 'hrs.')
    .replace(/hour/gu, 'hr.')
    .replace(/minutes/gu, 'mins.')
    .replace(/minute/gu, 'min.');
};

export const UnitStats: FC<Props> = ({ readings, videos, assignments }) => {
  const screenWidth = useScreenWidth();
  const [ r, v, a ] = useMemo(() => {
    return screenWidth >= 768
      ? [ readings, videos, assignments ]
      : [ shorten(readings), typeof videos === 'undefined' ? undefined : shorten(videos), shorten(assignments) ];
  }, [ screenWidth, readings, videos, assignments ]);

  return (
    <div className="row justify-content-center text-center mb-3">
      <div className={`${styles.customCol} ${styles.customMarginBottom}`}>
        <h4 className="fw-bold mb-1">Readings</h4>{r}
      </div>
      {!!videos && (
        <div className={`${styles.customCol} ${styles.customMarginBottom}`}>
          <h4 className="fw-bold mb-1">Videos</h4>{v}
        </div>
      )}
      <div className={styles.customCol}>
        <h4 className="fw-bold mb-1">Assigments</h4>{a}
      </div>
    </div>
  );
};
