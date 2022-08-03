declare module '*.svg' {
  const content: import('next/dist/client/image').StaticImageData;

  export default content;
}
