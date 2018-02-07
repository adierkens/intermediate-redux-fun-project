import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from 'styled-components';
import _ from 'lodash';
import moment from 'moment';
import Message from './Message';

const MessagesContainer = styles.div`
  font: 14px "Helvetica Neue", Helvetica, Arial, sans-serif;
  background: white;
  font: 14px "Helvetica Neue", Helvetica, Arial, sans-serif;
  margin: 20px auto;
  overflow: auto;
  padding: 20px;
  border-radius: 10px;
`;

export default function(props) {
  const messages = _.map(props.messages, ({ text, userId, time }) => {
    const userName = props.users[userId].name;
    const formattedTime = moment(time).format('LT');
    const isSelf = props.self.userId === userId;
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