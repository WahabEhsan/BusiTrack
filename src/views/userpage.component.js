import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './home.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route} from "react-router-dom";

import Navbar from "./navbar.component.js";
import businessCards from "./businessCards.component";
import business from "./business.component";
import settings from "./settings.component.js";

export default class home extends Component {
    constructor(props) {
      super(props);
	}

	

	render () {
		return (
			<Router> 
			
			<div className = "section">
			<Navbar />
			
	
			<br />
			<switch>
			<Route path="/user" exact component={businessCards} />
			 <Route path="/settings" component={settings} />
			  <Route path="/user/business1" exact component={business} />
			  </switch>

			</div>
			</Router> 
		);
	}
}