import React from 'react';
import TextMessage from './TextMessage';
import ImageMessage from './ImageMessage';
import { hasAttachment } from './MessageService.jsx';
import './Message.css';

const Message = ({message, isMyMessage}) => {
    if (hasAttachment(message)) {
        return (
          	<ImageMessage
            	file={message.attachments[0].file}
            	isMyMessage={isMyMessage}
          	/>
        );
      }
    
      return (
		<TextMessage 
			text={message.text} 
			isMyMessage={isMyMessage}
		/>
      );
}

export default Message
