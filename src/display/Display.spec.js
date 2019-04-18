// Test away!
import React from 'react';
import Display from './Display';
import { render, fireEvent, cleanup } from 'react-testing-library';
import { toHaveClass } from 'jest-dom/extend-expect';


afterEach(cleanup);

describe('The Display component', () => {

  it('default display is unlocked and open', () => {
    const { getByText } = render(<Display />);

    getByText(/Unlocked/i);
    getByText(/Open/i);
  });

  it("displays 'Closed' if the closed prop is true and 'Open' otherwise", () => {
    const { getByText }= render(<Display closed={true}/>);

    getByText(/closed/i);
  })

  it("displayed Locked if the closed prop is true and 'Unlocked' otherwise", () => {
    const { getByText } = render(<Display locked={true}/>);

    getByText(/locked/i);
  })

  it('uses the red-led class if locked or close', () => {
    const { getByText } = render(<Display locked={true} closed={true}/>);

    expect(getByText(/closed/i)).toHaveClass('led red-led');

    expect(getByText(/locked/i)).toHaveClass('led red-led');
  })

  it('uses the red-led class for closed and green-led for unlocked', () => {
    const { getByText } = render(<Display locked={false} closed={true}/>);

    expect(getByText(/closed/i)).toHaveClass('led red-led');

    expect(getByText(/unlocked/i)).toHaveClass('led green-led');
  })

  it('uses the green-led class for open and unlocked', () => {
    const { getByText } = render(<Display locked={false} closed={false}/>);

    expect(getByText(/open/i)).toHaveClass('led green-led');

    expect(getByText(/unlocked/i)).toHaveClass('led green-led');
  })



})
