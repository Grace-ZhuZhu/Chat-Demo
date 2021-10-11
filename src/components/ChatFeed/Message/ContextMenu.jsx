import React from 'react';
import { Menu, Item } from 'react-contexify';
import { deleteMessage } from 'react-chat-engine';

const ContextMenu = ({ authInfo, onDelete }) => {
    const handleItemClick = ({ event, props }) => {
		const { messageId } = props;
        const {creds, chatID} = authInfo;
        onDelete(messageId);
        deleteMessage(creds, chatID, messageId);
	}

    return (
		<Menu id='MENU_ID' className='context-menu'>
            <Item onClick={handleItemClick}> Delete message </Item>
        </Menu>
    )
}

export default ContextMenu
