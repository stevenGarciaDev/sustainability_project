import React from 'react';
import { render } from '@testing-library/react';
import { IonReactRouter } from '@ionic/react-router';
import SignUpPage, { dataTestIds } from '../SignUpPage';

describe('<SignUpPage />', () => {
  let getByTestId;
  beforeEach(() => {
    ({ getByTestId } = render(
      <IonReactRouter>
        <SignUpPage />
      </IonReactRouter>
    ));
  });

  it('renders', () => {
    expect(getByTestId(dataTestIds.SignUpPage)).toBeTruthy();
  });
});
