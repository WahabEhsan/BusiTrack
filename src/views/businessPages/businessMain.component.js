import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

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

    axios.post('http://localhost:8080/login', user)
      .then(res => console.log(res.data));

    this.setState({
      businessName: '',
       phoneAbrv: '',
       employee: '',
       manager: '',
       inventory: '',
       expenses: ''
    })
  }
	render() {
		return <div class = "main"> 
					Welcome to the Business Main Page
				
				
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