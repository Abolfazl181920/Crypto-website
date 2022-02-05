import React from 'react';

// import Scrollbar from 'smooth-scrollbar';
import { Scrollbar } from 'smooth-scrollbar-react';

import Header from 'Components/Header/Header';
import Nav from 'Components/Navigation/Nav';

// const options = {
//   damping: 0.07,
// }
const body = document.body;

const App = () => {

  // useEffect(() => {
  //   Scrollbar.init(document.body, options);
  // });

  return (
    <div>
      <Scrollbar style={{ position: 'absolute', zIndex: '10', top: '50%' }}
        damping={5}
        thumbMinSize={5}
        renderByPixels={true}
        alwaysShowTracks={true}
        continuousScrolling={true}
        wheelEventTarget={body}>
        your contents here...
      </Scrollbar>
      <Header />
      <Nav />
    </div>
  );
}

export default App;