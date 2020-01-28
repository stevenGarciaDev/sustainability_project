import React from 'react';
import styled from 'styled-components';
import { IonPage, IonContent } from '@ionic/react';

import NavBar from '../navigation/NavBar';

export const dataTestIds = {
  UserProfilePage: 'UserProfilePage',
};

const Container = styled('div')`
  background-color: light-grey;
  min-height: 100vh;
  display: flex;
`;

function UserProfilePage() {
  return (
    <IonPage>
      <NavBar />
      <IonContent>
        <Container data-testid={dataTestIds.UserProfilePage}>
          <p>My Profile</p>
        </Container>
      </IonContent>
    </IonPage>
  );
}

export default UserProfilePage;
