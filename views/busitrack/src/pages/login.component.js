import React from 'react';
import ReactDOM from 'react-dom';
import './login.css';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Route} from "react-router-dom";



class login extends React.Component {
    constructor(props) {
      super(props);
      if (this.state == "/user") {
        window.location.reload(false);
	  }
	}

	render() {
			return <div class = "form"> 

                      <p style={{fontSize: 20}} > Login </p>
					 
                     <form method="post" action="/login">
                          <div class="imgcontainer">
                         
                          </div>

                          	<Link  to='/user' className="nav-link">
				                Temp access to home
			                </Link>


                          <div class="container">
                            <label for="uname"><b>Username</b></label>
                            <input type="text"  placeholder="Enter Username -" name="uname" required />

                            <label for="psw"><b>Password</b></label>
                            <input type="password"  placeholder="Enter Password - " name="psw"  required />
               
                            <button type="submit">Login</button>
                            <label>
                              <input type="checkbox" name="remember" /> Remember me
                            </label>
                          </div>
                          
                          	<Link to="/register" className="nav-link">Register</Link>

                          <div class="container" style={{backgroundColor: '#f1f1f1'}}>
                            <button type="button" class="cancelbtn">Cancel</button>
                            <span class="psw">Forgot <a href="#">password?</a></span>
                          </div>
                        </form>   
        

			</div>
	}
}

export default login;
