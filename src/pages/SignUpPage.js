import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { IonPage, IonContent, IonButton, IonRouterLink } from '@ionic/react';

import NavBar from '../navigation/NavBar';

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
class SignUpPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: { email: '', password: '', confirmPassword: '', error: null },
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState((prevState) => {
      const updateData = { ...prevState.data };
      updateData[name] = value;
      return { data: updateData };
    });
  };

  handleSubmit = (event) => {
    axios
      .post('http://localhost:4000/signup', {
        username: this.state.data.email,
        password: this.state.data.password,
      })
      .then((data) => {
        axios.defaults.headers.common.Authorization = `Bearer ${data.token}`;
        // redirect them to the home page
      })
      .catch((error) => {
        this.setState({
          error,
        });
        setTimeout(() => {
          this.setState({
            error: null,
          });
        }, 4000);
        console.log(error);
      });

    event.preventDefault();
  };

  render() {
    const { email, password, confirmPassword } = this.state;
    return (
      <IonPage>
        <NavBar />
        <IonContent>
          <Container data-testid={dataTestIds.SignUpPage}>
            <Headline>Sign up and join the eco-friendly community.</Headline>
            <Form onSubmit={(e) => this.handleSubmit(e)}>
              <Input
                name="email"
                type="email"
                value={email}
                placeholder="Email"
                onChange={(e) => this.handleChange(e)}
              />
              <Input
                name="password"
                type="password"
                value={password}
                placeholder="Password"
                onChange={(e) => this.handleChange(e)}
              />
              <Input
                name="confirmPassword"
                type="password"
                value={confirmPassword}
                placeholder="Confirm Password"
                onChange={(e) => this.handleChange(e)}
              />
              <IonButton type="submit">Create Account</IonButton>
            </Form>
            <div>
              <Subtext>Already have an account?</Subtext>
              <IonRouterLink href="#">Login</IonRouterLink>
              <ErrorText>
                {this.state.error ? 'Unable to signup' : null}
              </ErrorText>
            </div>
          </Container>
        </IonContent>
      </IonPage>
    );
  }
}

export default SignUpPage;
