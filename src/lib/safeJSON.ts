export const safeJSON = (obj: unknown): string => {
  if (obj === undefined) {
    return '';
  }
  return JSON.stringify(obj).replace(/</gu, '\\u003c');
};
