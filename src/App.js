import React from 'react';
import { GlobalStyle } from './styles';

import { BrowserRouter, Route } from 'react-router-dom';
import Navbar from './Components/NavBar';
import Home from './Pages/Home';
import Events from './Pages/Events';
import AboutUs from './Pages/AboutUs';


const App = () => (
	<>
		<GlobalStyle />
		<BrowserRouter>
			<Navbar />
			<Route path="/" exact component={Home} />
			<Route path="/events" exact component={Events} />
			<Route path="/about-us" exact component={AboutUs} />
		</BrowserRouter>
	</>
);

export default App;
