import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './home.css';

export default class home extends Component {
	render () {
		return (
			<div className = "section">
				<div className="businessCard_Container">
					<div className="businessCard" onclick="window.location.href='business.html';" >
						<div className="businessCardBanner"> </div>
						<div className="businessCardInfo"> Business yeah! </div>
					</div>
				</div>

				<div className="businessCard_Container">
					<div className="businessCard" onclick="window.location.href='business.html';" >
						<div className="businessCardBanner"> </div>
						<div className="businessCardInfo"> Business yeah! </div>
					</div>
				</div>
			</div>
		);
	}
}