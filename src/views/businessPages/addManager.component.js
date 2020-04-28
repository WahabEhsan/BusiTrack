import React from 'react';
//import ReactDOM from 'react-dom';
import { Link, Switch } from 'react-router-dom';
import { BrowserRouter as Router, Route} from "react-router-dom";
import '../home.css';
import axios from 'axios';

class addManager extends React.Component {
	constructor(props) {
        super(props);

        this.state = {
            fname: "",
            lname: "",
            group: "",
            ssn: "",
            username: this.props.username,
            showMe: false,
            businessName: this.props.businessName,
            theBusinessName: ""
		}

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
	}

    handleSubmit(event) {
        event.preventDefault()

        axios
            .post('http://localhost:8080/addManager', {
                    theBusinessName: this.state.theBusinessName,
                    ssn: this.state.ssn,
                    fname: this.state.fname,
                    lname: this.state.lname,
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
            
       
                                <div className = "addManager">

		                            <label type="button" className="add" onClick={()=>this.operation()}>Add Manager</label>
         
                                    {this.state.showMe?
                                             <form id="form" onSubmit={this.handleSubmit} method="post" noValidate>
                                                <br />
                                                   <label for="bName"><b>Business name: </b></label>
                                                   <input id="bName" name="theBusinessName" onChange={this.handleChange} value={this.state.theBusinessName} />

                                                   <label for="fname"><b>First Name:</b></label>
                                                   <input id="fname" name="fname" onChange={this.handleChange} value={this.state.fname}/>

                                                   <label for="lname"><b>Last Name:</b></label>
                                                   <input id="lname" name="lname" onChange={this.handleChange} value={this.state.lname}/>

                                                   <label for="group"><b>Group:</b></label>
                                                   <input id="group" name="group" onChange={this.handleChange} value={this.state.group}/>

                                                   <label for="ssn"><b>Social Security Number: </b></label>
                                                   <input id="ssn" name="ssn" onChange={this.handleChange} value={this.state.ssn} />


                                                  <button type="submit">Add Manager</button>
                                            </form> 
                                    :null}
                                </div>
        );
    }
}

export default addManager;