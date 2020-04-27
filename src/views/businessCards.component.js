import React, { Component } from 'react';
import './home.css';
import "bootstrap/dist/css/bootstrap.min.css";

import Business from "./business.component";
import login from "./login.component";
import { buildQueries } from '@testing-library/react';

export default class Card extends Component {
	 constructor(props) {
        super(props);

      this.handleBusinessClick = this.handleBusinessClick.bind(this);
      this.state = {
        viewBusiness: 'false'
      }
    }    

    handleBusinessClick() {
    if(this.state.viewBusiness == 'false'){
      this.setState({viewBusiness: 'true'})
    }
    if(this.state.viewBusiness == 'true'){
      this.setState({viewBusiness: 'false'})
    }
  }

	render() {
    
    const viewBusiness = this.state.viewBusiness

		return (
				
			
			<div className = "section">
				<div className="businessCard_Container" onClick={this.handleBusinessClick}>
					<div className="businessCard">
						<div className="businessCardBanner">{this.props.businessName} </div>
						<div className="businessCardInfo">
		
							Business Page
					    {/*<button onClick={this.handleBusinessClick}>Business Page</button>*/}

						</div>
					</div>
				</div>
        <div>
        {viewBusiness == 'true' ? <Business businessName = {this.props.businessName} /> : ''}
        </div>
			</div>
      
			
		);
	}
}

