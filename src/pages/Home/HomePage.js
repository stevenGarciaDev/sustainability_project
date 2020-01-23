import React from 'react';
import styled from 'styled-components';
import { IonPage, IonContent } from '@ionic/react';

import NavBar from '../../navigation/NavBar';
import TaskCard from './components/TaskCard';

export const dataTestIds = {
  HomePage: 'HomePage',
};

const Container = styled('div')`
  background-color: light-grey;
  min-height: 100vh;
  display: flex;
`;

function HomePage() {
  const data = [
    {
      title: 'Test1',
      count: 3000,
    },
    {
      title: 'Testjynhhy1',
      count: 12121,
    },
  ];
  return (
    <IonPage>
      <NavBar />
      <IonContent>
        <Container data-testid={dataTestIds.HomePage}>
          <p>This is the home page</p>
          {data.map(({ title, count }) => {
            return <TaskCard key={title} title={title} count={count} />;
          })}
        </Container>
      </IonContent>
    </IonPage>
  );
}

export default HomePage;
