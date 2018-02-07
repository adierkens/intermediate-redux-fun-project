import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from 'styled-components';
import _ from 'lodash';
import moment from 'moment';
import Message from './Message';

import stateMock from '../stateMock';

const MessagesContainer = styles.div`
  font: 14px "Helvetica Neue", Helvetica, Arial, sans-serif;
  background: white;
  font: 14px "Helvetica Neue", Helvetica, Arial, sans-serif;
  margin: 20px auto;
  max-width: 320px;
  border: 1px solid gray;
  overflow: auto;
  padding: 20px;
  border-radius: 10px;
`;

class Messages extends Component {
  render() {
    console.log(this.props.messages);
    const messages = _.map(this.props.messages, ({ text, userId, time }) => {
      const userName = this.props.users[userId].name;
      const formattedTime = moment(time).format('LT');
      const isSelf = this.props.self.userId === userId;
      return (
        <Message 
          text={text} 
          userName={userName} 
          time={formattedTime} 
          isSelf={isSelf} />
      );
    });

    return (
      <MessagesContainer>
        {messages}
      </MessagesContainer>
    );
  }
}

export default connect(state => stateMock)(Messages);