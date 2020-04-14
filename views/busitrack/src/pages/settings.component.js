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
					<p style={{fontSize: this.state.font}} >Example Text</p>
				  <Button>Increase Text Size</Button>
				  <Button>Default</Button>
					
			</div>
	}
}

export default settings;