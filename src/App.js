import React from 'react';

import Header from 'Components/Header/Header';
import Nav from 'Components/Navigation/Nav';
import Content from 'Components/Content/Content';
import ScanPointer from 'Components/Content/ScanPointer';


const App = () => {
  return (
    <div>
      <Header />
      <Nav />
      <Content />
      <ScanPointer />
    </div>
  );
}

export default App;