import React, { ReactElement, ReactNode, useEffect, useState } from 'react';

export const ScrollPositionContext = React.createContext<number>(0);

type Props = {
  children: ReactNode;
};

export const ScrollPositionProvider = ({ children }: Props): ReactElement => {
  const [ state, dispatch ] = useState(0);

  useEffect(() => {
    dispatch(window.pageYOffset);
    const handleScroll = (): void => dispatch(window.pageYOffset);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <ScrollPositionContext.Provider value={state}>
      {children}
    </ScrollPositionContext.Provider>
  );
};
