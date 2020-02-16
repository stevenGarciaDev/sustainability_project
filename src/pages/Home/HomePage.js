import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { IonPage, IonContent } from '@ionic/react';
// eslint-disable-next-line import/no-extraneous-dependencies
import axios from 'axios';

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
  text-align: center;
`;

const Subtitle = styled('p')`
  font-family: 'Kalam', cursive;
  font-size: 20px;
  text-align: center;
  margin: 0px 30px;
`;

const HomePage = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    async function getTasks() {
      const result = await axios.get('http://localhost:4000/tasks', {
        headers: { 
          Authorization: sessionStorage.getItem('token'),
        },
      });
      setTasks(result.data);
    }
    getTasks();
  }, []);

  // const updateTask = async (data) => {
  //   const task = await axios.put('http://localhost:4000/task', {
  //     headers: { 
  //       Authorization: sessionStorage.getItem('token'),
  //     },
  //     data,
  //   });
  //   console.log('task', task);
  // };

  const onTaskClick = async (task) => {
    //await updateTask("test");

    // complete optimistic update for faster UI changes
    console.log("task clicked was", task);
    const updatedTasks = [...tasks];
    const index = updatedTasks.indexOf(task);
    let { totalCount, hasCompleted } = updatedTasks[index];
    updatedTasks[index] = {
      ...task,
      hasCompleted: !hasCompleted,
      totalCount: hasCompleted ? --totalCount : ++totalCount,
    };
    setTasks(updatedTasks);
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
                Earn points by completing environmentally friendly activities. Use
                those points to get discounts from environmentally concious
                brands and products.
              </Subtitle>
              <Subtitle>Check off the tasks that you completed today!</Subtitle>
            </div>
          </Header>
          <TaskCardsContainer>
            {tasks.map((task) => {
              return (
                <ActivityTaskCard
                  key={task.id}
                  task={task}
                  onClick={onTaskClick}
                />
              );
            })}
          </TaskCardsContainer>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default HomePage;
