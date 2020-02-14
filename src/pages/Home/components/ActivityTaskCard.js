import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

export const dataTestIds = {
  TITLE: 'TITLE',
  COUNT: 'COUNT',
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
  color: #474F5B;
`;

const SubTitle = styled('p')`
  color: #929AA2;
`;

const Icon = styled('i')`
  font-size: 40px;
  &:hover {
    color: green;
    cursor: pointer;
  }
`;

const ActivityTaskCard = ({ task, onClick }) => {
  const { title, count = 0, hasCompleted = false } = task;
  
  return (
    <Container>
      <Title>{title}</Title>
      <SubTitle>People Completed Today: {count}</SubTitle>
      <Icon 
        className={hasCompleted ? 'fas fa-check-square' : 'far fa-square'}
        onClick={(e) => onClick(task.id)}
       />
    </Container>
  );
}

ActivityTaskCard.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    count: PropTypes.number.isRequired,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ActivityTaskCard;