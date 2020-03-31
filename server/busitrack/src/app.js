import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route} from "react-router-dom";

import Navbar from "./components/navbar.component"
import home from "./pages/home.component";
import login from "./pages/login.component";
import business from "./pages/business.component";
import settings from "./pages/settings.component";

function App() {
  return (
    <Router>
      <div className="container">
      <Navbar />
      <br/>
      <Route path="/" exact component={home} />
      <Route path="/edit/:id" component={business} />
      <Route path="/create" component={login} />
      <Route path="/user" component={settings} />
      </div>
    </Router>
  );
}

export default App;
