import React from 'react';
import styled from 'styled-components';
import { IonHeader, IonToolbar, IonMenuButton, IonButtons } from '@ionic/react';

import { menuId } from './Menu';
import routes from '../pages/routes';
import NavItem from './components/NavItem';

const smallWidth = '768px';

const SmallScreenNav = styled(IonButtons)`
  display: none;
  @media (max-width: ${smallWidth}) {
    display: flex;
  }
`;

const LargeScreenNav = styled(IonButtons)`
  @media (max-width: ${smallWidth}) {
    display: none;
  }
`;

const NavBar = () => {
  return (
    <IonHeader>
      <IonToolbar>
        <SmallScreenNav>
          <IonMenuButton menuId={menuId} />
        </SmallScreenNav>
        <LargeScreenNav side="start">
          <NavItem route={routes.HomePage} label="Home" />
          <NavItem route={routes.SignUpPage} label="Sign up" />
          <NavItem route={routes.LoginPage} label="Login" />
          <NavItem route={routes.ShopPage} label="Shop" />
          <NavItem route={routes.UserProfilePage} label="My Profile" />
          <NavItem route={routes.CheckoutPage} label="Checkout" />
          <NavItem route={routes.LeaderboardPage} label="Leaderboard" />
          <NavItem route={routes.ConnectPage} label="Connect" />
        </LargeScreenNav>
      </IonToolbar>
    </IonHeader>
  );
};

export default NavBar;
