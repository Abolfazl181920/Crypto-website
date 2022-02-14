import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from 'App';
import Faq from 'Components/Faq/Faq';
import Contact from 'Components/Contact/Contact';
import SignUp from 'Components/SignUp/SignUp';
import LogIn from 'Components/LogIn/LogIn';

const Home = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={ <App /> } exact />
                    <Route path="/faq" element={ <Faq /> } />
                    <Route path="/contact" element={ <Contact /> } />
                    <Route path="/signup" element={ <SignUp /> } />
                    <Route path="/login" element={ <LogIn /> } />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default Home;