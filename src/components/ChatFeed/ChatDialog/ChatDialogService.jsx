import _ from 'lodash';
import { isTextMessage } from '../Message/MessageService';
import { SYSTEM_NAME } from '../ChatFeedService';

export const SYSTEM_NOTIFICATION_TYPES = {
    DELETE_TEXT: 'DELETE_TEXT',
    DELETE_MEDIA: 'DELETE_MEDIA'
} 

export const SYSTEM_MESSAGE_TYPES = {
    WELCOME: 'WELCOME'
}

export const isSystemMessage = (message) => {
    return message.sender.username === SYSTEM_NAME;
}

export const getDeletionType = (message) => {
    if(isTextMessage(message)) {
        return SYSTEM_NOTIFICATION_TYPES.DELETE_TEXT;
    }

    return SYSTEM_NOTIFICATION_TYPES.DELETE_MEDIA;
}

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

export const getMessageById = (messages, messageId) => {
    const messagesList = getMessagesList(messages)
    return messagesList.find(msg => msg.id === messageId);
}

