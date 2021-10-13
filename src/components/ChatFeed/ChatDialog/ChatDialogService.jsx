import _ from 'lodash';
import { isTextMessage } from '../Message/MessageService';
import { SYSTEM_NAME } from '../../Constants/Authinfo';
import { SYSTEM_NOTIFICATION_TYPES } from '../../Constants/Types';

export const isSystemMessage = (message) => message.sender.username === SYSTEM_NAME;

export const getDeletionType = (message) => {
  if (isTextMessage(message)) {
    return SYSTEM_NOTIFICATION_TYPES.DELETE_TEXT;
  }

  return SYSTEM_NOTIFICATION_TYPES.DELETE_MEDIA;
};

export const isMyMessage = (userName, message) => {
  if (_.isEmpty(message, 'sender.username') || _.isEmpty(message, 'sender')) {
    return false;
  }

  return userName === message.sender.username;
};

export const getMessagesList = (messagesObject) => {
  if (_.isEmpty(messagesObject)) {
    return [];
  }

  // note: the Backend inserts undefined into messages after deletion
  // we need to remove those undefined values
  return _.compact(Object.values(messagesObject));
};

export function getMessageById(messagesList, messageId) {
  return messagesList.find((msg) => msg.id === messageId);
}
