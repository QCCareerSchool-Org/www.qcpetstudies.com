declare module '*.svg' {
  // eslint-disable-next-line @typescript-eslint/consistent-type-imports
  const content: import('next/image').StaticImageData;

  export default content;
}

declare module '*.svg?icon' {
  import type { FC, SVGProps } from 'react';

  interface IconProps extends SVGProps<SVGSVGElement> {
    title?: string;
  }

  const content: FC<IconProps>;

  export default content;
}