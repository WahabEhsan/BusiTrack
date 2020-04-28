import React, { Component } from 'react';
import './home.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route} from "react-router-dom";

import userpage from "./userpage.component";
import Navbar from "./loginNavbar.component";
import LoginForm from "./login.component";



export default class home extends Component {
	render () {
		return (
			<Router> 
			<Navbar />
			<div className = "section">
			<p style={{fontSize: 50}} > Welcome to BusiTrack! </p>
	
			<br />

			<Route path="/login" exact component= {LoginForm} />
			<Route path="/user" exact component={userpage} />

			

			</div>
			</Router> 
		);
	}
}