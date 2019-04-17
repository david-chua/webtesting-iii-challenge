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
    getByText(/Close gate/i);
    getByText(/Lock gate/i);

  })

  it('gate cannot be closed or opened if locked', () => {
    const { getByText, queryByText } = render(<Dashboard />);

    const closeGateButton = getByText(/close gate/i);
    fireEvent.click(closeGateButton);

    const lockGateButton = getByText(/lock gate/i);
    fireEvent.click(lockGateButton);

    const openGateButton = getByText(/open gate/i);
    fireEvent.click(openGateButton);

    fireEvent.click(closeGateButton);

    expect(queryByText(/Locked/i)).toBeTruthy();
    expect(queryByText(/Closed/i)).toBeTruthy();
  })


})
