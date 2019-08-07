import React from 'react';
import { GlobalStyle } from './styles';

import { BrowserRouter, Route, NavLink } from 'react-router-dom';
import Home from './Pages/Home';
import Events from './Pages/Events';
import AboutUs from './Pages/AboutUs';

const App = () => (
	<>
		<GlobalStyle />
		<BrowserRouter>
			<Route path="/" exact component={Home} />
			<Route path="/events" exact component={Events} />
			<Route path="/about-us" component={AboutUs} />

			<NavLink
				to='/'
				// activeClassName={classes.active}
				exact>Home
    		</NavLink>
			<NavLink
				to='/events'
				// activeClassName={classes.active}
				exact>events
    		</NavLink>
			<NavLink
				to='/about-us'
				// activeClassName={classes.active}
				exact>about us
    		</NavLink>
		</BrowserRouter>
	</>
);

export default App;
