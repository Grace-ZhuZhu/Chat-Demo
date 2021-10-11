import React, { useEffect } from 'react';
import { Menu, Item, useContextMenu } from 'react-contexify';
import { deleteMessage } from 'react-chat-engine';

const ContextMenu = ({ authInfo, onDelete, menuOption, showMenu }) => {
	const { show } = useContextMenu({ id: 'MENU_ID'}); 

    useEffect(() => {
        const { event, visible,  props } = menuOption;
        visible && show(event, { props });
    })

    const handleItemClick = ({ event, props }) => {
		const { messageId } = props;
        const {creds, chatID} = authInfo;
        onDelete(messageId);
        deleteMessage(creds, chatID, messageId);

        showMenu({ visible: false });
	}

    if (!menuOption.visible) {
        return null;
    }

    return (
		<Menu id='MENU_ID' className='context-menu'>
            <Item onClick={handleItemClick}> Delete message </Item>
        </Menu>
    )
}

export default ContextMenu
