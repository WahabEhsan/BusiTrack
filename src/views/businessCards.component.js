import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './home.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route} from "react-router-dom";
import axios from 'axios';

import business from "./business.component";
import login from "./login.component";

export default class Card extends Component {
	 constructor(props) {
        super(props);

		this.handleBusinessClick = this.handleBusinessClick.bind(this);
			this.handleNotBusinessClick = this.handleNotBusinessClick.bind(this);

		this.state = {
			viewBusiness: true
		}
    }    

	 handleClick(e) {
		e.preventDefault();
		 console.log('The link was clicked.');
	return <business />
   
  }
      handleNotBusinessClick() {
    this.setState({viewBusiness: false});
  }

    handleBusinessClick() {
    this.setState({viewBusiness: true});
  }

  
	render() {
		
		//function businessLink() {
			//if (!this.state.viewBusiness) {
				//this.state.viewBusiness: true;
				
			//}
		//}
		const viewBusiness = this.state.viewBusiness;

		let button;

		if (viewBusiness) {
			 button = <business onClick={this.handleNotBusinessClick} />;
		} else {
				 button = <business onClick={this.handleBusinessClick}/>;
		}

	
		 
       // let businessName = this.props.businessName
		
        //let path = this.props.title.businessName
        //let id = this.props.title.id

		return (
				
			
			<div className = "section">
			<Router> 
			<Link to="/user/business" onClick="">

			 
			
				<div className="businessCard_Container">
					<div className="businessCard">
						<div className="businessCardBanner">{this.props.businessName} </div>
						<div className="businessCardInfo">
							{/*<button onClick={businessLink}> </button>*/}
						<div className="add">  
					Temp Button to Open business Menu{button }      
			</div>

						</div>
					</div>
				</div>

				<div className='form-container'>
					 {(this.state.viewBusiness) ?
					<business />: ''}
				</div>
			</Link>
			

		  <Route path={"/user/business"} exact component={business} />

		  		    {/*<Route path={"/user/business"} render={(props) => <business {...props} name={this.props.businessName} /> */}
	


			
				</Router> 
			</div>
			
		);
	}
}

