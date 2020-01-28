import React from 'react';
import styled from 'styled-components';
import { IonPage, IonContent } from '@ionic/react';

import NavBar from '../navigation/NavBar';

export const dataTestIds = {
  CheckoutPage: 'CheckoutPage',
};

const Container = styled('div')`
  background-color: light-grey;
  min-height: 100vh;
  display: flex;
`;

function CheckoutPage() {
  return (
    <IonPage>
      <NavBar />
      <IonContent>
        <Container data-testid={dataTestIds.CheckoutPage}>
          <p>This is the checkout page</p>
        </Container>
      </IonContent>
    </IonPage>
  );
}

export default CheckoutPage;
