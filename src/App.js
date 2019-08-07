import React from 'react';
import { Route } from 'react-router-dom'

import { GlobalStyle } from './styles';

import Layout from './Components/Layout';
import Home from './Pages/Home';
import Events from './Pages/Events';
import AboutUs from './Pages/AboutUs';
import Gallery from './Pages/Gallery'


const App = () => (
	<>
		<GlobalStyle />
		<Layout>
			<Route path="/" exact component={Home} />
			<Route path="/events" exact component={Events} />
			<Route path="/about-us" exact component={AboutUs} />
			<Route path="/gallery" exact component={Gallery} />
		</Layout>
	</>
);

export default App;
