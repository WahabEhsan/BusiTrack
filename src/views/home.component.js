import React, { Component } from 'react';
import './home.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route} from "react-router-dom";

import userpage from "./userpage.component";

export default class home extends Component {
	render () {
		return (
			<Router> 
			
			<div className = "section">
			<p style={{fontSize: 50}} > Welcome to BusiTrack! </p>
			{/*<Navbar2 />*/}
	
			<br />

		
			<Route path="/user" exact component={userpage} />

			

			</div>
			</Router> 
		);
	}
}