import React from 'react';
//import ReactDOM from 'react-dom';
import { Link, Switch } from 'react-router-dom';
import { BrowserRouter as Router, Route} from "react-router-dom";


import businessMain from "./businessPages/businessMain.component";
import businessFunds from "./businessPages/businessFunds.component";
import businessEmployees from "./businessPages/businessEmployees.component";

class business extends React.Component {
	render() {
		return <div class = "panel"> 
		<Router>
				{this.props.businessName}
				<div id="main">
					<Link to="/user/business/main" className="nav-link">Main</Link>
				</div>
			
				<div id="stuffnthings">
					<Link to="/user/business/funds" className="nav-link">Manage Funds</Link>
				</div>

				<div id="stuffnthings">
					<Link to="/user/business/options" className="nav-link">Manage Options</Link>
			</div>
		
		<hr />
			<p> {this.props.name} </p>
		 <Switch>
			<Route path="/user/business/main" component={businessMain} />
			<Route path="/user/business/funds" component={businessFunds} />
			<Route path="/user/business/options" component={businessEmployees} />
		</Switch>
		</Router>
		</div >

		
	};
}

export default business;