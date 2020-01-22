import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import { IonItem, IonLabel } from '@ionic/react';

const Link = styled(IonItem)`
  border-bottom: ${({ isCurrentPage, theme }) =>
    isCurrentPage ? `2px solid ${theme.primary}` : 'none'};
`;

const Label = styled(IonLabel)`
  text-align: 'center';
`;

const NavItem = ({ route, label }) => {
  const { pathname } = useLocation();
  return (
    <Link isCurrentPage={route === pathname} href={route}>
      <Label>{label}</Label>
    </Link>
  );
};

NavItem.propTypes = {
  route: PropTypes.string,
  label: PropTypes.string,
};

export default NavItem;
