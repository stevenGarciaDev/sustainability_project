import React from 'react';
import { render } from '@testing-library/react';
import HomeScreen, { dataTestIds } from '../HomeScreen';

describe('renders <HomeScreen />', () => {
  it('<HomeScreen /> renders', () => {
    const { getByTestId } = render(<HomeScreen />);
    expect(getByTestId(dataTestIds.HomeScreen)).toBeTruthy();
  });
});
