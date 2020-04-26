import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
//var Connect = require("../../../app/models/webmodels/DB_models/connect.js");

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

		return <div class = "main"> 
					Welcome to the Business Main Page
                    {this.props.bName}
				
				
				     <form  onSubmit={this.onSubmit}>

                          <div class="container">

                               <button type="submit">Retrieve Information</button>

                                <label for="businessName"><b>Business Name</b></label>
                                <input id="bName" name="businessName"  type="text" className="form-control" value={this.state.businessName} onChange={this.onChangeData} />

                                <label for="phoneAbrv"><b>Phone abbreviation </b></label>
                                <input id="phoneAbrv" name="phoneAbrv" type="text" className="form-control" value={this.state.phoneAbrv} onChange={this.onChangeData} />

                                <label for="Employee"><b>Business Employees</b></label>
                                <input id="emplye" name="employee" type="text" className="form-control" value={this.state.employee}onChange={this.onChangeData} />

                                <label for="manager"><b>Business Manager</b></label>
                                <input id="mngr" name="manager" type="text" className="form-control" value={this.state.manager}onChange={this.onChangeData} />

                                <label for="inventory"><b>Business inventory</b></label>
                                <input id="inv" name="inventory" type="text" className="form-control" value={this.state.inventory}onChange={this.onChangeData} />

                                <label for="expenses"><b>Business Expenses</b></label>
                                <input id="exp" name="expenses"  type="text" className="form-control" value={this.state.expenses}onChange={this.onChangeData} />

                          </div>

                        </form>  
				
				</div >

	}
}

export default business;