import React from 'react';
import { render } from '@testing-library/react';
import { IonReactRouter } from '@ionic/react-router';

import NavItem, { dataTestIds } from '../NavItem';
import routes from '../../../pages/routes';

describe('<NavItem />', () => {
  let getByTestId;

  beforeEach(() => {
    ({ getByTestId } = render(
      <IonReactRouter>
        <NavItem route={routes.HomePage} label="Home" />
      </IonReactRouter>
    ));
  });
  it('renders', () => {
    expect(getByTestId(dataTestIds.LINK)).toBeTruthy();
  });

  it('has the correct href', () => {
    expect(getByTestId(dataTestIds.LINK).href).toBe(routes.HomePage);
  });
});
