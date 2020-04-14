import React from 'react';
import ReactDOM from 'react-dom';
import { Link, Switch } from 'react-router-dom';
import { BrowserRouter as Router, Route} from "react-router-dom";


import businessMain from "./businessPages/businessMain.component";
import businessFunds from "./businessPages/businessFunds.component";

class business extends React.Component {
	render() {
		return <div class = "panel"> 
		<Router>
				<div id="main">
					<Link to="/edit/main" className="nav-link">Main</Link>
				</div>
			
				<div id="stuffnthings">
					<Link to="/edit/funds" className="nav-link">Manage Funds</Link>
				</div>

				<div id="stuffnthings">
					<Link to="/edit" className="nav-link">Manage Options</Link>
			</div>
		
		<hr />
		 <Switch>
			<Route path="/edit/main" component={businessMain} />
			<Route path="/edit/funds" component={businessFunds} />
		</Switch>
		</Router>
		</div >

		
	};
}

export default business;