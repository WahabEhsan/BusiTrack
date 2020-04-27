import React, {Component} from 'react';
import './login.css';
import { Link,Redirect } from 'react-router-dom';
import axios from 'axios';
import quearystring from 'querystring';


class login extends Component {
     constructor() {
    super();
	this.state = {
        loggedIn: false,
        _id: '',
        business: '',
        object: '',
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
                   this.setState({
                        _id: response.data.user._id,
                        business: response.data.user.local.business,
                        object: response.data.user.local.object,
                        loggedIn: true
				   })
             
                    // update App.js state
                    {/*this.props.updateUser({*/}
                        //loggedIn: true;
                        //user: response.data.local;
                        
                    // })
                    // update the state to redirect to home
                    console.log(this.state)
                    window.location.replace("/user");  
                    //return <Redirect action="/user" />
                }
            }).catch(error => {
                console.log('login error: ')
                console.log(error);
                
            })           
            }
    
	render() {
			return <div class = "form-group"> 
					 
                    
                          <div class="imgcontainer">
                         
                          </div>
                          <form onSubmit={this.handleSubmit} noValidate>
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

                              <button type="submit">Login</button>
                        
                              <label>
                                <input type="checkbox" name="remember" /> Remember me
                              </label>
                            </div>
                          	<Link to="/register" className="nav-link">Register</Link>

                            </form> 

                          <div class="container" style={{backgroundColor: '#f1f1f1'}}>
                            <button type="button" class="cancelbtn">Cancel</button>
                          </div>  
                          


			</div>
	}
}

export default login;