import type { FC } from 'react';
import Image from 'next/image';

import LogoInverseImage from './logo-inverse.svg';
import LogoImage from './logo.svg';

type Props = {
  height: number;
  inverse?: boolean;
};

export const Logo: FC<Props> = ({ height, inverse }) => {
  const style = { height, width: 'auto', maxWidth: '100%' };

  return (
    <>
      {inverse
        ? <Image src={LogoInverseImage} alt="QC Pet Studies" style={style} />
        : <Image src={LogoImage} alt="QC Pet Studies" style={style} />
      }
    </>
  );
};
