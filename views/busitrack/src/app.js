import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route} from "react-router-dom";

import Navbar from "./pages/navbar.component";
import Navbar2 from "./pages/navbar.component2";
import home from "./pages/home.component";
import login from "./pages/login.component";
import business from "./pages/business.component";
import settings from "./pages/settings.component";
import register from "./pages/register.component";


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
