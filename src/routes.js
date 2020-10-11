import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
} from 'react-router-dom'

const Routes = () => {
	return (
		<Router>
			<Route exact path="/">
			</Route>

			<Route path="/">
				<Redirect to="/"/>
			</Route>
		</Router>
	);
}

export default Routes;
