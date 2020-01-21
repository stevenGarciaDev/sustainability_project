import React from 'react';
import { render } from '@testing-library/react';
import App, { dataTestIds } from '../App';

describe('renders <App />', () => {
  it('<App /> renders', () => {
    const { getByTestId } = render(<App />);
    expect(getByTestId(dataTestIds.APP)).toBeTruthy();
  });
});
