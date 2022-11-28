/**
 * @jest-environment jsdom
 */

import { render } from '@testing-library/react';
import { axe } from 'jest-axe';
import React from 'react';

import { SearchBox } from './SearchBox';

jest.mock('next/router');

describe('SearchBox', () => {

  it('shouldn\'t have any usability violations', async () => {
    const options = [
      { id: 'foo', text: 'Foo', url: 'https://example.com/foo' },
      { id: 'bar', text: 'Bar', url: 'https://example.com/bar' },
    ];
    const { container } = render(<SearchBox label="Foo" options={options} name="test" />);
    const result = await axe(container);
    expect(result).toHaveNoViolations();
  }, 20000);
});
