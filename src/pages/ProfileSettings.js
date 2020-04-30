import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { IonPage, IonContent, IonItem, IonButton } from '@ionic/react';

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
  const [profilePhoto, setProfilePhoto] = useState('');

  useEffect(() => {
    async function getUserInfo() {
      try {
        const response = await axios.get('/profileSettings');
        console.log(`result is `, response);
        setBio(response.data.bio);
      } catch (err) {
        console.log(err);
      }
    }
    getUserInfo();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const uploadData = new FormData();
    const CLOUDINARY_URL =
      'https://api.cloudinary.com/v1_1/datstzhhh/image/upload';
    const CLOUDINARY_UPLOAD_PRESET = 'ecofriends';

    try {
      if (profilePhoto) {
        uploadData.append('file', profilePhoto);
        uploadData.append('api_key', '584547413875997');
        uploadData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);

        console.log('image file', profilePhoto);
        const response = await axios.post(
          `https://cors-anywhere.herokuapp.com/${CLOUDINARY_URL}`,
          uploadData
        );
        console.log('response.data.secure_url', response.data.secure_url);

        setProfilePhoto(response.data.secure_url);
        await axios.put('/updateProfileSettings', {
          bio,
          profile_photo: response.data.secure_url,
        });
      } else {
        await axios.put('/updateProfileSettings', {
          bio,
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (e) => {
    console.log('files', e.target.files[0]);
    setProfilePhoto(e.target.files[0]);
  };

  return (
    <IonPage>
      <NavBar />
      <IonContent>
        <Container data-testid={dataTestIds.ProfileSettings}>
          <Title>Modify your Profile Settings</Title>

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
            <input
              type="file"
              onChange={(e) => handleChange(e)}
              accept="image/png, image/jpeg"
            />
          </IonItem>

          <IonButton onClick={(e) => handleSubmit(e)}>Save Changes</IonButton>
        </Container>
      </IonContent>
    </IonPage>
  );
}

export default ProfileSettings;
