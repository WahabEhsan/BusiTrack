import React from 'react';
//import ReactDOM from 'react-dom';
import { Link, Switch } from 'react-router-dom';
import { BrowserRouter as Router, Route} from "react-router-dom";
import '../home.css';
import axios from 'axios';

class addEmployee extends React.Component {
	constructor(props) {
        super(props);

        this.state = {
            ssn: "",
            fname: "",
            lname: "",
            contact: "",
            address: "",
            pay: "",
            group: "",
            username: this.props.username,
            showMe: false,
            businessName: this.props.businessName
		}

        console.log(this.state.businessName);

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
	}

    handleSubmit(event) {
        event.preventDefault()

        axios
            .post('http://localhost:8080/addEmployee', {
                    businessName: this.state.businessName,
                    ssn: this.state.ssn,
                    fname: this.state.fname,
                    lname: this.state.lname,
                    contact: this.state.contact,
                    address: this.state.address,
                    pay: this.state.pay,
                    group: this.state.group
            }).then(response => {
            }).catch(err => console.log(err))

            setTimeout(window.location.replace("/user"), 200);
            //window.location.replace("/user")
}

handleChange(event) { this.setState({ [event.target.name] : event.target.value }); }

 operation() {
    if(this.state.showMe == false){
      this.setState({showMe: true})
    }
    if(this.state.showMe == true){
      this.setState({showMe: false})
    }
  }


	render () {
     
        return (            
            
       
                                <div className = "addEmployee">

		                            <label type="button" className="add" onClick={()=>this.operation()}>Add Employee</label>
         
                                    {this.state.showMe?
                                             <form id="form" onSubmit={this.handleSubmit} method="post" noValidate>
                                                <br />
                            

                                                   <label for="ssn"><b>Social Security Number: </b></label>
                                                   <input id="ssn" name="ssn" onChange={this.handleChange} value={this.state.ssn} />

                                                   <label for="fname"><b>First Name:</b></label>
                                                   <input id="fname" name="fname" onChange={this.handleChange} value={this.state.fname}/>

                                                   <label for="lname"><b>Last Name:</b></label>
                                                   <input id="lname" name="lname" onChange={this.handleChange} value={this.state.lname}/>

                                                   <label for="contact"><b>Contact Number:</b></label>
                                                   <input id="contact" name="contact" onChange={this.handleChange} value={this.state.contact}/>

                                                    <label for="address"><b>Address:</b></label>
                                                   <input id="address" name="address" onChange={this.handleChange} value={this.state.address}/>

                                                   <label for="pay"><b>:</b></label>
                                                   <input id="pay" name="pay" onChange={this.handleChange} value={this.state.pay}/>

                                                   <label for="group"><b>Enter Business Name Phone Abbreviation:</b></label>
                                                   <input id="group" name="group" onChange={this.handleChange} value={this.state.group}/>

                                                  <button type="submit">Add Employee</button>
                                            </form> 
                                    :null}
                                </div>
        );
    }
}

export default addEmployee;