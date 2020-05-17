import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled('div')`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #ccc;
  padding: 15px;
  width: 600px;
  height: 70px;

  @media (max-width: 600px) {
    width: 90%;
    margin: 0 auto;
  }
`;

const FollowButton = styled('button')`
  color: white;
  font-size: 20px;
  padding: 10px;
  background-color: green;
  height: 40px;
  border-radius: 5px;
`;

const UnfollowButton = styled('button')`
  color: white;
  font-size: 20px;
  padding: 10px;
  background-color: #354b59;
  height: 40px;
  border-radius: 5px;
`;

const UserInfo = styled('div')`
  display: flex;
`;

const UserPhotoIcon = styled('img')`
  border-radius: 50%;
  height: 50px;
  width: 50px;
  margin-right: 15px;
  position: relative;
  top: 5px;
`;

const UserNameDisplay = styled('h1')`
  position: relative;
  top: -7px;

  @media (max-width: 800px) {
    font-size: 20px;
  }
`;

const UserConnectItem = (props) => {
  const { user } = props;
  return (
    <Container>
      <UserInfo>
        <UserPhotoIcon src={user.profilePhoto} />
        <UserNameDisplay>{user.username}</UserNameDisplay>
      </UserInfo>
      {props.isFollowing ? (
        <UnfollowButton onClick={() => props.onUnfollow(user.id)}>
          Unfollow
        </UnfollowButton>
      ) : (
        <FollowButton onClick={() => props.onFollow(user.id)}>
          Follow
        </FollowButton>
      )}
    </Container>
  );
};

UserConnectItem.defaultProps = {
  isFollowing: false,
};

UserConnectItem.propTypes = {
  isFollowing: PropTypes.bool,
  onFollow: PropTypes.func.isRequired,
  onUnfollow: PropTypes.func.isRequired,
  user: PropTypes.shape({
    id: PropTypes.number,
    profilePhoto: PropTypes.string,
    username: PropTypes.string,
  }),
};

export default UserConnectItem;
