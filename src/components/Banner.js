import React from 'react';
import _ from 'lodash';
import styled from 'styled-components';

const Wrapper = styled.div`
    background-color: lightgray;
    min-height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Avatar = styled.img`
    border-radius: 50%;
    height: 40px;
    width: 40px;
    padding-top: 10px;
    padding-left: 10px;
    padding-right: 10px;
`

const AvatarWrapper = styled.div`
    text-align: center;
`;

function User(props) {
    console.log('rendering user', props);

    return (
        <AvatarWrapper>
            <Avatar src={`http://api.adorable.io/avatars/${Math.floor(Math.random() * 10000)}/asdf.png`} />
            <div>{props.name}</div>
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