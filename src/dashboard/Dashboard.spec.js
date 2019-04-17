// Test away
import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import banana from 'react-test-renderer'; // 1: install this npm module as a dev dependency

import Dashboard from './Dashboard';

describe('<Dashboard />', () => {
  it.skip('matches snapshot', () => {
    const tree = banana.create(<Dashboard />);

    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('should display default setting', () => {
    const { getByText, queryByText } = render(<Dashboard />);
    getByText(/unlocked/i);
    getByText(/open/i);

  })
})
