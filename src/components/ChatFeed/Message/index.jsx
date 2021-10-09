import React from 'react';
import UserAvatar from './UserAvatar';
import MessageContent from './MessageContent';
import { getClassNameForMyOrOtherMessage, getClassNameForMyOrOtherContent } from './MessageService.jsx';
import './Message.css';

const Message = ({message, isMyMessage}) => {
	const user = message.sender;
    const myOrOtherMessageClass = getClassNameForMyOrOtherMessage(isMyMessage);
    const myOrOtherContentClass = getClassNameForMyOrOtherContent(isMyMessage);

	return (
		<div className = { `message-container ${myOrOtherMessageClass}` } >
			< UserAvatar user={ user } />

			<div className={ `message-content-block ${myOrOtherContentClass}`}>
				<div className='username'> 
					{ user.username}
				</div>
				<MessageContent 
					message={message}
				/>
			</div>
		</div>
	)
}

export default Message
