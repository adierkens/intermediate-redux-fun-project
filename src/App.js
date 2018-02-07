import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import Messages from './components/Messages';
import Login from './components/Login';
import { login, sendMessage } from './reducers';

function App(props) {
  console.log('props', props);
  return (
    <div>
      <Login />
      <Messages />
    </div>
  )
}

export default connect(_.identity, {login, sendMessage})(App);