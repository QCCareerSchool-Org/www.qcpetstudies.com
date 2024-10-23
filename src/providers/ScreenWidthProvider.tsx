import React, { FC, ReactNode, useEffect, useState } from 'react';

export const ScreenWidthContext = React.createContext<number | undefined>(undefined);

type Props = {
  children: ReactNode;
};

export const ScreenWidthProvider: FC<Props> = ({ children }) => {
  const [ state, dispatch ] = useState(0);

  useEffect(() => {
    dispatch(window.innerWidth);
    const handleResize = (): void => dispatch(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <ScreenWidthContext.Provider value={state}>
      {children}
    </ScreenWidthContext.Provider>
  );
};
