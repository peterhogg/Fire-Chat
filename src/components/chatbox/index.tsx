import React, { Component } from "react";
import firebase from "../../firebase";
import "./chatbox.scss";
import { Message } from "../../models/message";
import Button from "@material-ui/core/Button";

interface IProps {
    user?: firebase.User;
}
interface IState {
    sending: boolean;
    message: string;
}

class Chatbox extends Component<IProps, IState> {
    private db = firebase.firestore();
    constructor(props: any) {
        super(props);

        this.sendMessage = this.sendMessage.bind(this);
        this.messageChange = this.messageChange.bind(this);

        this.state = {
            sending: false,
            message: ""
        };
    }

    async sendMessage(e: any) {
        e.preventDefault();

        this.setState({
            sending: true,
            message: ""
        });

        const { message } = this.state;
        const { user } = this.props;
        if (user) {
            const newMessage: Message = {
                message,
                userID: user.uid,
                email: user.email
            };
            await this.db.collection("Messages").add(newMessage);
            this.setState({
                sending: false
            });
        }
    }

    messageChange(event: any) {
        this.setState({ message: event.target.value });
    }

    render() {
        const { sending, message } = this.state;
        return (
            <div className="chatbox">
                <form onSubmit={e => this.sendMessage(e)}>
                    <input
                        type="text"
                        value={message}
                        onChange={this.messageChange}
                    />
                    <Button variant="contained" type="submit" color="primary">
                        send
                    </Button>
                </form>
            </div>
        );
    }
}

export default Chatbox;
