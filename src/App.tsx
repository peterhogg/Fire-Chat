import React, { Component } from "react";
import "./App.css";
import Chatbox from "./components/chatbox";
import Chat from "./components/chat";
import Header from "./components/header";
import Auth from "./components/auth";

class App extends Component {

    render() {

        return (
            <div>
				<Auth>
					<Header title="Fire Chat" />
					<Chat userID="Peter" />
					<Chatbox />
				</Auth>
            </div>
        );
    }
}

export default App;
