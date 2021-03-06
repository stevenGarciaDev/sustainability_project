import React from 'react';
import {
  IonMenu,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
} from '@ionic/react';

import routes from '../pages/routes';
import NavItem from './components/NavItem';

export const menuId = 'Menu';
export const contentId = 'Main';

const Menu = () => {
  return (
    <IonMenu menuId={menuId} contentId={contentId}>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Sustainability Project</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <NavItem route={routes.HomePage} label="Home" />
          {sessionStorage.getItem('token') ? (
            <>
              <NavItem route={routes.ShopPage} label="Shop Page" />
              <NavItem route={routes.UserProfilePage} label="My Profile" />
              <NavItem route={routes.CheckoutPage} label="Checkout" />
              <NavItem route={routes.LeaderboardPage} label="Leaderboard" />
              <NavItem route={routes.ConnectPage} label="Connect" />
              <NavItem
                route={routes.ProfileSettingsPage}
                label="Profile Settings"
              />
              <NavItem route={routes.LogoutPage} label="Logout" />
            </>
          ) : (
            <>
              <NavItem route={routes.SignUpPage} label="Sign Up" />
              <NavItem route={routes.LoginPage} label="Login" />
            </>
          )}
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
