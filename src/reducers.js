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
    ON_SELF_MSG: 'onSelfMsg',
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

function createSelfMessage(message) {
    return {
        type: ACTIONS.ON_SELF_MSG,
        value: message
    }
}

export function logout() {

}

export function login(name) {
    const id = String(Math.random() * 100000);
    return dispatch => {
        chatLogin(id, name).then(({ connection, user }) => {
            join(connection).then(channel => {
                _channel = channel;
                dispatch({
                    type: ACTIONS.LOGGED_IN,
                    value: {
                        userId: id,
                        name,
                        loggedIn: Date.now()
                    }
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


function normalizeMessage(msg) {
    return {
        messageId: msg.messageId,
        userId: msg._sender.userId,
        text: msg.message,
        time: msg.createdAt
    }
}


export default function (oldState = {}, action) {
    switch(action.type) {
        case ACTIONS.LOGGED_IN:
            const selfUser = {
                name: action.value.name,
                lastActivityTime: Date.now()
            }
            
            const _oldUsers = oldState.users || {};
            const _newUsers = timm.set(_oldUsers, action.value.userId, selfUser);
            return timm.set(timm.set(oldState, 'users', _newUsers), 'self', action.value);
        case ACTIONS.ON_MSG:
            // Add the msg to the queue
            const newMessages = timm.addLast(oldState.messages || [], normalizeMessage(action.msg));

            // Update the users last activity
            const userId = action.msg._sender.userId;
            const oldUsers = oldState.users || {};
            const user = { userId, lastActivityTime: action.msg.createdAt, name: action.msg._sender.nickname };
        
            const newUsers = timm.set(oldUsers, userId, user);
            let state = timm.set(oldState, 'messages', newMessages);
            state = timm.set(state, 'users', newUsers);    
            return state;
        case ACTIONS.ON_SELF_MSG:
            const msg = {
                text: action.value,
                userId: oldState.self.userId,
                time: Date.now(),
                messageId: String(Math.random() * 100000)
            }

            const _newMessages = timm.addLast(oldState.messages || [], msg);
            return timm.set(oldState, 'messages', _newMessages);
        default:
            return oldState;
    }
}