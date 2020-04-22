import React from 'react';
import ReactDOM from 'react-dom';

class business extends React.Component {
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
					Welcome to the Business Funds Page
				
				
				     <form>

                          <div class="container">
                                <label for="expenses"><b>Business Expenses</b></label>
                                <input id="exp" disabled type="text" className="form-control" value={this.state.expenses}onChange={this.onChangeUsername} />

                          </div>

                        </form>  
				
				</div >

	}
}

export default business;