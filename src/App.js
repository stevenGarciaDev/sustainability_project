import React from 'react';
import { ThemeProvider } from 'styled-components';
import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Route } from 'react-router';

import Menu, { contentId } from './navigation/Menu';
import HomePage from './pages/HomePage';
import SignUpPage from './pages/SignUpPage';
import ShopPage from './pages/ShopPage';
import routes from './pages/routes';
import theme from './constants/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <IonApp>
        <IonReactRouter>
          <Menu />
          <IonRouterOutlet id={contentId}>
            <Route path={routes.HomePage} exact component={HomePage} />
            <Route path={routes.SignUpPage} exact component={SignUpPage} />
            <Route path={routes.ShopPage} exact component={ShopPage} />
          </IonRouterOutlet>
        </IonReactRouter>
      </IonApp>
    </ThemeProvider>
  );
}

export default App;
