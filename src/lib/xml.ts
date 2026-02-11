const stripInvalidXmlChars = (unsafe: string): string => {
  // eslint-disable-next-line no-control-regex
  return unsafe.replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/gu, '');
};

export const escapeXmlString = (unsafe: string): string => {
  return stripInvalidXmlChars(unsafe).replace(/[<>&'"]/gu, match => {
    switch (match) {
      case '<': return '&lt;';
      case '>': return '&gt;';
      case '&': return '&amp;';
      case '"': return '&quot;';
      case "'": return '&apos;';
    }
    throw Error('Unmatched symbol');
  });
};

export const escapeXmlObject = <T extends object>(video: T): T => {
  for (const key in video) {
    if (Object.hasOwn(video, key)) {
      if (typeof video[key] === 'string') {
        (video[key] as string) = escapeXmlString(video[key]);
      }
    }
  }
  return video;
};
