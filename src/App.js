import React from 'react';
import styled from 'styled-components';

export const dataTestIds = {
  APP: 'APP',
};

const Container = styled('div')`
  background-color: light-grey;
  min-height: 100vh;
  display: flex;
`;

function App() {
  return (
    <Container data-testid={dataTestIds.APP}>
      <p>test</p>
    </Container>
  );
}

export default App;
