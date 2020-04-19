import React, {Component} from 'react';
import './login.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import quearystring from 'querystring';
class login extends Component {
     constructor() {
    super();
	this.state = {
      username: '',
	  password: '',
	  redirectTo: null
    }
   
   this.handleSubmit = this.handleSubmit.bind(this)
   this.handleChange = this.handleChange.bind(this)

 
  }
  
  

  handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

  handleSubmit(event) {
        event.preventDefault()
        console.log('handleSubmit')

        axios
            .post('http://localhost:8080/login', {
                username: this.state.username,
                password: this.state.password
            })
            .then(response => {
                console.log('login response: ')
                console.log(response)
                if (response.status === 200) {
                    // update App.js state
                    this.props.updateUser({
                        loggedIn: true,
                        username: response.data.username
                    })
                    // update the state to redirect to home
                    this.setState({
                        redirectTo: '/'
                    })
                }
            }).catch(error => {
                console.log('login error: ')
                console.log(error);
                
            })
    
		/*event.preventDefault()
        console.log('handleSubmit')

        axios.post('http://localhost:8080/login', {
			username: this.state.username,
			password: this.state.passord
		})
      .then(res => console.log(res.data));
             
			/* axios.post('http://localhost:8080/login', user)
      .then(res => console.log(res.data));*/
                
            }
    

	render() {
			return <div class = "form-group"> 

                      <p style={{fontSize: 20}} > Login </p>
					 
                     <form onSubmit={this.onSubmit}>
                          <div class="imgcontainer">
                         
                          </div>

                          	<Link to="/" className="nav-link">
				                Temp assess to home
			                </Link>

                          <div class="container">
                            <label for="uname"><b>Username</b></label>
                            <input className="form-input"
                                    type="text"
                                    id="username"
                                    name="username"
                                    placeholder="Username"
                                    value={this.state.username}
                                    onChange={this.handleChange}
                                />

                            <label for="psw"><b>Password</b></label>
                            <input className="form-input"
                                    placeholder="password"
                                    type="password"
                                    name="password"
                                    value={this.state.password}
                                    onChange={this.handleChange}
                                />

                            <button type="submit" onClick={this.handleSubmit}>Login</button>
                            <label>
                              <input type="checkbox" name="remember" /> Remember me
                            </label>
                          </div>
                          
                          	<Link to="/register" className="nav-link">Register</Link>

                          <div class="container" style={{backgroundColor: '#f1f1f1'}}>
                            <button type="button" class="cancelbtn">Cancel</button>
                           </div>
                        </form>          
			</div>
	}
}

export default login;
