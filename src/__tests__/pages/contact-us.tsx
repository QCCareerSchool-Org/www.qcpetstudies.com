/**
 * @jest-environment jsdom
 */

import { render } from '@testing-library/react';
import { axe } from 'jest-axe';
import React from 'react';

import Page from '../../app/(main)/(_default_)/contact-us/page';

jest.mock('@/hooks/useLocation');

describe('/contact-us', () => {

  it('shouldn\'t have any usability violations', async () => {
    const { container } = render(<Page params={{}} searchParams={{}} />);
    const result = await axe(container);
    expect(result).toHaveNoViolations();
  });
});
