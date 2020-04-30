import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { IonPage, IonContent, IonSegment, IonToast } from '@ionic/react';
import axios from 'axios';

import NavBar from '../../navigation/NavBar';
import LeaderboardTab from './components/LeaderboardTab';
import LeaderboardList from './components/LeaderboardList';

export const dataTestIds = {
  LeaderboardPage: 'LeaderboardPage',
};

export const TASKS_URL = '/tasks';
export const TASK_LEADERBOARD_URL = '/task/leaderboard';

const Container = styled('div')`
  background-color: light-grey;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Segment = styled(IonSegment)`
  overflow: auto;

  display: block;
`;

function LeaderboardPage() {
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState(null);
  const [selectedTask, setSelectedTask] = useState(null);
  const [selectedTaskLeaderboard, setSelectedTaskLeaderboard] = useState([]);

  const getTasks = async () => {
    try {
      const res = await axios.get(TASKS_URL);
      setTasks(res.data);
    } catch (err) {
      console.log(err);
      if (!err.response) {
        setError("Couldn't connect to server");
      } else {
        setError("Couldn't get tasks");
      }
    }
  };

  const getSelectedTaskLeaderboard = async () => {
    if (selectedTask) {
      try {
        const res = await axios.get(TASK_LEADERBOARD_URL, {
          params: {
            taskId: selectedTask.id,
          },
        });
        setSelectedTaskLeaderboard(res.data);
      } catch (err) {
        console.log(err);
        if (!err.response) {
          setError("Couldn't connect to server");
        } else {
          setError(`Couldn't get the leaderboard for ${selectedTask.name}`);
        }
      }
    }
  };

  useEffect(() => {
    getTasks();
  }, []);

  useEffect(() => {
    getSelectedTaskLeaderboard();
  }, [selectedTask]);

  const onTabSelect = (e) => {
    const { value } = e.detail;
    setSelectedTask(value);
    setError(null);
  };

  return (
    <IonPage>
      <NavBar />
      <IonContent>
        <Container data-testid={dataTestIds.LeaderboardPage}>
          <Segment onIonChange={onTabSelect}>
            {tasks.map((task) => (
              <LeaderboardTab key={task.id} value={task} name={task.name} />
            ))}
          </Segment>
          {selectedTask && (
            <LeaderboardList
              selectedTaskLeaderboard={selectedTaskLeaderboard}
            />
          )}
          {error && (
            <IonToast
              duration={2000}
              isOpen={error !== null}
              onDidDismiss={() => setError(null)}
              message={error}
              color="danger"
            />
          )}
        </Container>
      </IonContent>
    </IonPage>
  );
}

export default LeaderboardPage;
