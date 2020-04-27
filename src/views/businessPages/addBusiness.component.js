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
            bName: '',
            pAbrv: ''
		}

    //this.bName = this.bName.bind(this)
    //this.pAbrv = this.pAbrv.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
     this.handleChange = this.handleChange.bind(this)


	}

    handleChange() {
        this.setState({
           bName: this.businessName,
           pAbrv: this.phoneAbrv,
        })
    }

    handleSubmit(event) {
        event.preventDefault()
        console.log('handleSubmit')

        axios
            .post('http://localhost:8080/addBusiness', {
                businessName: this.state.bName,
                phoneAbrv: this.state.pAbrv
            })
            .then(response => {
                console.log('login response: ')
                console.log(response)
                if (response.status === 200) {
    
             
                    // update App.js state
                    {/*this.props.updateUser({*/}
                        //loggedIn: true;
                        //user: response.data.local;
                        
                    // })
                    // update the state to redirect to home
                  
    
                    //return <Redirect action="/user" />
                }
            }).catch(error => {
                console.log('login error: ')
                console.log(error);
                
            })
    
		/*event.preventDefault()
        console.log('handleSubmit')
        axios.post('http://localhost:8080/login', {
			username: this.state.username,
			password: this.state.passord
		})
      .then(res => console.log(res.data));
             
			/* axios.post('http://localhost:8080/login', user)
      .then(res => console.log(res.data));*/
                
            }
    

	render () {

        function createBusiness() {
            this.state.bName = prompt("Please enter the name of the business: ");
            this.state.pAbrv = prompt("Please enter the abbreviation of the business name: ");

            this.handleSubmit();
            document.getElementById("form").submit();
		}

        //function visible() {
            //var x = document.getElementById("test");
            //x.style.display = "none";
		//}
     
        return (            
            
            <div className = "section">

		     <label type="button" className="add" onClick={createBusiness}>Add Business</label>
         

                         <form id="form" onSubmit={this.handleSubmit} noValidate>

                               <input id="name" value={this.businessName} />
                               <input id="Abrv" value={this.phoneAbrv}/>

                              {/*<button type="submit">Login</button>*/}
                        
                  

                            </form> 
            </div>
        );
    }
}

export default business;