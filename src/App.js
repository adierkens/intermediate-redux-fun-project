import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
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
  return (
    <div>
      <button onClick={() => props.login('foo', 'bar') }>Login</button>
      <Message sendMessage={props.sendMessage} />
    </div>
  )
}

export default connect(_.identity, {login, sendMessage})(App);