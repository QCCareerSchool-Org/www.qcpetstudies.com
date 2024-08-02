export type CourseCode = 'i2' | 'st' | 'ms' | 'fs' | 'po' | 'ld' | 'ed' | 'cc' | 'fd' | 'ap' | 'eb' | 'vd';

export const isCourseCode = (obj: unknown): obj is CourseCode => {
  return typeof obj === 'string' && [ 'i2', 'st', 'ms', 'fs', 'po', 'ld', 'ed', 'cc', 'fd', 'ap', 'eb', 'vd' ].includes(obj);
};

export const getCourseName = (courseCode: CourseCode): string => {
  switch (courseCode) {
    case 'i2':
      return 'Interior Decorating';
    case 'st':
      return 'Home Staging';
    case 'ms':
      return 'Staging for Designers';
    case 'fs':
      return 'Feng Shui Design';
    case 'po':
      return 'Professional Organizing';
    case 'ed':
      return 'Event Decor';
    case 'ld':
      return 'Landscape Design';
    case 'cc':
      return 'Color Consultant';
    case 'fd':
      return 'Floral Design';
    case 'ap':
      return 'Aging in Place';
    case 'eb':
      return 'Accelerate Your Design Business';
    case 'vd':
      return 'Virtual Design';
  }
};
