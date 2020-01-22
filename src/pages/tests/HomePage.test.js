import React from 'react';
import { render } from '@testing-library/react';
import { IonReactRouter } from '@ionic/react-router';
import HomePage, { dataTestIds } from '../HomePage';

describe('renders <HomePage />', () => {
  it('<HomePage /> renders', () => {
    const { getByTestId } = render(
      <IonReactRouter>
        <HomePage />
      </IonReactRouter>
    );
    expect(getByTestId(dataTestIds.HomePage)).toBeTruthy();
  });
});
