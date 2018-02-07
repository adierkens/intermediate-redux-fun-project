import _ from 'lodash';
import timm from 'timm';
import { login as chatLogin, hear, join, say } from './chat'
import { connect } from 'react-redux';

let _channel;
let registered = false;
const SELF_ID = Symbol('self');

const ACTIONS = {
    SEND_MSG: 'sendMsg',
    ON_MSG: 'onMsg',
    LOGIN: 'login',
    LOGGED_IN: 'loggedIn'
}

function createMessageSendAction(msg) {
    return {
        type: ACTIONS.SEND_MSG,
        msg
    }
}

function createLoginAction(id, name) {
    return {
        type: ACTIONS.LOGIN,
        id,
        name
    }
}

function createMessageReceiveAction(msg) {
    return {
        type: ACTIONS.ON_MSG,
        msg
    }
}

function createSelfMessage(message, self) {
    return createMessageReceiveAction({
        message,
        sender: {
           id: SELF_ID
        }
    });
}

export function login(id, name) {
    return dispatch => {
        chatLogin(id, name).then(({ connection, user }) => {
            join(connection).then(channel => {
                _channel = channel;
                dispatch({
                    type: ACTIONS.LOGGED_IN,
                    id,
                    name,
                    timestamp: Date.now()
                });
            });

            hear(connection, (channel, message) => {
                dispatch(createMessageReceiveAction(message));
            });
        });
    }
}

export function sendMessage(message) {
    return (dispatch) => {
        
        if (!_channel) {
            console.error('You must be loggedin to send a message');
            return;
        }

        say(_channel, message);
        dispatch(createSelfMessage(message));
    }
}

export default function (oldState = {}, action) {
    switch(action.type) {
        case ACTIONS.SEND_MSG:
            return oldState;
        case ACTIONS.ON_MSG:
            // Add the msg to the queue
            const newMessages = timm.addLast(oldState.messages || [], action.msg);

            // Update the users last activity
            const senderID = action.msg.sender.id;
            const oldUsers = oldState.users || {};
            const user = { id: senderID, lastActivity: action.msg.timestamp };
        
            const newUsers = timm.set(oldUsers, senderID, user);
            let state = timm.set(oldState, 'messages', newMessages);
            state = timm.set(state, 'users', newUsers);    

            return state;
        default:
            return oldState;
    }
}