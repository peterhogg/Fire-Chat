import React, { Component } from 'react';
import './App.css';
import Chatbox from './components/chatbox';
import Chat from './components/chat';

class App extends Component {
  render() {
    return (
      <div>
		<Chat />
	  	<Chatbox />
      </div>
    );
  }
}

export default App;
