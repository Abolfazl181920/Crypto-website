import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { GlobalContext } from 'Components/Context/Context';

import App from 'App';
import Faq from 'Components/Faq/Faq';
import Contact from 'Components/Contact/Contact';
import SignUp from 'Components/SignUp/SignUp';
import LogIn from 'Components/LogIn/LogIn';
import ErrorPage from 'Components/Error/ErrorPage';
import Panel from 'Components/Panel/Panel';
import Test from 'Components/Test/Test';

const Home = () => {
    return (
        <div>
            <BrowserRouter>
                <GlobalContext.Provider value="This is some value for testing">
                    <Routes>
                        <Route path="/" element={ <App /> } exact />
                        <Route path="/faq" element={ <Faq /> } />
                        <Route path="/contact" element={ <Contact /> } />
                        <Route path="/signup" element={ <SignUp /> } />
                        <Route path="/login" element={ <LogIn /> } />
                        <Route path="/panel" element={ <Panel /> } />
                        <Route path="/test" element={ <Test /> } />
                        <Route path="*" element={ <ErrorPage /> } />
                    </Routes>
                </GlobalContext.Provider>
            </BrowserRouter>
        </div>
    );
}

export default Home;