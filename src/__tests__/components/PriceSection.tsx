/**
 * @jest-environment jsdom
 */

import { invalidCourse } from '../../components/PriceSection';

jest.mock('../../hooks/useLocation');

describe('PriceSection component', () => {

  describe('invalidCourse', () => {

    it('should return true if the courses are [ \'dg\' ] and the location is Ontario', () => {
      expect(invalidCourse([ 'dg' ], 'CA', 'ON')).toBe(true);
    });

    it('should return true if the courses contain \'dg\' and the location is Ontario', () => {
      expect(invalidCourse([ 'aa', 'dg', 'bb' ], 'CA', 'ON')).toBe(true);
    });
  });
});
