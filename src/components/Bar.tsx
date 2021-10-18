import { ReactElement, useEffect, useRef, useState } from 'react';
import { useOnScreen } from '../hooks/useOnScreen';

type Props = {
  variant: 'primary' | 'secondary' | 'dark' | 'light';
};

export const Bar = ({ variant }: Props): ReactElement => {
  const ref = useRef(null);
  const onScreen = useOnScreen(ref);
  const [ onScreenOnce, setOnScreenOnce ] = useState(false);
  useEffect(() => {
    if (onScreen) {
      setOnScreenOnce(true);
    }
  }, [ onScreen ]);

  const className = `bar ${onScreenOnce ? 'expanded' : 'collapsed'} bg-${variant}`;

  return <hr ref={ref} className={className} />;
};
