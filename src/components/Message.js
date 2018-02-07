import React from 'react';
import styles from 'styled-components';

const MessageContainer = styles.div`
  overflow: auto;
`;

const SubText = styles.div`
  font-size: 10px;
  color: #bbb;
  display: inline-block;
  padding: 5px;
`;

const UserName = SubText.extend`

`;

const Time = SubText.extend`

`;

const Body = styles.div`
  margin: 0 0 0.5em;
  border-radius: 1em;
  padding: 0.5em 1em;
  background: #e5e5ea;
  max-width: 75%;
  clear: both;
  position: relative;
`;

const BodySelf = Body.extend`
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

const BodyOther = Body.extend`
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

export default ({ userName, time, text, isSelf }) => {
  const body = isSelf ? <BodySelf>{text}</BodySelf> : <BodyOther>{text}</BodyOther>;

  return (
    <MessageContainer>
      <div>
        <span style={isSelf ? { float: 'right' } : {}}>
          <UserName>{userName}</UserName>
          <Time>{time}</Time>
        </span>
      </div>
      {body}
    </MessageContainer>
  );
};
