import React from 'react';
import styles from 'styled-components';

const MessageContainer = styles.div`
  margin: 0 0 0.5em;
  border-radius: 1em;
  padding: 0.5em 1em;
  background: #e5e5ea;
  max-width: 75%;
  clear: both;
  position: relative;
`;

const MessageSelf = MessageContainer.extend`
  float: right;
  background-color: #1289fe;
  color: white;

  &::after {
    content: "";
    position: absolute;
    right: -0.5em;
    bottom: 0;
    width: 0.5em;
    height: 1em;
    border-left: 0.5em solid #1289fe;
    border-bottom-left-radius: 1em 0.5em;
`;

const MessageOther = MessageContainer.extend`
  float: left;
      
  &::after {
    content: "";
    position: absolute;
    left: -0.5em;
    bottom: 0;
    width: 0.5em;
    height: 1em;
    border-right: 0.5em solid #e5e5ea;
    border-bottom-right-radius: 1em 0.5em;
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
