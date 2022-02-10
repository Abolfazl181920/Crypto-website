import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from './App';
import Faq from 'Components/Faq/Faq';
import Contact from 'Components/Contact/Contact';

import './Styles/App.css';

ReactDOM.render(
  <BrowserRouter>
    <App />
      <Routes>
        <Route path="/" element={ <App /> } exact />
        <Route path="/faq" element={ <Faq /> } />
        <Route path="/contact" element={ <Contact /> } />
      </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);