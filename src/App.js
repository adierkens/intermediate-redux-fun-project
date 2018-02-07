import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import Messages from './components/Messages';
import Login from './components/Login';
import { login, sendMessage } from './reducers';
import Bar from './components/Bar';
import Banner from './components/Banner';
import styled from 'styled-components';


const Wrapped = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  font: 14px "Helvetica Neue", Helvetica, Arial, sans-serif;
`;

const MessagesWrapper = styled.div`
  flex: 1;
  overflow-y: scroll;
`;

class App extends React.Component {

  componentDidUpdate() {
    const ele = document.getElementById('messages-wrapper');
    if (ele) {
      ele.scrollTop = 10000000;
    }
  }

  render() {
    const props = this.props;

    if (!props.self) {
      return <Login login={props.login}/>
    }

    return (
      <Wrapped>
        <Banner users={props.users} />
        <MessagesWrapper id='messages-wrapper'>
          <Messages {...props}  ref={r => this.messages = r}/>
        </MessagesWrapper>
        <Bar sendMessage={props.sendMessage} />
      </Wrapped>
    )
  }
}

export default connect(_.identity, {login, sendMessage})(App);