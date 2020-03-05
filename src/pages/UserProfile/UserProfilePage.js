import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { IonPage, IonContent } from '@ionic/react';

import NavBar from '../../navigation/NavBar';
import ActivityStatItem from './components/ActivityStatItem';
import UserFollowerInfo from './components/UserFollowerInfo';
import FollowingButton from './components/FollowingButton';

export const dataTestIds = {
  UserProfilePage: 'UserProfilePage',
};

const Container = styled('div')`
  background-color: light-grey;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const ProfileInfoContainer = styled('div')`
  margin: 50px;
  display: flex;
  flex-direction: row;
  @media screen and (max-width: 1000px) {
    flex-direction: column;
    text-align: center;
  }
`;

const ProfileImage = styled('div')`
  border: 1px solid #ccc;
  border-radius: 50%;
  width: 200px;
  height: 200px;
  margin: 0;
  @media screen and (max-width: 1000px) {
    margin: 0 auto;
  }
`;

const UserInfoContainer = styled('div')`
  display: column;
`;

const FollowerInfoContainer = styled('div')`
  display: flex;
  flex-direction: row;
  @media screen and (max-width: 1000px) {
    flex-direction: column;
  }
`;

const StatsContainer = styled('div')`
  background-color: #f2f4f9;
  padding: 30px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const UserBio = styled('div')`
  margin: 10px 30px;
`;

function UserProfilePage() {
  const [tasks, setTasks] = useState([]);
  const [bio, setBio] = useState([]);

  const [error, setError] = useState(null);
 
  useEffect(() => {
    async function getTasks() {
      try {
        const result = await axios.get('http://localhost:4000/tasks');
        console.log("result", result);
        setTasks(result.data);
      } catch (err) {
        setError(err?.response?.data?.message || err.message);
      }
    }

    async function getUserInfo() {
      try {
        const response = await axios.get(
          'http://localhost:4000/profileSettings'
        );
        console.log(`result is `, response);
        setBio(response.data.bio);
      } catch (err) {
        console.log(err);
      }
    }
    getUserInfo();
    getTasks();
  }, []);

  return (
    <IonPage>
      <NavBar />
      <IonContent>
        <Container data-testid={dataTestIds.UserProfilePage}>
          <ProfileInfoContainer>
            <ProfileImage />
            <UserInfoContainer>
              <FollowerInfoContainer>
                <UserFollowerInfo infoType="Total Contributions" data="12" />
                <UserFollowerInfo infoType="Followers" data="12" />
                <UserFollowerInfo infoType="Following" data="12" />
                <FollowingButton />
              </FollowerInfoContainer>
              <UserBio>{bio}</UserBio>
            </UserInfoContainer>
          </ProfileInfoContainer>
          <StatsContainer>
            {tasks.map(task => (
              <ActivityStatItem 
                key={task.id} 
                taskName={task.name} 
                count={task.userTask.count} />
            ))}
          </StatsContainer>
        </Container>
      </IonContent>
    </IonPage>
  );
}

export default UserProfilePage;
