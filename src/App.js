import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import Messages from './components/Messages';
import { login, sendMessage } from './reducers';

class Message extends Component {

  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.send = this.send.bind(this);
  }

  onChange(event) {
    this.setState({
      value: event.target.value
    });
  }

  send() {
    this.props.sendMessage(this.state.value || '');
  }

  render() {
    return (
      <div>
      <textarea onChange={this.onChange}/>
      <button onClick={this.send}>Send</button>
      </div>
    )
  }
}

function App(props) {
  console.log('props', props);
  return (
    <div>
      <button onClick={() => props.login(String(Math.random() * 10000), 'bar') }>Login</button>
      <Message sendMessage={props.sendMessage} />
      <Messages />
    </div>
  )
}

export default connect(_.identity, {login, sendMessage})(App);