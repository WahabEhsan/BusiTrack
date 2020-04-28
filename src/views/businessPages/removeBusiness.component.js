import React from 'react';
//import ReactDOM from 'react-dom';
import { Link, Switch } from 'react-router-dom';
import { BrowserRouter as Router, Route} from "react-router-dom";
import '../home.css';
import axios from 'axios';

class removeBusiness extends React.Component {
	constructor(props) {
        super(props);

        this.state = {
            bName: "",
            username: this.props.username
		}

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
	}

    handleSubmit(event) {
        event.preventDefault()

        axios
            .post('http://localhost:8080/removeBusiness', {
                    username: this.state.username,
                    businessName: this.state.bName
            }).then(response => {
            }).catch(err => console.log(err))

            setTimeout(window.location.replace("/user"), 100);
            //window.location.replace("/user")
}

handleChange(event) { this.setState({ [event.target.name] : event.target.value }); }

	render () {
     
        return (            
            
            <div className = "section">

		     <label>Remove Business</label>
         

                         <form id="form" onSubmit={this.handleSubmit} method="post" noValidate>

                               <input id="bname" name="bName" onChange={this.handleChange} value={this.state.bName} />

                              <button type="submit" >Remove Business</button>
                        </form> 
            </div>
        );
    }
}

export default removeBusiness;