export type CourseCode = 'dg' | 'dt' | 'dc' | 'dd' | 'gt';

export const isCourseCode = (obj: unknown): obj is CourseCode => {
  return typeof obj === 'string' && [ 'dg', 'dt', 'dc', 'dd', 'gt' ].includes(obj);
};

export const getCourseName = (courseCode: CourseCode): string => {
  switch (courseCode) {
    case 'dg':
      return 'Dog Grooming';
    case 'dt':
      return 'Dog Training';
    case 'dc':
      return 'Dog Behaviour';
    case 'dd':
      return 'Dog Daycare';
    case 'gt':
      return 'Grooming Technician';
  }
};
