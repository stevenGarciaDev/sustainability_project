/* eslint-disable no-param-reassign */
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Route } from 'react-router';
import axios from 'axios';

import Menu, { contentId } from './navigation/Menu';
import HomePage from './pages/Home/HomePage';
import SignUpPage from './pages/SignUpPage';
import ShopPage from './pages/ShopPage';
import UserProfilePage from './pages/UserProfile/UserProfilePage';
import CheckoutPage from './pages/CheckoutPage';
import LeaderboardPage from './pages/LeaderboardPage/LeaderboardPage';
import LoginPage from './pages/LoginPage';
import ConnectPage from './pages/Connect/ConnectPage';
import ProfileSettingsPage from './pages/ProfileSettings';
import LogoutPage from './pages/LogoutPage';

import routes from './pages/routes';
import theme from './constants/theme';

function App() {
  axios.defaults.baseURL = 'http://localhost:4000';
  axios.interceptors.request.use(
    async function(config) {
      try {
        const token = await sessionStorage.getItem('token');
        config.headers.Authorization = token;
      } catch (error) {
        console.log(error);
      }
      return config;
    },
    function(error) {
      return Promise.reject(error);
    }
  );
  return (
    <ThemeProvider theme={theme}>
      <IonApp>
        <IonReactRouter>
          <Menu />
          <IonRouterOutlet id={contentId}>
            <Route path={routes.HomePage} exact component={HomePage} />
            <Route path={routes.SignUpPage} exact component={SignUpPage} />
            <Route path={routes.ShopPage} exact component={ShopPage} />
            <Route
              path={routes.UserProfilePage}
              exact
              component={UserProfilePage}
            />
            <Route path={routes.CheckoutPage} exact component={CheckoutPage} />
            <Route
              path={routes.LeaderboardPage}
              exact
              component={LeaderboardPage}
            />
            <Route path={routes.LoginPage} exact component={LoginPage} />
            <Route path={routes.ConnectPage} exact component={ConnectPage} />
            <Route
              path={routes.ProfileSettingsPage}
              exact
              component={ProfileSettingsPage}
            />
            <Route path={routes.LogoutPage} exact component={LogoutPage} />
          </IonRouterOutlet>
        </IonReactRouter>
      </IonApp>
    </ThemeProvider>
  );
}

export default App;
