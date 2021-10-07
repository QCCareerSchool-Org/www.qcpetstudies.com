import { ReactElement } from 'react';

type Props = {
  src: any; // eslint-disable-line @typescript-eslint/no-explicit-any
  alt: string;
};

const Image = ({ src, alt }: Props): ReactElement => {
  // eslint-disable-next-line @next/next/no-img-element
  return <img src={src} alt={alt} />;
};

export default Image;
