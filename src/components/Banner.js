import React from 'react';
import _ from 'lodash';
import styled from 'styled-components';

const Wrapper = styled.div`
    background-color: lightgray;
    min-height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: 10px
`;

const Avatar = styled.img`
    border-radius: 50%;
    height: 40px;
    width: 40px;
    margin-top: 20px;
    padding-left: 10px;
    padding-right: 10px;
`

const AvatarWrapper = styled.div`
    text-align: center;
`;

const StatusBubble = styled.div`
    height: 10px;
    width: 10px;
    position: relative;
    top: -30px;
    left: 14px;
    border-radius: 50%;
    background-color: ${props => props.color}
`;

const TEN_SEC = 10 * 1000;

function User(props) {
    const color = (Date.now() - props.lastActivityTime) > TEN_SEC ? 'gray' : 'green';

    return (
        <AvatarWrapper>
            <Avatar src={`http://api.adorable.io/avatars/${Math.floor(Math.random() * 10000)}/asdf.png`} />
            <div>{props.name}</div>
            <StatusBubble color={color} />
        </AvatarWrapper>
    );
}

export default function(props) {
    return (
        <Wrapper>
            {_.map(props.users, User)}
        </Wrapper>
    );
}