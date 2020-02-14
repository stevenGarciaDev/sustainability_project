import React from 'react';
import styled from 'styled-components';
import { IonPage, IonContent } from '@ionic/react';

import NavBar from '../../navigation/NavBar';
import ActivityTaskCard from './components/ActivityTaskCard';

export const dataTestIds = {
  HomePage: 'HomePage',
};


const Header = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`;

const TaskCardsContainer = styled('div')`
  display: flex;
  align-items: space-around;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const Title = styled('h1')`
  font-family: 'Luckiest Guy', cursive;
  font-size: 35px;
  color: green;
`;

const Subtitle = styled('p')`
  font-family: 'Kalam', cursive;
  font-size: 20px;
`;

const HomePage = () => {
  const data = [
    {
      id: 'task1',
      title: 'Recycle',
      count: 3000,
      hasCompleted: false,
    },
    {
      id: 'task2',
      title: 'Shop EcoFriendly Alternatives',
      count: 12121,
      hasCompleted: false,
    },
    {
      id: 'task1',
      title: 'Recycle',
      count: 3000,
      hasCompleted: false,
    },
    {
      id: 'task2',
      title: 'Shop EcoFriendly Alternatives',
      count: 12121,
      hasCompleted: false,
    },
    {
      id: 'task1',
      title: 'Recycle',
      count: 3000,
      hasCompleted: false,
    },
    {
      id: 'task2',
      title: 'Shop EcoFriendly Alternatives',
      count: 12121,
      hasCompleted: false,
    },
    {
      id: 'task1',
      title: 'Recycle',
      count: 3000,
      hasCompleted: false,
    },
    {
      id: 'task2',
      title: 'Shop EcoFriendly Alternatives',
      count: 12121,
      hasCompleted: false,
    },
  ];

  const onTaskClick = (task) => {
    console.log(task);
  };
  
  return (
    <IonPage>
      <NavBar />
      <IonContent>
        <div data-testid={dataTestIds.HomePage}>
          <Header>
            <Title>EcoFriends - The Sustainability Project</Title>
            <div>
              <Subtitle>
                Earn points to complete environmentally friendly activities. Use
                those points to get discounts from environmentally concious
                brands and products.
              </Subtitle>
            </div>
          </Header>
          <TaskCardsContainer>
            {data.map((task) => {
              return (
                <ActivityTaskCard key={task.id} task={task} onClick={onTaskClick} />
              );
            })}
          </TaskCardsContainer>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default HomePage;
