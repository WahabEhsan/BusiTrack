import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Route} from "react-router-dom";

import login from "./login.component";
import register from "./register.component";

export default class Navbar extends Component {

  render() {
    return (
    	<Router> 
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link className="navbar-brand">Busitrack</Link>
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
          <Link to="/login" className="nav-link">Login</Link>
          </li>
        </ul>
        </div>
      </nav>

      	<Route path="/login" exact component={login} />
		<Route path="/register" exact component={register} />
        	</Router> 
    );
  }
}