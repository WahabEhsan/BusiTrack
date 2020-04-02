import React from 'react';
import { Component } from 'react';
//import "bootstrap/dist/bootstrap.min.css";
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navbar from "./components/navbar.component";
import Login from "./components/login.component";
import Home from "./components/home.component";
import Business from "./components/business.component";
import Settings from "./components/settings.component";

class App extends Component {
  render(){
    return(
      <Router>
        <div className="container">
        <Navbar />
        <br/>
        <Route path="/" exact component={Home} />
        <Route path="/edit/:id" component={Business} />
        <Route path="/create" component={Login} />
        <Route path="/user" component={Settings} />
        </div>
    </Router>
    );
  }
}

export default App;
