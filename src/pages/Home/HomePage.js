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

const HomePage = () => {
  const data = [
    {
      id: 'task1',
      title: 'Test1',
      count: 3000,
    },
    {
      id: 'task2',
      title: 'Testjynhhy1',
      count: 12121,
    },
  ];

  const onTaskClick = (task) => {
    console.log(task);
  };
  return (
    <IonPage>
      <NavBar />
      <IonContent>
        <Container data-testid={dataTestIds.HomePage}>
          <p>This is the home page</p>
          {data.map((task) => {
            return <TaskCard key={task.id} task={task} onClick={onTaskClick} />;
          })}
        </Container>
      </IonContent>
    </IonPage>
  );
};

export default HomePage;
