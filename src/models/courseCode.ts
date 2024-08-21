export type CourseCode = 'dg' | 'dt';

export const isCourseCode = (obj: unknown): obj is CourseCode => {
  return typeof obj === 'string' && [ 'dg', 'dt' ].includes(obj);
};

export const getCourseName = (courseCode: CourseCode): string => {
  switch (courseCode) {
    case 'dg':
      return 'Dog Grooming';
    case 'dt':
      return 'Dog Training';
  }
};
