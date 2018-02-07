import React, { Component } from 'react';
import styles from 'styled-components';

const MessageContainer = styles.div`

`;

const MessageSelf = MessageContainer.extend`

`;

const MessageOther = MessageContainer.extend`

`;

const UserName = styles.div`

`;

const Time = styles.div`

`;

const Body = styles.div`

`;

export default ({ userName, time, text, isSelf }) => {
  const messageContent = [
    <UserName>{userName}</UserName>,
    <Time>{time}</Time>,
    <Body>{text}</Body>
  ];

  if (isSelf) {
    return <MessageSelf>{messageContent}</MessageSelf>;
  } else {
    return <MessageOther>{messageContent}</MessageOther>;
  }
};
