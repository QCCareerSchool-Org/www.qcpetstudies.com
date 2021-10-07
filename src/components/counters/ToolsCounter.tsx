import { ReactElement, useEffect, useRef, useState } from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import { useCountUp } from 'react-use-count-up';

import { useOnScreen } from '../../hooks/useOnScreen';

export const ToolsCounter = (): ReactElement => {
  const ref = useRef(null);
  const visible = useOnScreen(ref);
  const [ started, setStarted ] = useState(false);
  const value = useCountUp({ start: 0, end: 22, duration: 2000, started });

  useEffect(() => {
    if (visible) {
      setStarted(true);
    }
  }, [ visible ]);

  return (
    <>
      <div className="h1 text-primary"><FaCheckCircle /></div>
      <div className="h6"><div className="h1 font-family-open-sans"><div ref={ref}>{value}</div></div>Professional Grooming Tools</div>
    </>
  );
};
