import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './home.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route} from "react-router-dom";

import business from "./business.component";
import login from "./login.component";


export default class businessCard extends Component {
	render () {
		return (
			<Router> 
			
			<div className = "section">
			<Link to="/edit/:id" className="nav-link">
				<div className="businessCard_Container">
					
					<div className="businessCard">
						<div className="businessCardBanner"> </div>
						<div className="businessCardInfo"> Business 1</div>
					</div>
				</div>
			</Link>


			<Link to="/create" className="nav-link">
				<div className="businessCard_Container">
					
					<div className="businessCard">
						<div className="businessCardBanner"> </div>
						<div className="businessCardInfo"> Business 2</div>
					</div>
				</div>
			</Link>

			
			 <Route path="/edit/:id" component={business} />
	


			

			</div>
			</Router> 
		);
	}
}