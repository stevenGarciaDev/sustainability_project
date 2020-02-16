import React from 'react';
import styled from 'styled-components';
import { IonPage, IonContent } from '@ionic/react';

import NavBar from '../navigation/NavBar';

export const dataTestIds = {
  LeaderboardPage: 'LeaderboardPage',
};

const Container = styled('div')`
  background-color: light-grey;
  min-height: 100vh;
  display: flex;
`;

function LeaderboardPage() {
  return (
    <IonPage>
      <NavBar />
      <IonContent>
        <Container data-testid={dataTestIds.LeaderboardPage}>
          <p>This is the leaderboard page</p>
        </Container>
      </IonContent>
    </IonPage>
  );
}

export default LeaderboardPage;
