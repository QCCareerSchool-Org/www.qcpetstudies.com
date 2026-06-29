export const safeJSON = (obj: unknown): string | undefined => {
  return (JSON.stringify(obj) as string | undefined)?.replace(/</gu, '\\u003c');
};
