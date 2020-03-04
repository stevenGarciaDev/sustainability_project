import React from 'react';
import styled from 'styled-components';
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

const StatsContainer = styled('div')`
  background-color: #F2F4F9;
  padding: 30px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;


function UserProfilePage() {
  return (
    <IonPage>
      <NavBar />
      <IonContent>
        <Container data-testid={dataTestIds.UserProfilePage}>
          <ProfileInfoContainer>
            <ProfileImage />
            <UserFollowerInfo infoType='Total Contributions' data='12' />
            <UserFollowerInfo infoType='Followers' data='12' />
            <UserFollowerInfo infoType='Following' data='12' />
            <FollowingButton />
          </ProfileInfoContainer>
          <StatsContainer>
            <ActivityStatItem taskName='Recycle' count={24} />
            <ActivityStatItem taskName='Recycle' count={24} />
            <ActivityStatItem taskName='Recycle' count={24} />
            <ActivityStatItem taskName='Recycle' count={24} />
            <ActivityStatItem taskName='Recycle' count={24} />
            <ActivityStatItem taskName='Recycle' count={24} />
            <ActivityStatItem taskName='Recycle' count={24} />
            <ActivityStatItem taskName='Recycle' count={24} />
          </StatsContainer>
        </Container>
      </IonContent>
    </IonPage>
  );
}

export default UserProfilePage;
