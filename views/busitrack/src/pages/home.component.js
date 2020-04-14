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
import register from "./register.component";
import userpage from "./userpage.component";

export default class home extends Component {
	render () {
		return (
			<Router> 
			
			<div className = "section">
			<Navbar2 />
	
			<br />

			 <Route path="/settings" component={settings} />

				  <Route path="/user" exact component={userpage} />

			

			</div>
			</Router> 
		);
	}
}