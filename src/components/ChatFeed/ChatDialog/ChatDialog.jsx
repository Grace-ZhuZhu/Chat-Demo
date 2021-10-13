/* eslint-disable no-use-before-define */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-unused-expressions */
import React, { useState, useEffect, useRef } from 'react';
import _ from 'lodash';
import Message from '../Message/Message';
import {
  isMyMessage,
  getMessagesList,
  getMessageById,
  getDeletionType,
  isSystemMessage,
} from './ChatDialogService';
import ContextMenu from '../ContextMenu/ContextMenu';
import SystemNotification from '../Message/SystemNotification';
import SystemMessage from '../Message/SystemMessage';
import './ChatDialog.css';

const ChatDialog = ({
  chat,
  userName,
  messages,
  authInfo,
  onEditMessage,
}) => {
  const SYSTEM_NOTIFICATION_INITIAL_STATE = {
    show: false,
    type: null,
    info: null,
  };
  const [systemNotification, setSystemNotification] = useState(SYSTEM_NOTIFICATION_INITIAL_STATE);
  const [messagesList, setMessagesList] = useState([]);
  const [deletedMessage, setDeletedMessage] = useState('');
  const [menuOption, setMenuOption] = useState({
    event: null,
    shouldShow: false,
    props: {},
  });
  const dialogRef = useRef();

  useEffect(() => {
    const list = getMessagesList(messages);
    setMessagesList(list);
    updateScroll();
  }, [messages]);

  function updateScroll() {
    dialogRef.current.scrollTop = dialogRef.current.scrollHeight;
  }

  const handleDeleteMessage = (messageId) => {
    const message = getMessageById(messagesList, messageId);
    if (message) {
      setMessagesList(messagesList.filter((msg) => msg.id !== messageId));
      setSystemNotification({
        show: true,
        type: getDeletionType(message),
      });
      message.text && setDeletedMessage(message.text);
    }
  };

  const handleShowMenu = (option) => {
    setMenuOption(option);
  };

  const handleEditClick = () => {
    onEditMessage(deletedMessage);
    setSystemNotification(SYSTEM_NOTIFICATION_INITIAL_STATE);
  };

  const handleDismissEdit = () => {
    setSystemNotification({ show: false });
    setDeletedMessage('');
  };

  const renderMessages = () => {
    if (!chat || _.isEmpty(messagesList)) {
      return null;
    }

    return _.compact(messagesList).map((message) => {
      if (isSystemMessage(message)) {
        return (
          <SystemMessage
            key={message.id}
            message={message}
          />
        );
      }

      return (
        <div key={message.id}>
          <Message
            message={message}
            isMyMessage={isMyMessage(userName, message)}
            showMenu={handleShowMenu}
          />
        </div>
      );
    });
  };

  return (
    <div className="chat-dialog-container" ref={dialogRef}>
      <ContextMenu
        authInfo={authInfo}
        onDelete={handleDeleteMessage}
        menuOption={menuOption}
        showMenu={handleShowMenu}
      />
      {renderMessages()}
      <SystemNotification
        {...systemNotification}
        editMessage={handleEditClick}
        dismissEdit={handleDismissEdit}
      />
    </div>
  );
};

export default ChatDialog;
