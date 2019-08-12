import React from 'react';
import { Route } from 'react-router-dom'

import { GlobalStyle } from './styles';

import Layout from './Components/Layout';
import Home from './Pages/Home';
import Events from './Pages/Events';
import About from './Pages/About';
import Gallery from './Pages/Gallery';
import Contact from './Pages/Contact';


const App = () => (
	<>
		<GlobalStyle />
		<Layout>
			<Route path="/" exact component={Home} />
			<Route path="/events" exact component={Events} />
			<Route path="/about-us" exact component={About} />
			<Route path="/contact" exact component={Contact} />
			<Route path="/gallery" exact component={Gallery} />
		</Layout>
	</>
);

export default App;
