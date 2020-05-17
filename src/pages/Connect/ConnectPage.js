import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { IonPage, IonContent } from '@ionic/react';
import UserConnectItem from './component/UserConnectItem';

import NavBar from '../../navigation/NavBar';

export const dataTestIds = {
  ConnectPage: 'ConnectPage',
};

const Container = styled('div')`
  background-color: light-grey;
  min-height: 100vh;
  display: flex;
`;

const FilterInput = styled('input')`
  width: 600px;
  height: 50px;
  border: none;
  border-bottom: 1px solid #ccc;
  margin: 15px;
  padding: 10px;
  position: relative;
  left: -10px;

  &:focus {
    outline: none;
  }

  @media (max-width: 600px) {
    width: 500px;
  }
`;

const DisplayContent = styled('div')`
  margin: 0 auto;
`;

function ConnectPage() {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [followedUsers, setFollowedUsers] = useState([]);

  async function getUsers() {
    try {
      const response = await axios.get('http://localhost:4000/allUsers');
      setUsers(response.data);
      setFilteredUsers(response.data);
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

  useEffect(() => {
    getUsers();
    getFollowedUsers();
  }, []);

  async function handleFollow(id) {
    // id for current user to follow (the user being clicked on)
    try {
      const response = await axios.post('http://localhost:4000/followUser', {
        user_to_follow_id: id,
      });
      setFollowedUsers([...followedUsers, response.data]);

      getFollowedUsers();
    } catch (err) {
      console.log(err);
    }
  }

  async function handleUnfollow(id) {
    // id for the user to unfollow
    try {
      // send post request
      await axios.post('http://localhost:4000/unfollowUser', {
        user_followed_id: id,
      });
      let updatedFollowedUsers = [...followedUsers];
      updatedFollowedUsers = updatedFollowedUsers.filter(
        (u) => u.user_followed_id !== id
      );
      setFollowedUsers(updatedFollowedUsers);

      getFollowedUsers();
    } catch (err) {
      console.log(err);
    }
  }

  function isFollowing(user) {
    const result = followedUsers.findIndex((u) => u.userFollowedId === user.id);
    return result !== -1;
  }

  function performFilter(event) {
    const regex = new RegExp(`${event.target.value.toLowerCase()}`, 'g');
    const usersToDisplay = users.filter((u) =>
      u.username.toLowerCase().match(regex)
    );
    setFilteredUsers(usersToDisplay);
  }

  return (
    <IonPage>
      <NavBar />
      <IonContent>
        <Container data-testid={dataTestIds.ConnectPage}>
          <DisplayContent>
            <FilterInput
              placeholder="Search for a user..."
              onChange={(e) => performFilter(e)}
            />
            {filteredUsers.map((user) => (
              <UserConnectItem
                key={user.username}
                user={user}
                onFollow={handleFollow}
                onUnfollow={handleUnfollow}
                isFollowing={isFollowing(user)}
              />
            ))}
          </DisplayContent>
        </Container>
      </IonContent>
    </IonPage>
  );
}

export default ConnectPage;
