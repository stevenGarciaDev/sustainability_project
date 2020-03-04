import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { IonCheckbox } from '@ionic/react';

export const dataTestIds = {
  NAME: 'NAME',
  TOTALCOUNT: 'TOTALCOUNT',
  CHECKBOX: 'CHECKBOX',
};

const Container = styled('div')`
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  height: 250px;
  justify-content: center;
  margin: 0 10px 30px 10px;
  padding: 0 10px 10px 10px;
  text-align: center;
  width: 300px;
  &:hover {
    border: 1px solid green;
    transform: scale(1.1);
    transition-duration: 1s;
    z-index: 1;
  }
`;

const Title = styled('h1')`
  font-style: bold;
  color: #474f5b;
`;

const SubTitle = styled('p')`
  color: #929aa2;
`;

const Checkbox = styled(IonCheckbox)`
  width: 35px;
  height: 35px;
  --background-checked: green;
  --border-color-checked: green;
`;

const ActivityTaskCard = ({ task, onClick }) => {
  const { name, totalCount = 0, userTask } = task;

  let hasCompleted = false;
  if (userTask?.updatedAt) {
    const hoursSinceLastUpdate = Math.floor(
      ((new Date() - new Date(userTask.updatedAt)) / (1000 * 60 * 60)) % 24
    );
    if (hoursSinceLastUpdate < 1) {
      hasCompleted = true;
    }
  }

  return (
    <Container>
      <Title>{name}</Title>
      <SubTitle>Your Contributions: {userTask?.count || 0}</SubTitle>
      <SubTitle>Total Contributions: {totalCount}</SubTitle>
      <Checkbox
        checked={hasCompleted}
        disabled={hasCompleted}
        onClick={() => onClick(task)}
      />
    </Container>
  );
};

ActivityTaskCard.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    totalCount: PropTypes.number.isRequired,
    hasCompleted: PropTypes.bool,
    userTask: PropTypes.shape({
      updatedAt: PropTypes.string,
      count: PropTypes.number,
    }),
  }).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ActivityTaskCard;
