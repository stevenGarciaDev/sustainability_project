import React from 'react';
import { render, act, fireEvent } from '@testing-library/react';
import TaskCard, { dataTestIds } from './TaskCard';

describe('<TaskCard />', () => {
  let getByTestId;
  const task = {
    id: 'task1',
    title: 'a title',
    count: 10,
  };
  const onClick = jest.fn();
  beforeEach(() => {
    ({ getByTestId } = render(<TaskCard task={task} onClick={onClick} />));
  });

  it('renders the title', () => {
    expect(getByTestId(dataTestIds.TITLE)).toBeTruthy();
  });

  it('renders the count', () => {
    expect(getByTestId(dataTestIds.COUNT)).toBeTruthy();
  });

  it('calls onClick with the correct data when the checkbox is clicked', () => {
    act(() => {
      fireEvent.click(getByTestId(dataTestIds.CHECKBOX));
    });
    expect(onClick).toBeCalledTimes(1);
    expect(onClick).toBeCalledWith(task);
  });
});
