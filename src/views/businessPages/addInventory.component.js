import React from 'react';
//import ReactDOM from 'react-dom';
import { Link, Switch } from 'react-router-dom';
import { BrowserRouter as Router, Route} from "react-router-dom";
import '../home.css';
import axios from 'axios';

class addInventory extends React.Component {
	constructor(props) {
        super(props);

        this.state = {
            itemNumber: "",
            itemName: "",
            itemPrice: "",
            stock: "",
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
            .post('http://localhost:8080/addInventory', {
                    theBusinessName: this.state.theBusinessName,
                    itemNumber: this.state.itemNumber,
                    itemName: this.state.itemName,
                    itemPrice: this.state.itemPrice,
                    stock: this.state.stock,
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
            
       
                                <div className = "addInventory">

		                            <label type="button" className="add" onClick={()=>this.operation()}>Add Inventory</label>
         
                                    {this.state.showMe?
                                             <form id="form" onSubmit={this.handleSubmit} method="post" noValidate>
                                                <br />
                                                   <label for="bName"><b>Business name: </b></label>
                                                   <input id="bName" name="theBusinessName" onChange={this.handleChange} value={this.state.theBusinessName} />


                                                   <label for="itemNumber"><b>Item Number: </b></label>
                                                   <input id="itemNumber" name="itemNumber" onChange={this.handleChange} value={this.state.itemNumber} />

                                                   <label for="itemName"><b>Item Name:</b></label>
                                                   <input id="itemName" name="itemName" onChange={this.handleChange} value={this.state.itemName}/>

                                                   <label for="itemPrice"><b>Item Price:</b></label>
                                                   <input id="itemPrice" name="itemPrice" onChange={this.handleChange} value={this.state.itemPrice}/>

                                                   <label for="stock"><b>Stock:</b></label>
                                                   <input id="stock" name="stock" onChange={this.handleChange} value={this.state.stock}/>

                                                  <button type="submit">Add Inventory</button>
                                            </form> 
                                    :null}
                                </div>
        );
    }
}

export default addInventory;