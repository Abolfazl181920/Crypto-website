import React from 'react';

import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

import Header from 'Components/Header/Header';
import Nav from 'Components/Navigation/Nav';
import Content from 'Components/Content/Content';
import ScanPointer from 'Components/Content/ScanPointer';
import Methods from 'Components/Methods/Methods';
import Footer from 'Components/Footer/Footer';

import Faq from 'Components/Faq/Faq';
import Contact from 'Components/Contact/Contact';

const App = () => {
	return (
		<div className="App">
			<Router>
				<Header />
				<Nav />
				<Content />
				<ScanPointer />
				<Methods />
				<Footer />
				<Routes>
					<Route path="/faq" element={ <Faq /> } />
					<Route path="/contact" element={ <Contact /> } />
				</Routes>
			</Router>
		</div>
	);
}

export default App;