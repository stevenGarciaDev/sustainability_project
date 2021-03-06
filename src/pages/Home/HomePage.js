import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import { IonPage, IonContent, IonToast } from '@ionic/react';
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

  const [error, setError] = useState(null);

  useEffect(() => {
    async function getTasks() {
      try {
        const result = await axios.get('/tasks/user');
        setTasks(result.data);
      } catch (err) {
        setError(err?.response?.data?.message || err.message);
      }
    }
    getTasks();
  }, []);

  const onTaskClick = async (task) => {
    try {
      const updatedTasks = [...tasks];
      const index = updatedTasks.indexOf(task);
      const { totalCount, userTask } = updatedTasks[index];
      updatedTasks[index] = {
        ...task,
        totalCount: totalCount + 1,
        userTask: {
          count: userTask?.count + 1 || 1,
          updatedAt: new Date().toISOString(),
        },
      };
      setTasks(updatedTasks);
      await axios.put('/task', {
        taskId: task.id,
      });
    } catch (err) {
      setError(err?.response?.data?.message || err.message);
      setTasks(tasks);
    }
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
                Earn points by completing environmentally friendly activities.
                Use those points to get discounts from environmentally concious
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
        <IonToast
          duration={2000}
          isOpen={error !== null}
          onDidDismiss={() => setError(null)}
          message={error}
          color="danger"
        />
      </IonContent>
    </IonPage>
  );
};

export default HomePage;
