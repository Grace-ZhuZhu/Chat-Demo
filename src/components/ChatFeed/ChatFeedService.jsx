import _ from 'lodash';
import { sendMessage } from 'react-chat-engine';
import { SYSTEM_MESSAGE_TYPES } from './ChatDialog/ChatDialogService';
import { SYSTEM_NAME, SYSTEM_AUTHENTIFICATION_INFO } from '../Constants/Authinfo';

export const getPeople = (chat) => {
  if (!chat) {
    return [];
  }

  return chat.people.filter((p) => p.person.username !== SYSTEM_NAME);
};

export const getGroupName = (chat) => (chat ? chat.title : 'Group');

export const getHeaderTitle = (chat, people) => {
  const groupName = getGroupName(chat);
  const numberOfMembers = people.length;
  return `${groupName}(${numberOfMembers})`;
};

export const getSystemMessage = ({ type, info }) => {
  switch (type) {
    case SYSTEM_MESSAGE_TYPES.WELCOME:
      return `Welcome ${info.userName}`;
    case SYSTEM_MESSAGE_TYPES.GREETING:
      return `Welcome to ${info.groupName}`;
    case SYSTEM_MESSAGE_TYPES.LEAVE_GROUP:
      return `${info.userName} left group`;
    default:
      return '';
  }
};

const sendSystemMessage = (authInfo, type, info) => {
  const { chatID } = authInfo;
  const creds = SYSTEM_AUTHENTIFICATION_INFO;
  const text = getSystemMessage({
    type,
    info,
  });
  sendMessage(creds, chatID, { text });
};

export const sendWelcomeMessage = (userName, authInfo) => {
  const type = SYSTEM_MESSAGE_TYPES.WELCOME;
  const info = { userName };
  sendSystemMessage(authInfo, type, info);
};

export const sendLeaveChatMessage = (userName, authInfo) => {
  const type = SYSTEM_MESSAGE_TYPES.LEAVE_GROUP;
  const info = { userName };

  sendSystemMessage(authInfo, type, info);
};

export const shouldGreet = (chat, messages) => chat && _.isEmpty(messages);

export const sendGreetingMessage = (chat, authInfo) => {
  const groupName = getGroupName(chat);
  const type = SYSTEM_MESSAGE_TYPES.GREETING;
  const info = { groupName };
  sendSystemMessage(authInfo, type, info);
};
