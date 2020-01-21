import React from 'react';
import './App.css';

export const dataTestIds = {
  APP: 'APP',
};
function App() {
  return <div className="App" data-testid={dataTestIds.APP} />;
}

export default App;
