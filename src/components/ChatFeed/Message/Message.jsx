import React from 'react';
import UserAvatar from './UserAvatar';
import MessageContent from './MessageContent';
import { getClassNameForMyOrOtherMessage } from './MessageService';
import './Message.css';

const Message = ({ message, isMyMessage, showMenu }) => {
  if (!message) {
    return null;
  }

  const user = message.sender;
  const myOrOtherMessageClass = getClassNameForMyOrOtherMessage(isMyMessage);

  return (
    <div className={`message-container ${myOrOtherMessageClass}`}>
      <UserAvatar user={user} />
      <MessageContent
        username={user.username}
        message={message}
        isMyMessage={isMyMessage}
        showMenu={showMenu}
      />
    </div>
  );
};

export default Message;
