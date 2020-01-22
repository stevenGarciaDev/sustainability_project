import React from 'react';
import styled from 'styled-components';
import { IonPage, IonContent } from '@ionic/react';

import NavBar from '../navigation/NavBar';

export const dataTestIds = {
  HomePage: 'HomePage',
};

const Container = styled('div')`
  background-color: light-grey;
  min-height: 100vh;
  display: flex;
`;

function HomePage() {
  return (
    <IonPage>
      <NavBar />
      <IonContent>
        <Container data-testid={dataTestIds.HomePage}>
          <p>This is the home page</p>
        </Container>
      </IonContent>
    </IonPage>
  );
}

export default HomePage;
