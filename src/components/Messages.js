import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from 'styled-components';
import _ from 'lodash';
import moment from 'moment';
import Message from './Message';

import stateMock from '../stateMock';

const MessagesContainer = styles.div`
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