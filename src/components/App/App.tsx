import React from 'react';

import Header from '../ui/Header';
import Main from '../routes/Main';

const lol = () => {
  const a = 1;

  return a;
};

const App: React.FC = () => (
  <div className="App">
    <Header />
    <Main />
  </div>

);

export default App;
