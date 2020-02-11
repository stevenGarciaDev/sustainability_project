import React from 'react';
import { render } from '@testing-library/react';
import { IonReactRouter } from '@ionic/react-router';
import HomePage, { dataTestIds } from '../Home/HomePage';

describe('<HomePage />', () => {
  let getByTestId;
  beforeEach(() => {
    ({ getByTestId } = render(
      <IonReactRouter>
        <HomePage />
      </IonReactRouter>
    ));
  });

  it('renders', () => {
    expect(getByTestId(dataTestIds.HomePage)).toBeTruthy();
  });
});
