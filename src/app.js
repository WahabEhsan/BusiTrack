import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route} from "react-router-dom";

import Navbar from "./views/navbar.component";
import Navbar2 from "./views/navbar.component2";
import home from "./views/home.component";
import login from "./views/login.component";
import business from "./views/business.component";
import settings from "./views/settings.component";
import register from "./views/register.component";


function App() {
  return (
    <Router>
      <div className="container">
       <Navbar2 />
      <home />
      
      
      <br/>
      <Route path="/" exact component={home} />
      <Route path="/login" exact component={login} />
      <Route path="/register" exact component={register} />

      </div>
    </Router>
  );
}

export default App;
