import React from 'react';
//import ReactDOM from 'react-dom';
import { Link, Switch } from 'react-router-dom';
import { BrowserRouter as Router, Route} from "react-router-dom";
import '../home.css';
import axios from 'axios';

class business extends React.Component {
	constructor(props) {
        super(props);

        this.state = {
            bName: "",
            pAbrv: ""
		}

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
	}

    handleSubmit(event) {
        event.preventDefault()

        axios
            .post('http://localhost:8080/addBusiness', {
                    businessName: this.state.bName,
                    phoneAbrv: this.state.pAbrv
            }).then().catch(err => console.log(err))
}

handleChange(event) { this.setState({ [event.target.name] : event.target.value }); }

	render () {
     
        return (            
            
            <div className = "section">

		     <label type="button" className="add" >Add Business</label>
         

                         <form id="form" onSubmit={this.handleSubmit} method="post" noValidate>

                               <input id="bname" name="bName" onChange={this.handleChange} value={this.state.bName} />
                               <input id="pabrv" name="pAbrv" onChange={this.handleChange} value={this.state.pAbrv}/>

                              <button type="submit">Add Business</button>
                        </form> 
            </div>
        );
    }
}

export default business;