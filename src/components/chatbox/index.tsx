import React, {Component} from 'react';
import './chatbox.scss';

class Chatbox extends Component{
	constructor(props: any){
		super(props);
	}

	render(){
		return (
			<div className="chatbox">
				<input type="textbox"/>
				<button type="submit">Send</button>
			</div>
		)
	}
}

export default Chatbox;