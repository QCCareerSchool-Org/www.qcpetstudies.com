/**
 * @jest-environment jsdom
 */

import { invalidCourse } from '../../components/PriceSection';

jest.mock('../../hooks/useLocation');

describe('PriceSection component', () => {

  describe('invalidCourse', () => {

    it('should return true if the courses contain \'dg\' and the location is Ontario', () => {
      expect(invalidCourse([ 'aa', 'dg', 'bb' ], 'CA', 'ON')).toBe(true);
      expect(invalidCourse([ 'dg' ], 'CA', 'ON')).toBe(true);
    });

    it('should return false if the courses don\'t contain \'dg\' and the location is Ontario', () => {
      expect(invalidCourse([ 'aa', 'bb' ], 'CA', 'ON')).toBe(false);
    });

    it('should return false if the courses contain \'dg\' but the location is not Ontario', () => {
      expect(invalidCourse([ 'aa', 'dg', 'bb' ], 'US', 'ON')).toBe(false);
      expect(invalidCourse([ 'aa', 'dg', 'bb' ], 'CA', 'BC')).toBe(false);
    });
  });
});
