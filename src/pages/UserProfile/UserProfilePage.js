import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { IonPage, IonContent } from '@ionic/react';

import NavBar from '../../navigation/NavBar';
import ActivityStatItem from './components/ActivityStatItem';
import UserFollowerInfo from './components/UserFollowerInfo';

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

const ProfileImage = styled('img')`
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
  const [profilePhoto, setProfilePhoto] = useState('');
  const [totalContributions, setTotalContributions] = useState('');
  const [followers, setFollowers] = useState([]);
  const [followedUsers, setFollowedUsers] = useState([]);

  useEffect(() => {
    async function getTasks() {
      try {
        const result = await axios.get('http://localhost:4000/tasks');
        setTasks(result.data);
      } catch (err) {
        console.log(err);
      }
    }

    async function getUserInfo() {
      try {
        const response = await axios.get(
          'http://localhost:4000/profileSettings'
        );
        setBio(response.data.bio);
        setProfilePhoto(response.data.profilePhoto);
      } catch (err) {
        console.log(err);
      }
    }

    async function getTotalContributions() {
      try {
        const response = await axios.get(
          'http://localhost:4000/retrieveUserTaskCount'
        );
        setTotalContributions(response.data.sum);
      } catch (err) {
        console.log(err);
      }
    }

    async function getFollowerInfo() {
      try {
        const response = await axios.get(
          'http://localhost:4000/retrieveFollowers'
        );
        setFollowers(response.data);
      } catch (err) {
        console.log(err);
      }
    }

    async function getFollowedUsers() {
      try {
        const response = await axios.get(
          'http://localhost:4000/retrieveFollowedUsers'
        );
        setFollowedUsers(response.data);
      } catch (err) {
        console.log(err);
      }
    }

    getUserInfo();
    getTotalContributions();
    getFollowerInfo();
    getFollowedUsers();
    getTasks();
  }, []);

  return (
    <IonPage>
      <NavBar />
      <IonContent>
        <Container data-testid={dataTestIds.UserProfilePage}>
          <ProfileInfoContainer>
            <ProfileImage src={profilePhoto} height="200" width="200" />
            <UserInfoContainer>
              <FollowerInfoContainer>
                <UserFollowerInfo
                  infoType="Total Contributions"
                  data={totalContributions}
                />
                <UserFollowerInfo
                  infoType="Followers"
                  data={followers.length.toString()}
                />
                <UserFollowerInfo
                  infoType="Following"
                  data={followedUsers.length.toString()}
                />
              </FollowerInfoContainer>
              <UserBio>{bio}</UserBio>
            </UserInfoContainer>
          </ProfileInfoContainer>
          <StatsContainer>
            {tasks.map((task) => (
              <ActivityStatItem
                key={task.id}
                taskName={task.name}
                count={task.userTask.count}
              />
            ))}
          </StatsContainer>
        </Container>
      </IonContent>
    </IonPage>
  );
}

export default UserProfilePage;
