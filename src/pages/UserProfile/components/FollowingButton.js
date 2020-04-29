import React from 'react';
import styled from 'styled-components';

const Button = styled('button')`
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 18px;
  padding: 12px;
  color: white;
  background-color: #337ab7;
`;

const FollowingButton = () => {
  return (
    <div>
      <Button>Follow</Button>
    </div>
  );
};

export default FollowingButton;
