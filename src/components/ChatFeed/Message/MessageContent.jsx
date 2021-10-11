import React, { useRef } from 'react';
import TextContent from './TextContent';
import ImageContent from './ImageContent';
import { hasAttachment } from './MessageService.jsx';
import { getClassNameForMyOrOtherContent } from './MessageService.jsx';

const MessageContent = ({ username, message, isMyMessage, showMenu }) => {
    const myOrOtherContentClass = getClassNameForMyOrOtherContent(isMyMessage);
	const triggerRef = useRef();

	function handleContextMenu(event){
		event.preventDefault();

		isMyMessage && showMenu({ 
			event,
			shouldShow: true,
			props: {
				messageId: message.id,
			}
		});
		
	}

	const renderContent = () => {
    	if (hasAttachment(message)) {
        	return (
            	  <ImageContent
                	file={message.attachments[0].file}
              	/>
        	);
      	}
    
      	return (
        	<TextContent 
            	text={message.text} 
        	/>
      	);
	}

	return (
		<div 
			className={ `message-content-block ${myOrOtherContentClass}`}
			onContextMenu={ handleContextMenu }
			ref={triggerRef}
		>
			<div className='username'> 
				{ username}
			</div>

			{ renderContent() }
	</div>
	)
}

export default MessageContent
