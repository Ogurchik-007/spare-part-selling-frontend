import React from 'react';

import Header from '../ui/Header';
import Main from '../routes/Main';
import Carousel from '../ui/Carousel/Carousel';
import { diskonts } from '../ui/Carousel/carouselItems';

const App: React.FC = () => (
  <div className="App">
    <Header />
    <Main />
    <Carousel diskonts={diskonts} />
  </div>

);

export default App;
