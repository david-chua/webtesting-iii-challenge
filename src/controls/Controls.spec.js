// Test away!
import React from 'react';
import Controls from './Controls';
import { render, fireEvent, cleanup } from 'react-testing-library';
afterEach(cleanup);

describe('The Controls component', () => {
  it('default should you cannot lock the gate since it is still open', () =>{
    const { getByText, queryByText } = render(<Controls />);

    const lockButton = getByText(/lock gate/i);
    fireEvent.click(lockButton);

    getByText(/lock gate/i)
    getByText(/close gate/i);

  })
})
