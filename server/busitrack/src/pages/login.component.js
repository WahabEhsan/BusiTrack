import React from 'react';
import ReactDOM from 'react-dom';
import './login.css';

class login extends React.Component {
    constructor(props) {
      super(props);
	}
    
    state = {
     uname: '',
     psw: '',
     remember: false
	};

    handleChange = (event) => {
      const input = event.target;
      const value = input.type === 'checkbox' ? input.checked : input.value;

      this.setState({ [input.name]: value});
	};

    handleFormSubmit = () => {
         const {uname, psw, remember} = this.state; 
         sessionStorage.setItem('remember',remember);
         sessionStorage.setItem('uname', remember ? uname: '');
         sessionStorage.setItem('psw', remember ? psw: '');
    };

    componentDidMount() {
            const remember = localStorage.getItem('remember') === 'true';
            const uname = remember ? localStorage.getItem('uname') : '';
            const psw = remember ? localStorage.getItem('psw') : '';
            this.setState({ uname, psw, remember });
}

	render() {
			return <div class = "form"> 
                        
					 <form onSubmit={this.handleFormSubmit}>
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