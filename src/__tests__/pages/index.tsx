/**
 * @jest-environment jsdom
 */

import { render } from '@testing-library/react';
import { axe } from 'jest-axe';
import React from 'react';

import Page from '../../pages/index';

jest.mock('../../hooks/useLocation');

describe('/', () => {

  it('shouldn\'t have any usability violations', async () => {
    const { container } = render(<Page />);
    const result = await axe(container);
    expect(result).toHaveNoViolations();
  }, 20000);
});
