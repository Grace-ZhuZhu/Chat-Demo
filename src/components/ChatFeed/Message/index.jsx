import React from 'react';
import UserAvatar from './UserAvatar';
import MessageContent from './MessageContent';
import { getClassNameForMyOrOtherMessage } from './MessageService.jsx';
import './Message.css';

const Message = ({message, isMyMessage}) => {
	const user = message.sender;
    const myOrOtherMessageClass = getClassNameForMyOrOtherMessage(isMyMessage);

	return (
		<div className = { `message-container ${myOrOtherMessageClass}` } >
			< UserAvatar user={ user } />
			<MessageContent 
					username={user.username}
					message={message}
					isMyMessage={isMyMessage}
				/>
		</div>
	)
}

export default Message
