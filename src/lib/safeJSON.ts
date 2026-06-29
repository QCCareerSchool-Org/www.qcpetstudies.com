export const safeJSON = (obj: unknown): string => {
  if (obj === undefined) {
    return 'undefined';
  }
  return JSON.stringify(obj).replace(/</gu, '\\u003c');
};
