import React, { Component } from "react";
import { Message } from "../../models/message";
import firebase from "../../firebase";
import PropTypes from "prop-types";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Grid from "@material-ui/core/Grid";

import "./chat.scss";

interface IProps {
    user: firebase.User | null;
}

interface IState {
    messages: Message[];
}

class Chat extends Component<IProps, IState> {
    private db = firebase.firestore();

    constructor(props: any) {
        super(props);
        const messages: Message[] = [];
        this.state = {
            messages: messages
        };
    }

    async componentDidMount() {
        const messagesRef = await this.db.collection("Messages");
        messagesRef.orderBy("date", "asc").onSnapshot(messagesData => {
            const messagesArray = messagesData.docs.map(data => {
                const messageData = data.data();
                messageData.date = messageData.date.toDate();
                messageData.id = data.id;
                return messageData;
            });
            const messages: Message[] = [];
            messagesArray.forEach((message: any) => {
                messages.push({
                    message: message.message,
                    date: message.date,
                    id: message.id,
                    userID: message.userID,
                    email: message.email
                });
            });

            this.setState({ messages });
        });
    }

    render() {
        const { messages } = this.state;
        const { user } = this.props;
        const userID = user ? user.uid : null;
        return (
            <div className="chat-wrapper">
                <Grid>
                    <div>
                        <List>
                            {messages.map(message => {
                                return (
                                    <ListItem key={message.id}>
                                        <ListItemText
                                            className={
                                                message.userID == userID
                                                    ? "sent"
                                                    : "received"
                                            }
                                            primary={message.message}
                                            secondary={`${message.email} - ${
                                                message.date
                                                    ? message.date.toLocaleTimeString()
                                                    : ""
                                            }`}
                                        />
                                    </ListItem>
                                );
                            })}
                        </List>
                    </div>
                </Grid>
            </div>
        );
    }
}

export default Chat;
