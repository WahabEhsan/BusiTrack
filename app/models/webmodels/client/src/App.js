import React from 'react';
import { Component } from 'react';
//import "bootstrap/dist/bootstrap.min.css";
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Login from "./components/login.component";

class App extends Component {
  render(){
    return(
      <Router>
        <Route path="/" exact component={Login} />
      </Router>
    );
  }
}

export default App;
