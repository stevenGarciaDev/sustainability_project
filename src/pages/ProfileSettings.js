import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import {
  IonPage,
  IonContent,
  IonItem,
  IonButton,
  IonInput,
  IonLabel,
} from '@ionic/react';

import NavBar from '../navigation/NavBar';

export const dataTestIds = {
  ProfileSettings: 'ProfileSettings',
};

const Container = styled('div')`
  background-color: light-grey;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  margin: 20px;
`;

const Title = styled('h1')`
  text-align: center;
  margin-bottom: 20px;
`;

const Label = styled('label')`
	font-family: 'Luckiest Guy', cursive;
	font-size: 20px;
	margin: 20px;
`;

const Textarea = styled('textarea')`
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 100%;
  height: 80px;
  padding: 15px;

  &:focus {
    outline: none;
  }
`;

function ProfileSettings() {
  const [bio, setBio] = useState('');

  useEffect(() => {
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
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`bio is ${bio}`);

    try {
      const response = axios.put(
        'http://localhost:4000/updateProfileSettings',
        {
          bio,
        }
      );
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <IonPage>
      <NavBar />
      <IonContent>
        <Container data-testid={dataTestIds.ProfileSettings}>
          <Title>Modify your Profile Settings 😁</Title>

					<Label>Update your bio</Label>
          <IonItem>
            <Textarea
              placeholder="Add your bio here"
              defaultValue={bio}
              onChange={(e) => setBio(e.target.value)}
            />
          </IonItem>

					<Label>Update your Profile Picture</Label>
          <IonItem>
            <IonInput type="file" accept="image/png, image/jpeg"></IonInput>
          </IonItem>

          <IonButton onClick={(e) => handleSubmit(e)}>Save Changes</IonButton>
        </Container>
      </IonContent>
    </IonPage>
  );
}

export default ProfileSettings;
