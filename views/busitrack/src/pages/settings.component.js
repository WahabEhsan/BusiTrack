import React from 'react';
import ReactDOM from 'react-dom';
import { Button} from 'react-bootstrap';

class settings extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			font : 40,
		};
	}
	render() {
			return <div class = "settings"> 
				  <Button>Default</Button>
				  	  <Button>Default</Button>
					  <p style={{fontSize: this.state.font}} >Sample Text</p>
			</div>
	}
}

export default settings;