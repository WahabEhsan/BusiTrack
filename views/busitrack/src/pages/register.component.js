import React from 'react';
import ReactDOM from 'react-dom';
import './login.css';
import { Link } from 'react-router-dom';

class login extends React.Component {
    constructor(props) {
      super(props);
	}

	render() {
			return <div class = "form"> 
					  <p style={{fontSize: 20}} > Register </p>
                     <form method="post" action="/signup">
                          <div class="imgcontainer">
                         
                          </div>

                            <form action="/user">
                            <button type="submit"> Temp Access to home </button>
                            </form>

                          <div class="container">
                            <label for="uname"><b>Username</b></label>
                            <input type="text"  placeholder="Enter Username -" name="uname" required />

                            <label for="psw"><b>Password</b></label>
                            <input type="password"  placeholder="Enter Password - " name="psw"  required />

                            <button type="submit">Register</button>
                          </div>

                          <div class="container" style={{backgroundColor: '#f1f1f1'}}>
                            	<Link to="/login" className="nav-link"><button type="button" class="cancelbtn">Back</button> </Link>
                            <span class="psw">Forgot <a href="#">password?</a></span>
                          </div>
                        </form>          
			</div>
	}
}

export default login;