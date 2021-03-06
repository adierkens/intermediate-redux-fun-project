import React from 'react';
import styled from 'styled-components';


const SendButton = styled.button`
    width: 50px;
    background: transparent;
    color: #1289fe;
    font-weight: 700;
    text-align: right;
    float: left;
    cursor: pointer;
    border: none;
    &:focus {
        outline: none;
    }
`;

const StyledInput = styled.input`
    line-height: 24px;
    flex: 1;
    font: 400 'Open Sans', sans-serif;
    padding-left: 10px;
    border-radius: 20px;
    border: 1px solid lightgray;
    &:focus {
        outline: none;
    }
`;

const Wrapper = styled.div`
    display: flex;
    padding: 20px;
    justify-content: space-between;
`;

export default class Bar extends React.Component {

    constructor(props) {
        super(props);
        this.onBlur = this.onBlur.bind(this);
        this.sendMessage = this.sendMessage.bind(this);
        this.onKeyDown = this.onKeyDown.bind(this);
    }

    onBlur(event) {
        this.setState({
            value: event.target.value
        });
    } 

    onKeyDown(event) {
        if (event.key === 'Enter') {
            this.props.sendMessage(event.target.value);
        }
    }

    sendMessage() {
        if (this.state.value && this.props.sendMessage) {
            this.props.sendMessage(this.state.value);
        }
    }

    render() {
        return (
            <Wrapper>
                <StyledInput onKeyDown={this.onKeyDown} onBlur={this.onBlur} placeholder='Text Message'/>
                <SendButton onClick={this.sendMessage}>Send</SendButton>
            </Wrapper>
        )
    }
}