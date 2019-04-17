// Test away!
import React from 'react';
import Display from './Display';
import { render, fireEvent } from 'react-testing-library';
import renderer from 'react-test-renderer';

describe('The Display component', () => {

  it('default display is unlocked and open', () => {
    const { getByText } = render(<Display />);

    getByText(/Unlocked/i);
    getByText(/Open/i);
  });

})
