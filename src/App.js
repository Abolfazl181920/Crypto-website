import React from 'react';

import Header from 'Components/Header/Header';
import Anim from 'Components/Header/Anim';
import Nav from 'Components/Navigation/Nav';
import Content from 'Components/Content/Content';
import ScanPointer from 'Components/Content/ScanPointer';
import Methods from 'Components/Methods/Methods';
import Footer from 'Components/Footer/Footer';

const App = () => {
	return (
		<div className="App">
			<Header />
			<Anim />
			<Nav />
			<Content />
			<ScanPointer />
			<Methods />
			<Footer />
		</div>
	);
}

export default App;