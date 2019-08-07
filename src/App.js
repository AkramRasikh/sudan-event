import React from 'react';
import { GlobalStyle } from './styles';

import { Route } from 'react-router-dom'

import Layout from './Components/Layout';
import Home from './Pages/Home';
import Events from './Pages/Events';
import AboutUs from './Pages/AboutUs';


const App = () => (
	<>
		<GlobalStyle />
		<Layout>
			<Route path="/" exact component={Home} />
			<Route path="/events" exact component={Events} />
			<Route path="/about-us" exact component={AboutUs} />
		</Layout>
	</>
);

export default App;
