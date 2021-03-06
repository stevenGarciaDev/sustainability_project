import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled('div')`
  border: 1px solid #ccc;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 200px;
  background-color: white;
  margin: 10px;
`;

const Title = styled('h1')`
  text-align: center;
  font-size: 20px;
`;

const ActivityStatItem = ({ taskName, count = 0 }) => (
  <Container>
    <Title>{taskName}</Title>
    <p>Number of contributions: {count}</p>
  </Container>
);

ActivityStatItem.propTypes = {
  taskName: PropTypes.string.isRequired,
  count: PropTypes.number,
};

export default ActivityStatItem;
