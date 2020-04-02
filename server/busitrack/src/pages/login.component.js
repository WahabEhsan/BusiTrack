import React from 'react';
import ReactDOM from 'react-dom';
import './login.css';

class login extends React.Component {
    constructor(props) {
      super(props);
	}

	render() {
			return <div class = "form"> 
					 
                     <form method="post" action="\login">
                          <div class="imgcontainer">
                         
                          </div>

                          <div class="container">
                            <label for="uname"><b>Username</b></label>
                            <input type="text" value={this.state.uname} placeholder="Enter Username -" name="uname"  onChange={this.handleChange} required />

                            <label for="psw"><b>Password</b></label>
                            <input type="password" value={this.state.psw} placeholder="Enter Password - " name="psw"  onChange={this.handleChange} required />

                            <button type="submit">Login</button>
                            <label>
                              <input type="checkbox" checked={this.state.rememberMe} name="remember" /> Remember me
                            </label>
                          </div>

                          <div class="container" style={{backgroundColor: '#f1f1f1'}}>
                            <button type="button" class="cancelbtn">Cancel</button>
                            <span class="psw">Forgot <a href="#">password?</a></span>
                          </div>
                        </form>          
			</div>
	}
}

export default login;
