import React, {Component} from 'react';
import { Message } from '../../models/message';
import firebase from '../../firebase';

class Chat extends Component{

	private db = firebase.firestore();

	constructor(props: any){
		super(props);
		const messages: Message[] = [];
		this.state = {
			messages: messages
		};
	}

	async componentDidMount(){
		const messagesRef = await this.db.collection('Messages');
		const messages: Message[] = [];
		messagesRef.orderBy('date', 'asc').onSnapshot((messagesData) =>{
			// console.log("messages",messageData.docs);
			const messages = messagesData.docs.map((data)=>{
				const messageData = data.data();
				messageData.date = messageData.date.toDate();
				messageData.id = data.id;
				return messageData;
			})
			this.setState({messages});
		});
		
	}

	render(){
		const {messages} = this.state as any;
		return (
			<div>
				{messages.map(({message, date, id}: Message) =>{
					return (
					<div key={id}>
						<div>{message}</div>
						<div>{date.toDateString()}</div>
					</div>
					)}	
			)}
			</div>
		);
	}
}

export default Chat;