import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './home.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route} from "react-router-dom";
import axios from 'axios';import Navbar from "./navbar.component.js";
import Cards from "./businessCards.component";
import business from "./business.component";

import settings from "./settings.component.js";export default class home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            businesses: []
        }
    }    
    
    fetchBusiness(){
        axios.get('http://localhost:8080/fetchBusiness', {        
        }).then(response => {
            console.log("User businesses: ")
            //console.log(response)
            //console.log(response.data)
           // let handler = response
           var x = [];
            for (var count = 0; count < response.data.length; count++) {
		        x[count] = response.data[count].businessName;
            }

            this.setState({
               businesses: x

            })

            console.log(this.state.businesses)
        }).catch(error => {
            console.log(error)
        })
    }     
    
    componentDidMount(){
        this.fetchBusiness();
    }    
    
    render () {
        const listBusinesses = this.state.businesses.map(business => {
            return <Cards businessName = {business}/>
        })
        return (            
            
            <div className = "section">
            <Router>
     
        
                <Navbar />
                <div className ="businessButtons">
                <label type="button" className="add">Add Business</label>
                <label type="button"className="remove">Remove Business</label>
                </div>

                <switch>
                	<Route path="/user/business" component={business} />
                    {listBusinesses}
                </switch>
              </Router>
            </div>
        );
    }
}