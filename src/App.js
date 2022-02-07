import React from 'react';

import Header from 'Components/Header/Header';
import Nav from 'Components/Navigation/Nav';
import Content from 'Components/Content/Content';
import ScanPointer from 'Components/Content/ScanPointer';
import Methods from 'Components/Methods/Methods';


const App = () => {
  return (
    <div>
      <Header />
      <Nav />
      <Content />
      <ScanPointer />
      <Methods />
    </div>
  );
}

export default App;