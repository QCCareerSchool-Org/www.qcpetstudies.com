export const safeJSON = (obj: unknown): string => JSON.stringify(obj).replace(/</gu, '\\u003c');
