import React, {Component} from 'react';
import firebase from '../../firebase';
import './chatbox.scss';
import { Message } from '../../models/message';
import Button from '@material-ui/core/Button';

class Chatbox extends Component{
	private db = firebase.firestore();
	constructor(props: any){
		super(props);

		this.sendMessage = this.sendMessage.bind(this);
		this.messageChange = this.messageChange.bind(this);

		this.state  = {
			sending: false,
			message: "",
		};
	}


	async sendMessage(e: any){
		e.preventDefault();

		this.setState({
			sending: true,
			message: "",
		});

		const {message} = this.state as any;
		
		const newMessage: Message = {
			message,
			date: new Date(),
		}
		await this.db.collection("Messages").add(newMessage);
		this.setState({
			sending: false,
		})
	}

	messageChange(event: any){
		this.setState({message: event.target.value});
	}

	render(){
		const {sending, message} = this.state as any;
		return (
			<div className="chatbox">
				<form onSubmit={(e) => this.sendMessage(e)}>
					<input type="text" value={message} onChange={this.messageChange}/>
					<Button variant="contained" type="submit" color="primary">
						send
					</Button>
				</form>
			</div>
		)
	}
}

export default Chatbox;