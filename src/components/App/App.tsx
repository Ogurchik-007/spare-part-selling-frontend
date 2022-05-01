import React from 'react';

import Header from '../ui/Header';
import Main from '../routes/Main'

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Main/>
    </div>

  );
}

export default App;
