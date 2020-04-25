import React from 'react';
//import ReactDOM from 'react-dom';
import { Link, Switch } from 'react-router-dom';
import { BrowserRouter as Router, Route} from "react-router-dom";


import BusinessMain from "./businessPages/businessMain.component";
import BusinessFunds from "./businessPages/businessFunds.component";
import BusinessEmployees from "./businessPages/businessEmployees.component";

class business extends React.Component {
	constructor(props) {
        super(props);

      this.handleMainClick = this.handleMainClick.bind(this);
	  this.handleFundsClick = this.handleFundsClick.bind(this);
		this.handleEmployeesClick = this.handleEmployeesClick.bind(this);

      this.state = {
        viewMain: 'false',
		viewFunds: 'false',
		viewEmployee: 'false'
      }
    }    

    handleMainClick() {
    if(this.state.viewMain == 'false'){
      this.setState({viewMain: 'true'})
    }
    if(this.state.viewMain == 'true'){
      this.setState({viewMain: 'false'})
    }
  }

      handleFundsClick() {
    if(this.state.viewFunds == 'false'){
      this.setState({viewFunds: 'true'})
    }
    if(this.state.viewFunds == 'true'){
      this.setState({viewFunds: 'false'})
    }
  }

      handleEmployeesClick() {
    if(this.state.viewEmployee == 'false'){
      this.setState({viewEmployee: 'true'})
    }
    if(this.state.viewEmployee == 'true'){
      this.setState({viewEmployee: 'false'})
    }
  }
	render() {

		    const viewMain = this.state.viewMain
			const viewFunds = this.state.viewFunds
			const viewEmployee = this.state.viewEmployee

		return <div class = "panel"> 
		{/*<Router>*/}
				{this.props.businessName}
				<div id="main">
					{/*<Link to="/user/business/main" className="nav-link">Main</Link>*/}
					<button onClick={this.handleMainClick}>Main</button>
				</div>
			
				<div id="stuffnthings">
					{/*<Link to="/user/business/funds" className="nav-link">Manage Funds</Link>*/}
					<button onClick={this.handleFundsClick}>Manage Funds</button>
				</div>

				<div id="stuffnthings">
					{/*<Link to="/user/business/options" className="nav-link">Manage Emploees</Link>*/}
					<button onClick={this.handleEmployeesClick}>Manage Emploees</button>
			</div>
		
		<hr />

		 {viewMain == 'true' ? <BusinessMain bName = {this.props.businessName} /> : ''}
		 {viewFunds == 'true' ? <BusinessFunds bName = {this.props.businessName} /> : ''}
		 {viewEmployee == 'true' ? <BusinessEmployees bName = {this.props.businessName} /> : ''}

		 {/*<Switch>
			<Route path="/user/business/main" component={businessMain} />
			<Route path="/user/business/funds" component={businessFunds} />
			<Route path="/user/business/options" component={businessEmployees} />
		</Switch>
		</Router>*/}
		</div >

		
	};
}

export default business;