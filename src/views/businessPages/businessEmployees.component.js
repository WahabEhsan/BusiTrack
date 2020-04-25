import React from 'react';
import ReactDOM from 'react-dom';

class employee extends React.Component {
     constructor(props) {
        super(props);

        {/*this.business = this.onSubmit.bind(this);*/}
        {/*this.phoneAbrv = this.onSubmit.bind(this);*/}
        {/*this.Employee = this.onSubmit.bind(this);*/}
        {/*this.manager = this.onSubmit.bind(this);*/}
        {/*this.inventory = this.onSubmit.bind(this);*/}
        {/*this.expenses = this.onSubmit.bind(this);*/}


        this.state = {
            username: ''
        }
  }
		render() {
		return <div class = "main"> 
					Welcome to the Business Employee Page
				
				
				    <form>

                          <div class="container">
                          {this.props.bName}
								
                                 <label for="manager"><b>Business Manager</b></label>
                                <input id="mngr" disabled type="text" className="form-control" value={this.state.manager}onChange={this.onChangeUsername} />

                                <label for="Employee"><b>Business Employees</b></label>
                                <input id="emplye" disabled type="text" className="form-control" value={this.state.Employee}onChange={this.onChangeUsername} />


                          </div>

                        </form>  
				
				</div >

	}
}

export default employee;