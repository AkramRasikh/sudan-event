import React from 'react';
import { Route } from 'react-router-dom'

import { GlobalStyle } from './styles';

import Layout from './Components/Layout';
import Home from './Pages/Home';
import Events from './Pages/Events';
import About from './Pages/About';
import EventGallery from './Pages/EventGallery';
import ProjectGallery from './Pages/ProjectGallery';
import Contact from './Pages/Contact';
import Projects from './Pages/Projects';


const App = () => (
	<>
		<GlobalStyle />
		<Layout>
			<Route path="/" exact component={About} />
			<Route path="/events" exact component={Events} />
			<Route path="/about-us" exact component={About} />
			<Route path="/contact" exact component={Contact} />
			<Route path="/projects" exact component={Projects} />
			<Route path="/eventGallery" exact component={EventGallery} />
			<Route path="/projectGallery" exact component={ProjectGallery} />
		</Layout>
	</>
);

export default App;
