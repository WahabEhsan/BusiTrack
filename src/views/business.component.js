import React from 'react';
import ReactDOM from 'react-dom';
import { Link, Switch } from 'react-router-dom';
import { BrowserRouter as Router, Route} from "react-router-dom";


import businessMain from "./businessPages/businessMain.component";
import businessFunds from "./businessPages/businessFunds.component";
import businessEmployees from "./businessPages/businessEmployees.component";

class business extends React.Component {
	render() {
		return <div class = "panel"> 
		<Router>
				<div id="main">
					<Link to="/user/main" className="nav-link">Main</Link>
				</div>
			
				<div id="stuffnthings">
					<Link to="/user/funds" className="nav-link">Manage Funds</Link>
				</div>

				<div id="stuffnthings">
					<Link to="/user/options" className="nav-link">Manage Options</Link>
			</div>
		
		<hr />
		 <Switch>
			<Route path="/user/main" component={businessMain} />
			<Route path="/user/funds" component={businessFunds} />
			<Route path="/user/options" component={businessEmployees} />
		</Switch>
		</Router>
		</div >

		
	};
}

export default business;