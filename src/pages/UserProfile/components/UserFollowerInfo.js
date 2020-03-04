import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const UserInfoContainer = styled('div')`
  margin: 10px 20px 20px 20px;
`;

const InfoType = styled('h2')`
  color: black;
  display: inline-block;
  font-family: 'Luckiest Guy', cursive;
  font-size: 22px;
  margin: 0px;
  padding: 0px 10px;
`;

const InfoData = styled('span')`
  color: gray;
  font-size: 20px;
`;

const UserFollowerInfo = (props) => {
  return (
    <UserInfoContainer>
      <InfoType>{props.infoType}</InfoType>
      <InfoData>{props.data}</InfoData>
    </UserInfoContainer>
  );
};

UserFollowerInfo.propTypes = {
  infoType: PropTypes.string.isRequired,
  data: PropTypes.string.isRequired,
};

export default UserFollowerInfo;
