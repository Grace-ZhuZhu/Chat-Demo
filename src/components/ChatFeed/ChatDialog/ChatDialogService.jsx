import _ from 'lodash';

export const isMyMessage = (userName, message) => {
    if(_.isEmpty(message, 'sender.username') || _.isEmpty(message, 'sender')) {
        return false;
    }

    return userName === message.sender.username;
}

export const getMessagesList = (messagesObject) => Object.values(messagesObject);
