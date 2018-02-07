import React, { Component } from 'react';
import './App.css';

import { login, hear, join, say } from './chat'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { name: '', message: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleMessageChange = this.handleMessageChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleSend = this.handleSend.bind(this);
  }

  handleClick() {
    login(this.state.name, this.state.name)
      .then(({ connection, user }) => {
        join(connection)
          .then(channel =>
            this.channel = channel
          )
        hear(connection, (message, channel) => {
          console.log(message, channel)
        })
      })
  }

  handleSend() {
    say(this.channel, this.state.message)
  }

  handleChange(event) {
    this.setState({ name: event.target.value });
  }
  handleMessageChange(event) {
    this.setState({ message: event.target.value });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Star Wars Chat</h1>
        </header>
        <p>
          <label htmlFor="nickname">nickname </label>
          <input id="nickname" value={this.state.name} onChange={this.handleChange} type="text" />
          <button onClick={this.handleClick}>login</button>
        </p>
        <p>
          <label htmlFor="message">message </label>
          <input id="message" value={this.state.message} onChange={this.handleMessageChange} type="text"></input>
          <button onClick={this.handleSend}>send</button>
        </p>
      </div>
    );
  }
}

export default App;
