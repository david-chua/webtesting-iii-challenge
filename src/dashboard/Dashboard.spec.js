// Test away
import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import banana from 'react-test-renderer'; // 1: install this npm module as a dev dependency

import Dashboard from './Dashboard';

describe('<Dashboard />', () => {
  it('matches snapshot', () => {
    const tree = banana.create(<Dashboard />);

    expect(tree.toJSON()).toMatchSnapshot();
  });
  
})
