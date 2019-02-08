import React, { Component } from "react";
import "./App.css";
import Chatbox from "./components/chatbox";
import Chat from "./components/chat";
import Header from "./components/header/index";
import { HeaderItem } from './models/HeaderItem';

class App extends Component {

    render() {

        return (
            <div>
                <Header title="Fire Chat" />
                <Chat />
                <Chatbox />
            </div>
        );
    }
}

export default App;
