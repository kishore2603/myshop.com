import React from "react";
import "./App.css";
import Home from "./pages/home";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AllOrders from "./pages/AllOrders/index";
import Nav from "./components/Nav";
import Order from "./Order/index";

function App() {
	return (
		<Router>
			<Nav />
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
				<Route exact path="/all-orders">
					<AllOrders />
				</Route>
				<Route exact path="/order/:orderId">
					<Order />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
