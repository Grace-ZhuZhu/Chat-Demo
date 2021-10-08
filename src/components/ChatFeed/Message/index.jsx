import React from 'react';
import UserAvatar from './UserAvatar';
import MessageContent from './MessageContent';
import { getClassNameForMyOrOtherMessage } from './MessageService.jsx';
import './Message.css';

const Message = ({message, isMyMessage}) => {
	const user = message.sender;
    const myOrOtherMessageClass = getClassNameForMyOrOtherMessage(isMyMessage);

	return (
		<div className = { `message-block ${myOrOtherMessageClass}` } >
			< UserAvatar user={ user } />

			<div className='userName'> 
				{ user.username}
			</div>

			<MessageContent 
				message={message}
			/>
		</div>
	)
}

export default Message
