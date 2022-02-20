import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';

import Home from 'Home';
import 'i18n';

import './Styles/App.css';

ReactDOM.render(
  <Suspense fallback={<div> Loading... </div>}>
    <Home />
  </Suspense>,
  document.getElementById('root')
);