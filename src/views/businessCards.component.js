import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './home.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route} from "react-router-dom";
import axios from 'axios';

import business from "./business.component";
import login from "./login.component";

class Card extends Component {
  
	render() {
        let title = this.props.title.name
        let path = this.props.title.path
        let id = this.props.title.id

		return (
				<Router> 
			
			<div className = "section">
			<Link to={path} className="nav-link">
				<div className="businessCard_Container">
					<div className="businessCard">
						<div className="businessCardBanner"> </div>
						<div className="businessCardInfo">{title}</div>
					</div>
				</div>
			</Link>
			
		  <Route path={path} exact component={business} />
	


			

			</div>
			</Router> 
		);
	}
}

export default class businessCard extends Component {
 constructor(props) {
    super(props);
   
	this.onChangeOwned = this.onChangeOwned.bind(this);
      const owned2 = [1, 2, 3, 4, 5];
	this.businessElement = React.createRef();

    this.state = {
      owned: 3

    };
  }

   handleClick = () => {

    this.businessElement.current.changeName();
  };

 

  onChangeOwned(e) {
  	  this.setState({
		owned: e.target.value
	  });
  }

  onLoad(e) {
    e.preventDefault();

    const user = {
      username: this.state.username
    }

    console.log(user);

    axios.post('http://localhost:8080/login', user)
      .then(res => console.log(res.data));

    this.setState({
      username: ''
    })
  }




render() {
    let links = [{id: 1,name: "Business 1",path: "/user/business1/"}, 
                {id: 2,name: "Business 2",path: "/user/business2/"},
                {id: 3,name: "Business 3",path: "/user/business3/"}];
                {/* keyword needed*/}
    return (
      <div>
				{/*  <button onClick={this.handleClick}>Show real name</button>
	             <form onSubmit={this.onSubmit}>
                          <div class="container">
                            <label for="bAmount"><b>Username</b></label>
                            <input  type="text" required className="form-control" value={this.state.owned}onChange={this.onChangeOwned} />
                          </div>            
                        </form>   

        <p>
          + Loading {this.state.owned} business
          {Array(this.state.owned).fill(<div ><Card/></div>)}
        </p> */}

        {links.map( (item)=> (
            <Card key={item.id}  title = {item} />
        ) ) }
         
         {/* <businessList owned={5} /> */}

      </div>
    );
  }
}