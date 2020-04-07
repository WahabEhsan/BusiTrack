import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './home.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route} from "react-router-dom";

import Navbar from "./navbar.component";
import businessCards from "./businessCards.component";
import login from "./login.component";
import settings from "./settings.component";
import Navbar2 from "./navbar.component2";

export default class home extends Component {
	render () {
		return (
			<Router> 
			
			<div className = "section">
			<Navbar />
	
			<br />
			 <Route path="/" component={businessCards} />
			 <Route path="/settings" component={settings} />


			

			</div>
			</Router> 
		);
	}
}