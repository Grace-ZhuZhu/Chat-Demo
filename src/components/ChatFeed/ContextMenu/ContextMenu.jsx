/* eslint-disable no-unused-expressions */
import React, { useEffect } from 'react';
import { Menu, Item, useContextMenu } from 'react-contexify';
import { deleteMessage } from 'react-chat-engine';
import EventWrapper from './EventWrapper';
import './ContextMenu.css';

const ContextMenu = ({
  authInfo, onDelete, menuOption, showMenu,
}) => {
  const { show } = useContextMenu({ id: 'MENU_ID' });

  useEffect(() => {
    const { event, shouldShow, props } = menuOption;
    shouldShow && show(event, { props });
  });

  const closeMenu = () => {
    showMenu({ shouldShow: false });
  };

  const handleItemClick = ({ props }) => {
    const { messageId } = props;
    const { creds, chatID } = authInfo;
    onDelete(messageId);
    deleteMessage(creds, chatID, messageId);

    closeMenu();
  };

  if (!menuOption.shouldShow) {
    return null;
  }

  return (
    <EventWrapper closeMenu={closeMenu}>
      <Menu
        id="MENU_ID"
        className="context-menu"
        tabIndex="0"
        onBlur={closeMenu}
      >
        <Item onClick={handleItemClick}> Delete message </Item>
      </Menu>
    </EventWrapper>
  );
};

export default ContextMenu;
