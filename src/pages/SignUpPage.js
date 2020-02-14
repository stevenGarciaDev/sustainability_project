import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { IonPage, IonContent, IonButton, IonRouterLink } from '@ionic/react';

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

const ErrorText = styled('p')`
  display: inline-block;
  margin: 15px;
  color: red;
`;

const SignUpPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const {
        data: { token },
      } = await axios.post('http://localhost:4000/signup', {
        username: email,
        password,
      });
      if (!token) {
        // eslint-disable-next-line no-throw-literal
        throw 'Can not create account';
      } else {
        sessionStorage.setItem('token', `Bearer ${token}`);
        window.location = `${routes.HomePage}`;
      }
    } catch (err) {
      console.log(err);
      setError(err);
      setTimeout(() => {
        setError(null);
      }, 4000);
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
              name="email"
              type="email"
              value={email}
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              name="password"
              type="password"
              value={password}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <Input
              name="confirmPassword"
              type="password"
              value={confirmPassword}
              placeholder="Confirm Password"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <IonButton type="submit">Create Account</IonButton>
          </Form>
          <div>
            <Subtext>Already have an account?</Subtext>
            <IonRouterLink href={routes.LoginPage}>Login</IonRouterLink>
            <ErrorText>{error ? 'Unable to signup' : null}</ErrorText>
          </div>
        </Container>
      </IonContent>
    </IonPage>
  );
};

export default SignUpPage;
