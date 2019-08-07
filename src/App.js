import React from 'react';
import { Route } from 'react-router-dom'

import { GlobalStyle } from './styles';

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
<<<<<<< HEAD
		</BrowserRouter>
=======
		</Layout>
>>>>>>> cb74554b9e060ac5cbb03ca5664eda2c74d19d3c
	</>
);

export default App;
