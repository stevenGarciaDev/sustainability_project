import React from 'react';
import styled from 'styled-components';
import {
  IonPage,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonContent,
} from '@ionic/react';

export const dataTestIds = {
  HomeScreen: 'HomeScreen',
};

const Container = styled('div')`
  background-color: light-grey;
  min-height: 100vh;
  display: flex;
`;

function HomeScreen() {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <Container data-testid={dataTestIds.HomeScreen}>
          <p>This is the home page</p>
        </Container>
      </IonContent>
    </IonPage>
  );
}

export default HomeScreen;
