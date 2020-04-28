import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import './businesses.css';
//var Connect = require("../../../app/models/webmodels/DB_models/connect.js");
import RemoveBusiness from "./removeBusiness.component";

import AddEmployee from "./addEmployee.component";

class business extends React.Component {
     constructor(props) {
        super(props);

        var m 
        this.onChangeData = this.onChangeData.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            businessName: '',
            phoneAbrv: '',
             employee: '',
             manager: '',
            inventory: '',
             expenses: ''
        }
  }

    onChangeData(e) {
    this.setState(

    {
       [e.target.name]: e.target.value

    })
  }
  
  onSubmit(e) {
    e.preventDefault();

    const user = {
         businessName: this.state.businessName,
       phoneAbrv: this.state.phoneAbrv,
       employee: this.state.employee,
       manager: this.state.manager,
       inventory: this.state.inventory,
       expenses: this.state.expenses
    }

    console.log(user);

    /*
    axios.post('http://localhost:8080/login', user)
      .then(res => console.log(res.data));

    this.setState({
      businessName: '',
       phoneAbrv: '',
       employee: '',
       manager: '',
       inventory: '',
       expenses: ''
    }) */
  }  
    
    fetchBusiness(){
      axios.get('http://localhost:8080/user/' + this.props.bName, {        
      }).then(response => {
          console.log('Business Main Response: ' + response.data.employee)
          console.log(response)
          var businessData = [];
         // for (var count = 0; count < response.data.length; count++) {

				//console.log('Business sent: ' + response.data[count]);
	
					businessData[0] = response.data.businessName;
					businessData[1] = response.data.phoneAbrv;
					businessData[2] = response.data.employee;
					businessData[3] = response.data.manager;
					businessData[4] = response.data.inventory;
					businessData[5] = response.data.expenses;
			
		//}

            console.log(businessData)    

            this.setState({
               businessName: businessData[0],
               phoneAbrv: businessData[1],
               employee: businessData[2],
               manager: businessData[3],
               inventory: businessData[4],
               expenses: businessData[5]

            })

            console.log('BusinessName: ' + this.state.businessName)

      }).catch(error => {
          console.log(error)
      })
    }     
    
    componentDidMount(){
        this.fetchBusiness();
    }    

	render() {

        this.businessName = this.state.bName

        const employeeList = Object.values(this.state.employee);
        const managerList = Object.values(this.state.manager);
        const inventoryList = Object.values(this.state.inventory);
        const expensesList = Object.values(this.state.expenses);

		return <div class = "main"> 
					
				
				     <form  onSubmit={this.onSubmit}>

                          <div class="container">

                               <button type="submit" >Retrieve Information</button>
                               <h5 style={{ fontWeight: 'bold' }}>Welcome to the Business Main Page</h5>

                                <label for="businessName"><b>Business Name</b></label>
                                <input id="bName" name="businessName"  type="text" className="form-control" value={this.state.businessName} onChange={this.onChangeData} />

                                <label for="phoneAbrv"><b>Phone abbreviation </b></label>
                                <input id="phoneAbrv" name="phoneAbrv" type="text" className="form-control" value={this.state.phoneAbrv} onChange={this.onChangeData} />

                                <label for="Employee"><b>Business Employees</b></label>
                                
                                <AddEmployee businessName = {this.state.businessName} />
                                <br />

                                <table>
                                    <tr>
                                        <th>First Name</th>
                                        <th>Last Name</th>
                                        <th>Contact Number</th>
                                        <th>Address</th>
                                        <th>Pay</th>
                                        <th>Group</th>
                                        <th>Last 4 SSN</th>
                                    </tr>

                                    
                                {employeeList.map((item) => 
                                <tr>
                                    
                                        <td>{item.fName}</td>
                                        <td>{item.lName}</td>
                                        <td>{item.contact}</td>
                                        <td>{item.address}</td>
                                        <td>{item.pay}</td>
                                        <td>{item.group}</td>
                                        <td>{item.ssn}</td>
                                    
                                 </tr>
                                )}
                                    
                                </table>

                                <label for="manager"><b>Business Manager</b></label>

                               <table>
                                    <tr>
                                        <th>First Name</th>
                                        <th>Last Name</th>
                                        <th>Group</th>
                                    </tr>

                                    
                                {managerList.map((item) => 
                                <tr>
                                    
                                        <td>{item.fName}</td>
                                        <td>{item.lName}</td>
                                        <td>{item.group}</td>
                                    
                                 </tr>
                                )}
                                    
                                </table>

                                <label for="inventory"><b>Business inventory</b></label>

                                <table>
                                    <tr>
                                        <th>Item Number</th>
                                        <th>Item Name</th>
                                        <th>Item Price</th>
                                        <th>Stock</th>
                                    </tr>

                                    
                                {inventoryList.map((item) => 
                                <tr>
                                    
                                        <td>{item.itemNumber}</td>
                                        <td>{item.itemName}</td>
                                        <td>{item.itemPrice}</td>
                                        <td>{item.stock}</td>
                                    
                                 </tr>
                                )}
                                    
                                </table>

                                <label for="expenses"><b>Business Expenses</b></label>

                                <table>
                                    <tr>
                                        <th>Date</th>
                                        <th>Amount</th>
                                    </tr>

                                    
                                {expensesList.map((item) => 
                                <tr>
                                    
                                        <td>{item.date}</td>
                                        <td>{item.amount}</td>
  
                                 </tr>
                                )}
                                </table>
                                    

                          </div>
           

            </form>  

                <RemoveBusiness />
				
				</div >

	}
}

export default business;