export type CourseCode = 'dg' | 'dt' | 'dc' | 'dd' | 'gt';

export const isCourseCode = (obj: unknown): obj is CourseCode => {
  return typeof obj === 'string' && [ 'dg', 'dt', 'dc', 'dd', 'gt' ].includes(obj);
};

export const getCourseDescription = (courseCode: CourseCode): string => {
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

export const getCourseUrl = (courseCode: CourseCode): string => {
  switch (courseCode) {
    case 'dg':
      return 'https://www.qcpetstudies.com/certification-courses/dog-grooming';
    case 'dt':
      return 'https://www.qcpetstudies.com/certification-courses/dog-training';
    case 'dc':
      return 'https://www.qcpetstudies.com/certification-courses/dog-behaviour';
    case 'dd':
      return 'https://www.qcpetstudies.com/certification-courses/dog-daycare';
    case 'gt':
      return 'https://www.qcpetstudies.com/certification-courses/grooming-technician';
  }
};
