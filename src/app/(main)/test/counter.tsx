/**
 * Create a React component named Counter that takes to optional number props,
 * `initialCount` and `increment`. The component should display a number and
 * two buttons.
 *
 * The number displayed should be the current count, initially the value of
 * `initialCount`, or `0` if `initialCount` is undefined.
 *
 * The first button should increment the current count by `increment`, or `1`
 * if `increment` is undefined.
 *
 * The second button should reset the current count back to `initialCount`, or
 * `0` if initialCount is undefined.
 *
 * For this test the layout isn't being judged.
*/

'use client';

import type { FC, MouseEventHandler } from 'react';
import { useState } from 'react';

interface Props {
  initialCount?: number;
  increment?: number;
}

export const Counter: FC<Props> = ({ initialCount = 0, increment = 1 }) => {
  const [ count, setCount ] = useState(initialCount);

  const handleIncrement: MouseEventHandler = () => {
    setCount(c => c + increment);
  };

  const handleReset: MouseEventHandler = () => {
    setCount(initialCount);
  };

  return (
    <div>
      <div>Count: {count}</div>
      <button onClick={handleIncrement}>Increment by {increment}</button>
      <button onClick={handleReset}>Reset to {initialCount}</button>
    </div>
  );
};
