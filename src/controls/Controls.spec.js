// Test away!
import React from 'react';
import Controls from './Controls';
import * as dashboard from '../dashboard/Dashboard';
import { render, fireEvent, cleanup } from 'react-testing-library';
import { toBeDisabled, toBeInTheDocument } from 'jest-dom/extend-expect';
afterEach(cleanup);

describe('The Controls component', () => {

  it('provide buttons to toggle the closed and locked states', () => {

    const { getByText } = render(<Controls locked={false} closed={false}/> );

    const lockButton = getByText(/lock gate/i);
    const closeButton = getByText(/close gate/i);


    expect(lockButton).toBeInTheDocument();
    expect(closeButton).toBeInTheDocument();
  })

  it("shows lock gate and close gate when passed no props", () => {
      const { getByText } = render(<Controls />)
      getByText(/lock gate/i)
      getByText(/close gate/i)
    })

    it("displays unlock gate if the locked prop is true", () => {
      const { getByText } = render(<Controls locked />)
      getByText(/unlock gate/i)
    })

    it("displays lock gate if the locked prop is false", () => {
      const { getByText } = render(<Controls locked={false} />)
      getByText(/lock gate/i)
    })

    it("displays open gate if the closed prop is true", () => {
      const { getByText } = render(<Controls closed />)
      getByText(/open gate/i)
    })

  it("should fire toggledClosed when close button is clicked from default", () => {
    const mock = jest.fn();
    const { queryByText } = render(<Controls toggleClosed={mock} />);
    const closeButton = queryByText(/Close Gate/i);
    fireEvent.click(closeButton);
    expect(mock).toHaveBeenCalled();


  })

  it('By default should you cannot lock the gate if it is still open', () =>{
    const { getByText, queryByText } = render(<Controls locked={false} closed={false} />);

    expect(getByText(/Lock gate/i)).toBeDisabled(/Lock gate/i);
  });

  it("should expect open gate to be disabled if it's locked and closed", () => {

        const { getByText }  = render(<Controls locked={true} closed={true}/>)

        expect(getByText(/Open Gate/i)).toBeDisabled(/Open Gate/i);

    })

})
