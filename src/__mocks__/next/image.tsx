import { ReactElement } from 'react';

type Props = {
  src: any;
  alt: string;
};

const Image = ({ src, alt }: Props): ReactElement => {
  // eslint-disable-next-line @next/next/no-img-element, @typescript-eslint/no-unsafe-assignment
  return <img src={src} alt={alt} />;
};

export default Image;
