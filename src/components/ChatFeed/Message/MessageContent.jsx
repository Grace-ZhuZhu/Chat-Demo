import React, { useRef } from 'react';
import { useContextMenu } from 'react-contexify';
import TextContent from './TextContent';
import ImageContent from './ImageContent';
import { hasAttachment } from './MessageService.jsx';
import { getClassNameForMyOrOtherContent } from './MessageService.jsx';

const MessageContent = ({ username, message, isMyMessage }) => {
    const myOrOtherContentClass = getClassNameForMyOrOtherContent(isMyMessage);
	const triggerRef = useRef();
	const { show, hideAll } = useContextMenu({ id: 'MENU_ID'}); 

	function handleContextMenu(event){
		  event.preventDefault();
		  const { left, top } = triggerRef.current.getBoundingClientRect();
		  show(event, {
			position: { x: left, y: top },
			props: {
				messageId: message.id,
			},
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
