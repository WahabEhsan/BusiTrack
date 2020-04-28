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
            pAbrv: "",
            username: this.props.username,
            showMe: false
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
            }).then(response => {
            }).catch(err => console.log(err))

            setTimeout(window.location.replace("/user"), 100);
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
            
            <div className = "section">

		     <label type="button" className="add" onClick={()=>this.operation()}>Add Business</label>
         
                {this.state.showMe?
                         <form id="form" onSubmit={this.handleSubmit} method="post" noValidate>
                            <br />
                               <label for="uname"><b>Enter Business Name: </b></label>
                               <input id="bname" name="bName" onChange={this.handleChange} value={this.state.bName} />
                                     <label for="uname"><b>Enter Business Name Phone Abbreviation:</b></label>
                               <input id="pabrv" name="pAbrv" onChange={this.handleChange} value={this.state.pAbrv}/>

                              <button type="submit">Add Business</button>
                        </form> 
                :null}
            </div>
        );
    }
}

export default business;