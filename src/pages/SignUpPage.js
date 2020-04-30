import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import {
  IonPage,
  IonContent,
  IonButton,
  IonRouterLink,
  IonToast,
} from '@ionic/react';

import NavBar from '../navigation/NavBar';
import routes from './routes';

export const dataTestIds = {
  SignUpPage: 'SignUpPage',
};

const smallWidthBreakpoint = '600px';

const Container = styled('div')`
  align-items: center;
  background-color: light-grey;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 30px;
`;

const Headline = styled('h1')`
  text-align: center;

  @media (max-width: ${smallWidthBreakpoint}) {
    font-size: 21px;
  }
`;

const Form = styled('form')`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Input = styled('input')`
  border: none;
  border-bottom: 1px solid #ccc;
  margin: 15px;
  padding: 10px;
  width: 400px;

  &:focus {
    outline: none;
  }
`;

const Subtext = styled('p')`
  display: inline-block;
  margin: 15px;
`;

const SignUpPage = () => {
  const [username, setUsername] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (confirmPassword !== password) {
      setError('Passwords must match');
      return;
    }
    if (password.length < 8) {
      setError('Minimum password length: 8');
    }

    try {
      const {
        data: { token },
      } = await axios.post('/signup', {
        username,
        password,
        firstName,
        lastName,
      });
      if (!token) {
        // eslint-disable-next-line no-throw-literal
        throw 'Can not create account';
      } else {
        sessionStorage.setItem('token', `Bearer ${token}`);
        window.location = `${routes.HomePage}`;
      }
    } catch (err) {
      setError(err?.response?.data?.message || err.message);
    }
  };

  return (
    <IonPage>
      <NavBar />
      <IonContent>
        <Container data-testid={dataTestIds.SignUpPage}>
          <Headline>Sign up and join the eco-friendly community.</Headline>
          <Form onSubmit={(e) => handleSubmit(e)}>
            <Input
              name="username"
              value={username}
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <Input
              name="firstName"
              value={firstName}
              placeholder="First Name"
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
            <Input
              name="lastName"
              value={lastName}
              placeholder="Last Name"
              onChange={(e) => setLastName(e.target.value)}
              required
            />
            <Input
              name="password"
              type="password"
              value={password}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              minLength={8}
              required
            />
            <Input
              name="confirmPassword"
              type="password"
              value={confirmPassword}
              placeholder="Confirm Password"
              onChange={(e) => setConfirmPassword(e.target.value)}
              minLength={8}
              required
            />
            <IonButton type="submit">Create Account</IonButton>
          </Form>
          <div>
            <Subtext>Already have an account?</Subtext>
            <IonRouterLink href={routes.LoginPage}>Login</IonRouterLink>
          </div>
        </Container>
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

export default SignUpPage;
