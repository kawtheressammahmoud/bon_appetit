import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../components/Home";
import Recipe from "../components/Recipe/Recipe";


export default (
	<Router>
		<Switch>
			<Route path="/" exact component={Home} />
			<Route path="/recipes/:id" exact component={Recipe} />
		</Switch>
	</Router>
);
