import React from 'react';
import styled from 'styled-components';
import { IonPage, IonContent } from '@ionic/react';

import NavBar from '../navigation/NavBar';

export const dataTestIds = {
  ShopPage: 'ShopPage',
};

const Container = styled('div')`
  background-color: light-grey;
  min-height: 100vh;
  display: flex;
`;

function ShopPage() {
  return (
    <IonPage>
      <NavBar />
      <IonContent>
        <Container data-testid={dataTestIds.ShopPage}>
          <p>This is the Shopping Page</p>
        </Container>
      </IonContent>
    </IonPage>
  );
}

export default ShopPage;
