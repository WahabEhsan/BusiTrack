import React from 'react';
import ReactDOM from 'react-dom';
import './login.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

class login extends React.Component {
     constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: ''
    }
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const user = {
      username: this.state.username
    }

    console.log(user);

    axios.post('http://localhost:8080/login', user)
      .then(res => console.log(res.data));

    this.setState({
      username: ''
    })
  }

	render() {
			return <div class = "form"> 

                      <p style={{fontSize: 20}} > Login </p>
					 
                     <form onSubmit={this.onSubmit}>
                          <div class="imgcontainer">
                         
                          </div>

                      

                          <div class="container">
                            <label for="uname"><b>Username</b></label>
                            <input  type="text"
                required
                className="form-control"
                value={this.state.username}
                onChange={this.onChangeUsername}
                />

                            <label for="psw"><b>Password</b></label>
                            <input type="password" value={this.state.password} onChange={this.changePassword} placeholder="Enter Password - " name="psw"  required />

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