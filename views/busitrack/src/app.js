import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route} from "react-router-dom";

import home from "./pages/home.component";
import userpage from "./pages/userpage.component";

function App() {
  return (
    <Router>
      <div className="container">

      
      
      <br/>
      <Route path="/" exact component={home} />
      <Route path="/user" exact component={userpage} />
  

      </div>
    </Router>
  );
}

export default App;
