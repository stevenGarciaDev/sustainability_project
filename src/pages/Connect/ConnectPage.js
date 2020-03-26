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

  useEffect(() => {
    async function getUsers() {
      try {
        const response = await axios.get(
          'http://localhost:4000/allUsers'
        );
        setUsers(response.data);
        setFilteredUsers(response.data);
      } catch (err) {
        console.log(err);
      }
    }

    getUsers();
  }, []);

  function performFilter(event) {
    let regex = new RegExp(`${event.target.value.toLowerCase()}`, 'g');
    const usersToDisplay = users.filter(u => u.username.toLowerCase().match(regex));
    setFilteredUsers(usersToDisplay);
  }

  return (
    <IonPage>
      <NavBar />
      <IonContent>
        <Container data-testid={dataTestIds.ConnectPage}>
          <DisplayContent>
            <FilterInput
              placeholder='Search for a user...'
              onChange={(e) => performFilter(e)}/>
            {filteredUsers.map(user =>
              <UserConnectItem key={user.username} user={user} />
             )}
          </DisplayContent>
        </Container>
      </IonContent>
    </IonPage>
  );
}

export default ConnectPage;
