import React from 'react';
import ReactDOM from 'react-dom';
import { Button} from 'react-bootstrap';

class settings extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			font : true,
		};
	}

	increaseSize() {
		this.setState({
			font : false,
		});
	}

	decreaseSize() {
		this.font = this.font - 1;
	}
 
	render() {
			return <div class = "settings"> 
					<p style={{fontSize: this.state.font === true ? 20:40}} >Example Text</p>
				  <Button onpress={this.increaseSize.bind(this)} >Increase Text Size</Button>
				  <Button>Drecrease Text Size</Button>
				   <Button>Default</Button>
				    <Button>Default</Button>
					 <Button>Default</Button>
					
			</div>
	}
}

export default settings;