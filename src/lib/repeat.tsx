import type { ReactNode } from 'react';
import { Fragment } from 'react';

/** Repeats a ReactNode the specified number of times.
 *
 * Automatically adds `key` prop.
 * @param count The number of times to repeat the element
 * @param callback The callback function that will return the desired node. Can optionally take advantage of the array index number.
 */
export const repeat = (count: number, callback: (index: number) => ReactNode): ReactNode => {
  return Array.from({ length: count }, (_, i) => <Fragment key={i}>{callback(i)}</Fragment>);
};
