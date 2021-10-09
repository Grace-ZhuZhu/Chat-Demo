import _ from 'lodash';

export const isMyMessage = (userName, message) => {
    if(_.isEmpty(message, 'sender.username') || _.isEmpty(message, 'sender')) {
        return false;
    }

    return userName === message.sender.username;
}

export const getMessagesList = (messagesObject) => {
    if(_.isEmpty(messagesObject)) {
        return [];
    }

    return Object.values(messagesObject);
}

export const getDeteledMessagesList = (messages, messageId) => {
    const index = messages.findIndex(msg => msg.messageId === messageId);
    if(index === -1) {
        return messages;
    }

    return messages.splice(index, 1);
}