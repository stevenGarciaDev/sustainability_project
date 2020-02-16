import React from 'react';
import styled from 'styled-components';
import { IonPage, IonContent } from '@ionic/react';

import NavBar from '../navigation/NavBar';

export const dataTestIds = {
  ConnectPage: 'ConnectPage',
};

const Container = styled('div')`
  background-color: light-grey;
  min-height: 100vh;
  display: flex;
`;

function ConnectPage() {
  return (
    <IonPage>
      <NavBar />
      <IonContent>
        <Container data-testid={dataTestIds.ConnectPage}>
          <p>This is the Connect Page</p>
        </Container>
      </IonContent>
    </IonPage>
  );
}

export default ConnectPage;
